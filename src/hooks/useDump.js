import { useEffect } from "react";
import db from "../data/firestore";
import { addDoc, collection } from "firebase/firestore";

const useDump = (data, colName) => {
  const colRef = collection(db, colName);
  useEffect(() => {
    const documentDump = () => {
      data.forEach(async (item) => {
        await addDoc(colRef, {
          ...item,
        });
      });
      console.log(data);
      console.log("Dumped data");
    };

    documentDump();
  }, [data]);
};

export default useDump;
