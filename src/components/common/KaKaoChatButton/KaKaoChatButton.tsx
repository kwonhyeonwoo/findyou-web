interface Props {
  link: string;
}
function KaKaoChatButton({ link }: Props) {
  return (
    <a
      href={link}
      className="mt-auto w-full rounded-[8px] bg-[#FEE500] py-3 text-center font-bold"
    >
      카카오톡으로 연락하기
    </a>
  );
}

export default KaKaoChatButton;
