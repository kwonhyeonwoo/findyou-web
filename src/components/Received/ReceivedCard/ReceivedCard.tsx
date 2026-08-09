import React from 'react';
import ReceivedHeader from '../ReceivedHeader/ReceivedHeader';
import ReceivedBody from '../ReceivedBody/ReceivedBody';
import ReceivedButton from '../ReceivedFooter/ReceivedButton';
import { text } from 'stream/consumers';

function ReceivedCard() {
  const BUTTONS = [
    {
      text: '거절',
      Active: () => {},
    },
    {
      text: '수락',
      bgColor: 'bg-teal-primary',
      Active: () => {},
    },
  ];
  return (
    <div className="border-basic-border flex flex-col gap-[10px] rounded-[12px] border p-[14px]">
      <ReceivedHeader
        nickName="사악한혀누"
        rating="4.3"
        dateTime={new Date()}
      />
      <ReceivedBody message="이번 주말에 장 좀 봐주실 수 있을까요? 목록 드릴게요!" />
      <div className="flex items-center gap-2">
        {BUTTONS.map(({ text, bgColor, Active }, idx) => (
          <ReceivedButton
            key={idx}
            text={text}
            bgColor={bgColor}
            handleActive={Active}
          />
        ))}
      </div>
    </div>
  );
}

export default ReceivedCard;
