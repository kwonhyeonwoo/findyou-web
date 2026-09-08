'use client';
import { HISTORY_TAB } from '@/constants/history-constant';
import Link from 'next/link';
import { useHistoryTab } from './hooks/useHistoryTab';
import SegmentedControl from '../SegmentedControl/SegmentedControl';

function HistoryTab() {
  const { pathname, id, searchParams, handleSagmentActive } = useHistoryTab();
  const SAGMENT_TAB: { type: 'helper' | 'errand'; text: string }[] = [
    {
      type: 'helper',
      text: '헬퍼',
    },
    {
      type: 'errand',
      text: '심부름',
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
      <div className="flex items-center gap-3">
        {SAGMENT_TAB.map((item, idx) => (
          <SegmentedControl
            key={idx}
            text={item.text}
            type={item.type}
            selectedType={searchParams.get('type')}
            handleActive={handleSagmentActive}
          />
        ))}
      </div>
    </div>
  );
}

export default HistoryTab;
