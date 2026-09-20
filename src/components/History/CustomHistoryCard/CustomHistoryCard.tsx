import CustomHistoryHeader from './components/CustomHistoryHeader';
import CustomHistoryBody from './components/CustomHistoryBody';
import { ErrandApplicationResponse } from '@/interfaces/errand_application.interface';
import { CustomStatus } from '@/interfaces/common.interface';
import CustomHistoryFooter from './components/CustomHisotryFooter';
import Image from 'next/image';

interface Props {
  images?: string[];
  title: string;
  address_dong: string;
  price: string;
  applications?: ErrandApplicationResponse[];
  status: CustomStatus;
  createdAt: Date;
  hasWrittenReview: boolean;
  isReceivedReview: boolean;
  type: 'apply' | 'request';
  onDetailActive: () => void;
  handleReviewOpen: () => void;
  handleStatusActive: () => void;
}

function CustomHistoryCard({
  images,
  title,
  address_dong,
  price,
  status,
  applications,
  createdAt,
  type,
  hasWrittenReview,
  isReceivedReview,
  handleReviewOpen,
  onDetailActive,
  handleStatusActive,
}: Props) {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        onDetailActive();
      }}
      className="border-basic-border flex w-full cursor-pointer flex-col justify-center gap-3 rounded-[12px] border bg-white p-4"
    >
      <CustomHistoryHeader status={status} />
      <CustomHistoryBody
        image={images?.[0]}
        title={title}
        status={status}
        address_dong={address_dong}
        createdAt={createdAt}
        price={price}
        applications={applications}
      />
      <CustomHistoryFooter
        type={type}
        hasWrittenReview={hasWrittenReview}
        status={status}
        handleStatusActive={handleStatusActive}
      />
      {isReceivedReview && (
        <div className="-mx-4 -mb-4 flex justify-between rounded-br-[12px] rounded-bl-[12px] border border-b border-[#F2E4C4] bg-[#FFF7E8] px-3 py-2 text-[13px] font-medium">
          <p className="text-[#8A6D2B]">받은 리뷰가 도착했습니다.</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleReviewOpen();
            }}
            className="flex items-center gap-1"
          >
            <p className="text-[#8A6D2B]">보기</p>
            <Image
              src={'/common/right-arrow-amber.svg'}
              width={15}
              height={15}
              className="h-[15px] w-[15px]"
              alt="arrow"
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default CustomHistoryCard;
