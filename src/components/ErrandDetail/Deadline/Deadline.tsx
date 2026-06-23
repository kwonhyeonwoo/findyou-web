import Image from "next/image";
import React from "react";

interface Props {
  deadline: string;
}
export default function Deadline({ deadline }: Props) {
  return (
    <div className="flex items-center gap-1">
      <Image
        src="/write-errand/deadline.svg"
        alt="deadline"
        width={15}
        height={15}
      />
      <p className="text-[14px]">마감시간: {deadline}</p>
    </div>
  );
}
