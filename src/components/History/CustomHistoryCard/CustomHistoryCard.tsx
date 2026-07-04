import { ErrandStatus } from "@/interfaces/errand.interface";
import CustomHistoryHeader from "./components/CustomHistoryHeader";
import CustomHistoryBody from "./components/CustomHistoryBody";
import {
  ErrandApplicationResponse,
  ErrandApplicationStatus,
} from "@/interfaces/errand_application.interface";
import HistoryButton from "./components/HistoryButton";

interface Props {
  idx: number;
  images?: string[];
  title: string;
  address_dong: string;
  price: string;
  btnText: string;
  applications?: ErrandApplicationResponse[];
  status: ErrandStatus;
  appliedStatus?: ErrandApplicationStatus;
  createdAt: Date;
  Active: (idx: number) => void;
}

function CustomHistoryCard({
  images,
  title,
  address_dong,
  price,
  status,
  applications,
  btnText,
  appliedStatus,
  createdAt,
  idx,
  Active,
}: Props) {
  return (
    <div className="flex w-full flex-col justify-center gap-3 rounded-[12px] border border-[#E3E2E2] p-4">
      <CustomHistoryHeader status={status} />
      <CustomHistoryBody
        image={images?.[0]}
        title={title}
        address_dong={address_dong}
        createdAt={createdAt}
        price={price}
        applyStatus={appliedStatus}
        appliedCount={applications?.length}
      />
      <HistoryButton text={btnText} idx={idx} Active={Active} />
    </div>
  );
}

export default CustomHistoryCard;
