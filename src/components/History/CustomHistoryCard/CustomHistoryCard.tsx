import { ErrandStatus } from "@/interfaces/errand.interface";
import CustomHistoryHeader from "./components/CustomHistoryHeader";
import CustomHistoryBody from "./components/CustomHistoryBody";
import { ErrandApplicationStatus } from "@/interfaces/errand_application.interface";
import HistoryButton from "./components/HistoryButton";

interface Props {
  id: string;
  images?: string[];
  title: string;
  address_dong: string;
  price: string;
  btnText: string;
  applicatoins?: {
    id: string;
    status: ErrandApplicationStatus;
  }[];
  status: ErrandStatus;
  appliedStatus?: ErrandApplicationStatus;
  createdAt: Date;
  Active: (id: string) => void;
}

function CustomHistoryCard({
  images,
  title,
  address_dong,
  price,
  status,
  applicatoins,
  btnText,
  appliedStatus,
  createdAt,
  id,
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
        appliedCount={applicatoins?.length}
      />
      <HistoryButton text={btnText} id={id} Active={Active} />
    </div>
  );
}

export default CustomHistoryCard;
