import { ErrandResponse } from '@/interfaces/errand.interface';
import { formatDate } from '@/lib/lib';
import Image from 'next/image';
import React from 'react';

interface Props {
  errands: ErrandResponse[];
}

function CompletedErrand({ errands }: Props) {
  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex w-full items-center justify-between">
        <p className="text-[18px]">수행 완료한 심부름</p>
        <p className="text-[14px] text-[#777586]">전체보기</p>
      </div>
      <div className="flex flex-col gap-3">
        {errands.map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-col gap-2 rounded-[12px] border border-[#E3E2E2] p-4"
          >
            {/* 날짜, 가격 */}
            <div className="flex items-center justify-between">
              <p className="text-[12px] text-[#464554]">
                {formatDate(item.createdAt)}
              </p>
              <p className="font-bold">{item.price}</p>
            </div>
            {/* 제목, 출발지/도착지 */}
            <p>{item.title}</p>
            <div className="flex items-center gap-1">
              <Image
                src="/common/address.svg"
                width={10}
                height={13}
                alt="address"
              />
              <p className="text-[12px] text-[#777586]">{item.address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompletedErrand;
