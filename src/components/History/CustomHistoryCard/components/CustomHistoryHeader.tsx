import { ErrandStatus } from "@/interfaces/errand.interface";
import Image from "next/image";

interface Props {
  status: ErrandStatus;
}

function CustomHistoryHeader({ status }: Props) {
  return (
    <div className="items-centere flex w-full justify-between">
      <p className="text-[12px] font-bold">
        {status === "matching"
          ? "대기중"
          : status === "in_progress"
            ? "진행중"
            : "완료"}
      </p>
      <Image
        src={"/history-card/meatball.svg"}
        alt="Meatball"
        width={14}
        height={2}
      />
    </div>
  );
}

export default CustomHistoryHeader;
