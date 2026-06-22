"use client";

import { formatRelativeTime } from "@/lib/lib";
import { useErrandDetail } from "./hooks/useErrandDetail";
import Image from "next/image";
import ErrandContent from "@/components/ErrandDetail/ErrandContent/ErrandContent";
import KaKaoOpenLink from "@/components/ErrandDetail/KaKaoOpenLink";
import AddressCard from "@/components/Errand/AddressCard";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import { useSliderImg } from "./hooks/useSliderImg";
import PaginationButton from "@/components/ErrandDetail/PaginationButton/PaginationButton";

export default function ErrandDetailTemplate() {
  const { data, uid, isPending, handleKaKaoOpenLink } = useErrandDetail();
  const { currentIndex, prevSlide, nextSlide, goToSlide, handleSlide } =
    useSliderImg(data?.images || []);
  if (!data) return;
  return (
    <div className="flex min-h-screen flex-col items-center gap-6">
      {/* 이미지 */}
      {data.images.length > 0 && (
        <div className="group relative h-120 w-full">
          <div className="relative h-full w-full overflow-hidden bg-cover bg-center duration-500">
            {data?.images?.[currentIndex] && (
              <Image
                // 한글/공백 방어를 위해 encodeURI 사용
                src={`http://localhost:8000${data.images[currentIndex]}`}
                alt={`심부름 이미지 ${currentIndex + 1}`} // alt도 현재 이미지에 맞게 변경
                width={480}
                height={480}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          {["prev", "next"].map((item, idx) => (
            <PaginationButton
              key={idx}
              type={item as "prev" | "next"}
              handleSlide={handleSlide}
            />
          ))}
          {/* <button
            onClick={prevSlide}
            className="transition-color absolute top-[50%] left-5 -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="transition-color absolute top-[50%] right-5 -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white"
          >
            ❯
          </button> */}
          <div className="absolute bottom-4 left-[50%] flex -translate-x-[50%] justify-center">
            {data?.images.map((_, slideIndex) => (
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
        </div>
      )}

      {/* 프로필, 프로필정보, 별점 */}
      <div className="flex w-full justify-between pt-6">
        <div className="flex gap-3">
          {data.user?.profile ? (
            <Image
              src={data?.user?.profile ? data.user.profile : ""}
              alt={`${data?.user?.name}`}
              width={48}
              height={48}
            />
          ) : (
            <div className="h-12 w-12 rounded-full bg-gray-500" />
          )}
          <div className="flex flex-col">
            <p className="text-[18px] font-medium">{data.user?.name}</p>
            <p className="text-[12px] text-[#777586]">
              {formatRelativeTime(String(data.createdAt))}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Image src="/common/star.svg" alt="star" width={15} height={15} />
          <p>4.9</p>
        </div>
      </div>

      {/* content */}
      <div className="w-full">
        <ErrandContent
          category={data.category}
          status={data.status}
          title={data.title}
          price={data.price}
          description={data.description}
        />
      </div>

      {/* 카톡 오픈링크, 주소 */}
      <div className="flex w-full flex-col gap-6">
        <KaKaoOpenLink
          link={data.openLink}
          handleKaKaoOpenLink={handleKaKaoOpenLink}
        />
        <AddressCard address={data.address} />
      </div>
      <div className="mt-auto flex w-full items-center justify-center border-t border-t-[#C7C4D7] py-4">
        <SubmitButton
          text="심부름 신청"
          isPending={isPending}
          bgColor="bg-[#2A14B4]"
          isDisabled={data?.user?.id === uid ? true : false}
        />
      </div>
    </div>
  );
}
