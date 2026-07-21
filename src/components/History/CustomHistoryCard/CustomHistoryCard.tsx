import { ErrandStatus } from '@/interfaces/errand.interface';
import CustomHistoryHeader from './components/CustomHistoryHeader';
import CustomHistoryBody from './components/CustomHistoryBody';
import { ErrandApplicationResponse } from '@/interfaces/errand_application.interface';
import HistoryButton from './components/HistoryButton';

interface Props {
  idx: number;
  images?: string[];
  title: string;
  address_dong: string;
  price: string;
  btnText: string;
  applications?: ErrandApplicationResponse[];
  status: ErrandStatus;
  createdAt: Date;
  onClick: () => void;
}

function CustomHistoryCard({
  images,
  title,
  address_dong,
  price,
  status,
  applications,
  btnText,
  createdAt,
  idx,
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
      <HistoryButton text={btnText} idx={idx} onClick={onClick} />
    </div>
  );
}

export default CustomHistoryCard;
