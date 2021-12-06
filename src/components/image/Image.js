import React from 'react'
import noImage from "../../assets/images/noImg.png";

const Image = ({imageSrc, imageTitle}) => {
  return <img src={imageSrc ? imageSrc : noImage} alt={imageTitle} />;
}

export default Image
