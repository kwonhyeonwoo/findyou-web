interface Props {
  images: string[];
  currentIndex: number;
  goToSlide: (index: number) => void;
}

export default function DotIndicator({
  images,
  currentIndex,
  goToSlide,
}: Props) {
  return (
    <div className="absolute bottom-4 left-[50%] flex -translate-x-[50%] justify-center">
      {images.map((_, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className={`cursor-pointer text-2xl transition-all duration-300 ${
            currentIndex === slideIndex
              ? "scale-125 text-white"
              : "text-gray-400 opacity-70"
          }`}
        >
          •
        </div>
      ))}
    </div>
  );
}
