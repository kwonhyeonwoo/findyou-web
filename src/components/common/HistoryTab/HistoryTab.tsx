'use client';
import { HISTORY_TAB } from '@/constants/history-constant';
import Link from 'next/link';
import { useHistoryTab } from './hooks/useHistoryTab';

function HistoryTab() {
  const { pathname, id, selectedTab, handleSelectedTab } = useHistoryTab();
  const TAB: { type: 'post' | 'application'; text: string }[] = [
    {
      type: 'post',
      text: '내 게시글',
    },
    {
      type: 'application',
      text: '지원내역',
    },
  ];
  return (
    <div className="flex flex-col gap-3">
      <div className="rounded-[12px] bg-[#EAECEF] p-2">
        {id ? (
          <></>
        ) : (
          <div className="flex w-full items-center justify-between">
            {HISTORY_TAB.map(({ type, text, link }) => (
              <Link
                href={link}
                className={`flex flex-1 items-center justify-center p-2 ${pathname.slice(9) === type && 'rounded-[12px] bg-white'} `}
                key={type}
              >
                <p
                  className={` ${pathname.slice(9) === type && 'text-teal-primary'} text-[14px] font-semibold text-[#8B95A1]`}
                >
                  {text}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
      {/*  게시글, 지원내역 등 탭박스 작업해야함. */}
      <div>lsdjfklsjljfl</div>
    </div>
  );
}

export default HistoryTab;
