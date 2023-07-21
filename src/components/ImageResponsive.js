import React, { useState, useEffect } from "react";
import { Image, Dimensions } from "react-native";

const ImageResponsive = ({ source: { sourceWidth, uri }, aspectRatio }) => {
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);

  const calculateHeight = () => {
    const containerWidth = sourceWidth;
    return containerWidth / aspectRatio;
  };

  useEffect(() => {
    setWidth(sourceWidth);
    console.log(calculateHeight());
    setHeight(calculateHeight());
  }, [sourceWidth]);

  return (
    <Image
      source={{
        uri: uri,
        height: height,
        width: width,
      }}
      style={{ resizeMode: "contain", marginTop: 15 }}
    />
  );
};

export default ImageResponsive;
