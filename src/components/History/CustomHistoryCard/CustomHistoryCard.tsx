import CustomHistoryHeader from './components/CustomHistoryHeader';
import CustomHistoryBody from './components/CustomHistoryBody';
import { ErrandApplicationResponse } from '@/interfaces/errand_application.interface';
import { CustomStatus } from '@/interfaces/common.interface';
import CustomHistoryFooter from './components/CustomHisotryFooter';

interface Props {
  images?: string[];
  title: string;
  address_dong: string;
  price: string;
  applications?: ErrandApplicationResponse[];
  status: CustomStatus;
  createdAt: Date;
  hasWrittenReview: boolean;
  type: 'apply' | 'request';
  onClick: () => void;
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
  onClick,
}: Props) {
  return (
    <div className="flex w-full flex-col justify-center gap-3 rounded-[12px] border border-[#E3E2E2] p-4">
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
        handleActive={onClick}
      />
    </div>
  );
}

export default CustomHistoryCard;
