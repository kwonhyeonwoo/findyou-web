import Image from 'next/image';

interface Props {}

function ReviewCard() {
  return (
    <div className="flex flex-col gap-2 rounded-[12px] border border-[#E3E2E2] p-4">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="h-10 w-10 rounded-full bg-gray-400" />
          <div className="flex flex-col gap-1">
            <Image src={'/common/star.svg'} alt="star" width={11} height={11} />
            <p className="text-[12px]">2일전 / 편의점 물품 배달</p>
          </div>
        </div>
        <p className="overflow-auto text-[14px] leading-normal whitespace-pre-line">
          시간 약속도 정확하시고, 요청사항에 없던 부분까지 세심하게 챙겨 주셔서
          정말 감사했습니다. 다음에도 또 부탁드리고 싶어요!
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
