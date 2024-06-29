"use client";

import { useState } from "react";
import TestimonialCard from "../../../components/TestimonialCard";
import { TESTIMONIAL_DATA } from "../../../public/data";

const SLIDER_DURATION_IN_MILLISECONDS = 5000;

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonial, setTestimonial] = useState({
    profileImageUrl: TESTIMONIAL_DATA[0].profileImageURL,
    alt: TESTIMONIAL_DATA[0].alt,
    description: TESTIMONIAL_DATA[0].description,
    creator: TESTIMONIAL_DATA[0].creator,
  });

  const slide = () => {
    let newCurrentIndex = currentIndex + 1;
    if (currentIndex === TESTIMONIAL_DATA.length - 1) {
      newCurrentIndex = 0;
    }

    setCurrentIndex(newCurrentIndex);
    setTestimonial((prevState) => ({
      ...prevState,
      profileImageUrl: TESTIMONIAL_DATA[newCurrentIndex].profileImageURL,
      alt: TESTIMONIAL_DATA[newCurrentIndex].alt,
      description: TESTIMONIAL_DATA[newCurrentIndex].description,
      creator: TESTIMONIAL_DATA[newCurrentIndex].creator,
    }));
  };

  setTimeout(slide, SLIDER_DURATION_IN_MILLISECONDS);

  return (
    <TestimonialCard
      profileImageUrl={testimonial.profileImageUrl}
      alt={testimonial.alt}
      description={testimonial.description}
      creator={testimonial.creator}
    />
  );
}
