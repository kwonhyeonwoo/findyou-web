import React from "react";
import ErrandCardHeader from "./components/ErrandCardHeader";
import ErrandCardBody from "./components/ErrandCardBody";
import { ErrandStatus } from "@/interfaces/errand.interface";
import { ErrandCategory } from "@/schema/errand.schema";
import { ErrandApplicationStatus } from "@/interfaces/errand_application.interface";
import AppliedErrandBottom from "./components/AppliedErrandBottom";

interface Props {
  category: ErrandCategory;
  createdAt: Date;
  images: string[];
  description: string;
  address_dong: string;
  title: string;
  price: string;
  status: ErrandStatus;
  applicatoinStatus: ErrandApplicationStatus;
}

function AppliedErrandCard({
  category,
  createdAt,
  images,
  description,
  address_dong,
  title,
  price,
  applicatoinStatus,
  status,
}: Props) {
  console.log("applications", applicatoinStatus);

  return (
    <div className="flex cursor-pointer flex-col gap-2 rounded-[12px] border border-[#EEEEEE] p-4 shadow-2xs">
      <ErrandCardHeader
        status={status}
        category={category}
        createdAt={createdAt}
      />

      {/* 제목,내용, 주소(동) */}
      <ErrandCardBody
        image={images && images[0]}
        description={description}
        address_dong={address_dong}
        title={title}
      />

      <AppliedErrandBottom price={price} status={applicatoinStatus} />
    </div>
  );
}

export default AppliedErrandCard;
