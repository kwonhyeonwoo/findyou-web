'use client';
import { useErrandDetail } from './hooks/useErrandDetail';
import ErrandContent from '@/components/ErrandDetail/ErrandContent/ErrandContent';
import AddressCard from '@/components/Errand/AddressCard';
import SubmitButton from '@/components/common/SubmitButton/SubmitButton';
import { useSliderImg } from './hooks/useSliderImg';
import ErrandMessageModal from '@/components/ErrandDetail/ErrandMessageModal/ErrandMessageModal';
import ErrandImage from '@/components/ErrandDetail/ErrandImage/ErrandImage';
import ErrandDetailProfile from '@/components/ErrandDetail/ErrandDetailProfile/ErrandDetailProfile';
import ErrandCategoryStatus from '@/components/ErrandDetail/ErrandCategoryStatus/ErrandCategoryStatus';

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
  if (!data) return null;
  return (
    <div className="flex min-h-screen flex-col items-center gap-6 pb-20">
      {/* 이미지 */}
      {data.images.length > 0 && (
        <ErrandImage
          images={data.images}
          currentIndex={currentIndex}
          handleSlide={handleSlide}
          goToSlide={goToSlide}
        />
      )}

      {/* 프로필, 프로필정보, 별점 */}
      <ErrandDetailProfile
        profile={data.user?.profile}
        nickName={data.user?.nickName}
        createdAt={data.createdAt}
      />
      {/* 카테고리, 상태 */}
      <ErrandCategoryStatus status={data.status} category={data.category} />
      {/* 내용 */}
      <ErrandContent
        deadlineTime={data.deadlineTime}
        title={data.title}
        price={data.price}
        description={data.description}
      />

      {/* 카톡 오픈링크, 주소 */}
      <AddressCard lat={data.lat} lng={data.lng} />
      <div className="mt-auto flex w-full items-center justify-center border-t border-t-[#C7C4D7] py-4">
        <SubmitButton
          text="심부름 신청"
          isPending={isPending}
          onClick={handleIsOpen}
          bgColor="bg-teal-primary"
          isDisabled={data?.user?.id === uid ? true : false}
        />
      </div>
      <ErrandMessageModal
        isOpen={isOpen}
        message={message}
        title="의뢰자에게 어필할 수 있는 간단한 소개를 남겨주세요!"
        handleIsOpen={handleIsOpen}
        handleChangeMessage={handleChangeMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
