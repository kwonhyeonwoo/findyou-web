interface Props {
  text: string;
  isDisabled: boolean;
}

export default function SubmitButton({ text, isDisabled }: Props) {
  console.log("isdisabled", isDisabled);
  return (
    <button
      disabled={isDisabled}
      type="submit"
      className={`w-full rounded-[12px] py-4 font-bold transition-colors duration-200 ${
        isDisabled
          ? "cursor-not-allowed bg-[#F2F4F6] text-[#B0B8C1]"
          : "cursor-pointer bg-black text-white hover:bg-gray-800 active:bg-gray-900"
      }`}
    >
      {text}
    </button>
  );
}
