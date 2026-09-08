import Image from 'next/image';

interface Props {
  onKaKaoOpenLink: () => void;
}

function ErrandHelperKaKao({ onKaKaoOpenLink }: Props) {
  return (
    <button
      onClick={onKaKaoOpenLink}
      className="flex w-full items-center justify-center gap-2 rounded-[12px] bg-[#FEE500] py-4"
    >
      <Image src={'/icon/kakao.svg'} alt="kakao" width={18} height={18} />
      <span className="text-[14px] font-bold text-[#191919]">연락하기</span>
    </button>
  );
}

export default ErrandHelperKaKao;
