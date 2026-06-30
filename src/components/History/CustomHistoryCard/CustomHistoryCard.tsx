import { ErrandStatus } from "@/interfaces/errand.interface";
import CustomHistoryHeader from "./components/CustomHistoryHeader";
import CustomHistoryBody from "./components/CustomHistoryBody";
import { ErrandApplicationStatus } from "@/interfaces/errand_application.interface";
import SubmitButton from "../SubmitButton/SubmitButton";

interface Props {
  images?: string[];
  title: string;
  address_dong: string;
  price: string;
  btnText: string;
  applicatoins?: {
    id: string;
    status: ErrandApplicationStatus;
  };
  status: ErrandStatus;
  appliedStatus: ErrandApplicationStatus;
  createdAt: Date;
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
      />
      <SubmitButton
        text={btnText}
        isPending={false}
        isDisabled={false}
        bgColor="bg-[#F2F4F6]"
        textColor="text-[#4E5968]"
      />
    </div>
  );
}

export default CustomHistoryCard;
