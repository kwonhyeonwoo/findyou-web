import Image from 'next/image';

interface Props {
  link: string;
  saveAsDefault: boolean;
  onSelectBox?: () => void;
  onOpenLinkChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ErrandMsgOpenLink({
  link,
  saveAsDefault,
  onSelectBox,
  onOpenLinkChange,
}: Props) {
  return (
    <div className="flex w-full flex-col gap-3">
      <p className="text-[14px] font-bold">오픈채팅 링크</p>
      <div className="flex w-full flex-col gap-2">
        <div className="relative">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute top-1/2 left-2 h-5 w-5 -translate-y-1/2 text-gray-400"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          <input
            type="text"
            value={link}
            onChange={onOpenLinkChange}
            placeholder="카카오톡 오픈링크를 입력하세요."
            className="border-basic-border w-full rounded-[8px] border p-2 pl-8 text-[13px]"
          />
        </div>
        <p className="text-[13px] font-bold text-[#8a8f98]">
          매칭이 확정되면 의뢰자에게만 공개돼요.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div
          onClick={onSelectBox}
          className={`border-basic-border flex h-5 w-5 cursor-pointer items-center justify-center rounded-[6px] border p-2 ${saveAsDefault ? 'bg-teal-primary' : ''}`}
        >
          {saveAsDefault && (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3 w-3 shrink-0 text-white"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>
        <p className="text-[13px] font-bold">다음 지원부터 이 링크 자동입력</p>
      </div>
    </div>
  );
}

export default ErrandMsgOpenLink;
