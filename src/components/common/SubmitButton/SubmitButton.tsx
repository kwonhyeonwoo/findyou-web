import Loading from "../Loading/Loading";

interface Props {
  text: string;
  isPending: boolean;
  isDisabled: boolean;
  bgColor?:string
}

export default function SubmitButton({ text, bgColor,isPending, isDisabled }: Props) {
  return (
    <button
      disabled={isDisabled}
      type="submit"
      className={`w-full rounded-[12px] py-4 font-bold transition-colors duration-200 ${
        isDisabled
          ? "cursor-not-allowed bg-[#F2F4F6] text-[#B0B8C1]"
          : `cursor-pointer ${bgColor ? bgColor : 'bg-black'} text-white  active:bg-gray-900`
      }`}
    >
      {isPending ? <Loading /> : text}
    </button>
  );
}
