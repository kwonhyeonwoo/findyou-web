import React from "react";

interface Props {
  textLength: number;
  text: string;
  onTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function HelperReviewTextarea({ text, textLength, onTextChange }: Props) {
  return (
    <div className="flex flex-col gap-4 p-6">
      <p className="text-[18px] font-bold">자세한 후기를 남겨주세요 !</p>
      <div className="relative">
        <textarea
          value={text}
          onChange={onTextChange}
          placeholder="후기를 남겨주세요"
          className="h-[162px] w-full resize-none rounded-[8px] border border-[#E5E7EB] p-4 text-[14px] outline-none"
        />
        <p className="absolute right-4 bottom-4 text-[12px] text-[#9CA3AF]">
          {textLength}/100
        </p>
      </div>
    </div>
  );
}

export default HelperReviewTextarea;
