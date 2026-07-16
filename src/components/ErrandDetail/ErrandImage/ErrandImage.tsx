import PaginationButton from "../PaginationButton/PaginationButton";
import DotIndicator from "@/components/common/DotIndicator/DotIndicator";
import { ErrandResponse } from "@/interfaces/errand.interface";
import Image from "next/image";

interface Props {
  images: string[];
  currentIndex: number;
  handleSlide: (type: "prev" | "next") => void;
  goToSlide: (index: number) => void;
}

function ErrandImage({ images, currentIndex, handleSlide, goToSlide }: Props) {
  return (
    <div className="group relative h-120 w-full">
      <div className="relative h-full w-full overflow-hidden bg-cover bg-center duration-500">
        <Image
          src={`http://localhost:8000${images[currentIndex]}`}
          alt={`심부름 이미지 ${currentIndex + 1}`}
          width={480}
          height={480}
          className="h-full w-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <>
          {["prev", "next"].map((item, idx) => (
            <PaginationButton
              key={idx}
              type={item as "prev" | "next"}
              handleSlide={handleSlide}
            />
          ))}
          <DotIndicator
            images={images}
            currentIndex={currentIndex}
            goToSlide={goToSlide}
          />
        </>
      )}
    </div>
  );
}

export default ErrandImage;
