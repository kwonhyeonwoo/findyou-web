import { useState } from "react";

export const useSliderImg = (images: string[]) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleSlide = (type: "prev" | "next") => {
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === images.length - 1;
    if (type === "prev") {
      const newIndex = isFirst ? images.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    } else {
      const newIndex = isLast ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };
  return {
    currentIndex,
    handleSlide,
    goToSlide,
  };
};
