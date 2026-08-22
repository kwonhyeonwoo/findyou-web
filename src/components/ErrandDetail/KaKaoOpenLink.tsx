import Image from 'next/image';

interface Props {
  link: string;
  handleKaKaoOpenLink: (link: string) => void;
}

export default function KaKaoOpenLink({ link, handleKaKaoOpenLink }: Props) {
  return (
    <div
      onClick={() => handleKaKaoOpenLink(link)}
      className="flex w-full cursor-pointer justify-between rounded-[12px] border border-[#C7C4D7] p-4"
    >
      <div className="flex items-center gap-3">
        <Image
          width={40}
          height={40}
          src={'/errand/kakao-open.svg'}
          alt="kakao-open"
        />
        <div className="flex flex-col">
          <p className="text-[14px] text-[#1B1C1C]">
            카카오톡 오픈채팅으로 문의하기
          </p>
          <p className="text-[12px] text-[#777586]">
            빠른 답변을 원하시면 클릭하세요
          </p>
        </div>
      </div>
      <Image
        src="/common/right-arrow.svg"
        alt="right-arrow"
        width={7}
        height={12}
      />
    </div>
  );
}
