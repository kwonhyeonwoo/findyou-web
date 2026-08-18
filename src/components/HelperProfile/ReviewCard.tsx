import Image from 'next/image';

interface Props {}

function ReviewCard() {
  return (
    <div className="border-basic-border flex flex-col gap-2 rounded-[12px] border-b p-3">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <div className="h-10 w-10 rounded-full bg-gray-400" />
            <div className="flex items-center gap-1">
              <p className="text-[13px] font-semibold">닉네임</p>
              <div className="h-[11px] w-[11px]">
                <Image
                  src={'/common/star.svg'}
                  alt="star"
                  width={11}
                  height={11}
                  className="h-[11px] w-[11px]"
                />
              </div>
            </div>
          </div>
          <p className="text-[12px] text-[##8B95A1]">2일전</p>
        </div>

        <p className="overflow-auto text-[13px] leading-normal whitespace-pre-line text-[#4E5968]">
          시간 약속도 정확하시고, 요청사항에 없던 부분까지 세심하게 챙겨 주셔서
          정말 감사했습니다. 다음에도 또 부탁드리고 싶어요!
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
