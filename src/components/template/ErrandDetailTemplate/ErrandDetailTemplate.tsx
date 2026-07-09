"use client";
import { formatRelativeTime } from "@/lib/lib";
import { useErrandDetail } from "./hooks/useErrandDetail";
import Image from "next/image";
import ErrandContent from "@/components/ErrandDetail/ErrandContent/ErrandContent";
import AddressCard from "@/components/Errand/AddressCard";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import { useSliderImg } from "./hooks/useSliderImg";
import PaginationButton from "@/components/ErrandDetail/PaginationButton/PaginationButton";
import DotIndicator from "@/components/common/DotIndicator/DotIndicator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ErrandMessageModal from "@/components/ErrandDetail/ErrandMessageModal/ErrandMessageModal";

export default function ErrandDetailTemplate() {
  const {
    data,
    uid,
    isPending,
    isOpen,
    message,
    handleSubmit,
    handleIsOpen,
    handleChangeMessage,
  } = useErrandDetail();
  const { currentIndex, goToSlide, handleSlide } = useSliderImg(
    data?.images || [],
  );
  if (!data) return;
  return (
    <div className="flex min-h-screen flex-col items-center gap-6 pb-20">
      {/* 이미지 */}
      {data.images.length > 0 && (
        <div className="group relative h-120 w-full">
          <div className="relative h-full w-full overflow-hidden bg-cover bg-center duration-500">
            <Image
              // 한글/공백 방어를 위해 encodeURI 사용
              src={`http://localhost:8000${data.images[currentIndex]}`}
              alt={`심부름 이미지 ${currentIndex + 1}`} // alt도 현재 이미지에 맞게 변경
              width={480}
              height={480}
              className="h-full w-full object-cover"
            />
          </div>
          {data.images.length > 1 && (
            <>
              {["prev", "next"].map((item, idx) => (
                <PaginationButton
                  key={idx}
                  type={item as "prev" | "next"}
                  handleSlide={handleSlide}
                />
              ))}
              <DotIndicator
                images={data.images}
                currentIndex={currentIndex}
                goToSlide={goToSlide}
              />
            </>
          )}
        </div>
      )}

      {/* 프로필, 프로필정보, 별점 */}
      <div className="flex w-full justify-between pt-6">
        <div className="flex gap-3">
          {/* 프로필 */}
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

          {/* 이름,시간 */}
          <div className="flex flex-col">
            <p className="text-[18px] font-medium">{data.user?.name}</p>
            <p className="text-[12px] text-[#777586]">
              {formatRelativeTime(String(data.createdAt))}
            </p>
          </div>
        </div>
        {/* 별점 */}
        <div className="flex items-center gap-1">
          <Image src="/common/star.svg" alt="star" width={15} height={15} />
          <p>4.9</p>
        </div>
      </div>

      {/* content */}
      <ErrandContent
        category={data.category}
        status={data.status}
        title={data.title}
        price={data.price}
        description={data.description}
      />

      {/* 카톡 오픈링크, 주소 */}
      <AddressCard address={data.address} />
      <div className="mt-auto flex w-full items-center justify-center border-t border-t-[#C7C4D7] py-4">
        <SubmitButton
          text="심부름 신청"
          isPending={isPending}
          Active={handleIsOpen}
          bgColor="bg-[#2A14B4]"
          isDisabled={data?.user?.id === uid ? true : false}
        />
      </div>
      <ErrandMessageModal
        isOpen={isOpen}
        message={message}
        handleIsOpen={handleIsOpen}
        handleChangeMessage={handleChangeMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
