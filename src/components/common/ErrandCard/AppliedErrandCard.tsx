import React from "react";
import ErrandCardHeader from "./components/ErrandCardHeader";
import ErrandCardBody from "./components/ErrandCardBody";

function AppliedErrandCard() {
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
    </div>
  );
}

export default AppliedErrandCard;
