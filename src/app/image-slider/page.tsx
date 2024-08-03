"use client";

import Image from "next/image";
import styles from "./style.module.css";
import { IMAGE_SLIDER_DATA } from "../../../public/data";
import { useEffect, useState } from "react";

const getNextIndex = (imageIndex: number, maxLength: number) => {
  return imageIndex === maxLength - 1 ? 0 : imageIndex + 1;
};

export default function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const slideImage = (imageIndex = 0) => {
    const allImagesLength = IMAGE_SLIDER_DATA.length;

    setTimeout(() => {
      const newImageIndex = getNextIndex(imageIndex, allImagesLength);
      setCurrentImageIndex(newImageIndex);
      slideImage(newImageIndex);
    }, 3000);
  };

  useEffect(slideImage, []);

  const sliderTransform = {
    transform: `translateX(-${currentImageIndex * 500}px)`
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.sliderContainer}>
        {IMAGE_SLIDER_DATA.map((image) => (
          <Image
            style={sliderTransform}
            key={image.id}
            className={styles.image}
            src={image.profileImageURL}
            alt={image.alt}
            width={500}
            height={300}
          />
        ))}
      </div>
    </div>
  );
}
