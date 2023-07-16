// import { useEffect, useState } from "react";
import {
  getDay,
  getHours,
  getMinutes,
  format,
  setHours,
  setMinutes,
} from "date-fns";

const useBusinessStatus = (userDate, businessHours) => {
  const currStatus = {
    isOpen: false,
    status: "Cerrado",
    message: "Abre a las 03:30 p.m.",
  };
  businessHours.sort((a, b) => a.id - b.id);
  const weekdayIndex = getDay(userDate);
  const currHour = getHours(userDate);
  const currMin = getMinutes(userDate);
  console.log(`${currHour}:${currMin}`);

  const parseHour = (timeString) => {
    const [hour, minutes] = timeString.split(":").map(Number);
    return [hour, minutes];
  };
  const format12hr = ([hours, minutes]) => {
    const date = setMinutes(setHours(new Date(), hours), minutes);
    const formattedTime = format(date, "h:mm aaaa");

    return formattedTime;
  };

  const [openHours, openMinutes] = parseHour(businessHours[weekdayIndex].open);
  const [closeHours, closeMinutes] = parseHour(
    businessHours[weekdayIndex].close
  );
  let isAfter = false; // condition for opening message same or next day
  if (currHour >= openHours && currMin >= openMinutes) {
    currStatus.isOpen = true;
    currStatus.status = "Abierto";

    if (currHour >= closeHours && currMin >= closeMinutes) {
      currStatus.isOpen = false;
      currStatus.status = "Cerrado";
      isAfter = true;
    }
  }
  console.log({ isOpen: currStatus.isOpen, isAfter });
  console.log(businessHours);
  if (currStatus.isOpen) {
    const closeTime = format12hr(parseHour(businessHours[weekdayIndex].close));
    currStatus.message = `Cierra a las ${closeTime}`;
  } else if (!currStatus.isOpen && isAfter) {
    // next day
    const openTime = format12hr(
      parseHour(businessHours[weekdayIndex !== 6 ? weekdayIndex + 1 : 0].open)
    );
    currStatus.message = `Abre mañana a las ${openTime}`;
  } else if (!currStatus.isOpen && !isAfter) {
    // same day
    const openTime = format12hr(parseHour(businessHours[weekdayIndex].open));
    currStatus.message = `Abre a las ${openTime}`;
  }

  return currStatus;
};

export default useBusinessStatus;
