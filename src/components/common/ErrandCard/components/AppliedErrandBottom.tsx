import { ErrandApplicationStatus } from "@/interfaces/errand_application.interface";
import React from "react";

interface Props {
  price: string;
  status: ErrandApplicationStatus;
}

const AppliedErrandBottom = ({ price, status }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[18px] font-semibold text-[#170083]">{price}</p>
      <div
        className={`text-[14px] font-bold ${status === "PENDING" ? "text-[#2E7D32]" : status === "ACCEPTED" ? "text-[#008000]" : "text-[#FF0000]"}`}
      >
        {status === "PENDING"
          ? "대기중"
          : status === "ACCEPTED"
            ? "수락"
            : "거절"}
      </div>
    </div>
  );
};

export default AppliedErrandBottom;
