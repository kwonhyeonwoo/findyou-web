import CustomHistoryHeader from './components/CustomHistoryHeader';
import CustomHistoryBody from './components/CustomHistoryBody';
import { ErrandApplicationResponse } from '@/interfaces/errand_application.interface';
import HistoryButton from './components/HistoryButton';
import { CustomStatus } from '@/interfaces/common.interface';

interface Props {
  images?: string[];
  title: string;
  address_dong: string;
  price: string;
  applications?: ErrandApplicationResponse[];
  status: CustomStatus;
  createdAt: Date;
  type: 'apply' | 'errand';
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
      <HistoryButton
        status={status}
        count={applications?.length || 0}
        type={type}
        onClick={onClick}
      />
    </div>
  );
}

export default CustomHistoryCard;
