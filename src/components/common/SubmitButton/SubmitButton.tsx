import Loading from '../Loading/Loading';

interface Props {
  text: string;
  isPending: boolean;
  isDisabled: boolean;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
}

export default function SubmitButton({
  text,
  bgColor,
  isPending,
  isDisabled,
  textColor,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={isDisabled}
      type="submit"
      className={`w-full rounded-[12px] py-4 text-[14px] font-bold transition-colors duration-200 ${
        isDisabled
          ? 'cursor-not-allowed bg-[#F2F4F6]'
          : `cursor-pointer ${bgColor ? bgColor : 'bg-black'} ${textColor ? textColor : 'text-white'} active:bg-gray-900`
      }`}
    >
      {isPending ? <Loading /> : text}
    </button>
  );
}
