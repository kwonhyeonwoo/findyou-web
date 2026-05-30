import Image from "next/image";

interface Props {
  text: string;
  type: "helper" | "client";
  currentType: "helper" | "client";
  handleChangeType: ({ type }: { type: "helper" | "client" }) => void;
}

export default function TypeCheckBox({
  text,
  type,
  currentType,
  handleChangeType,
}: Props) {
  return (
    <button
      type="button"
      className="flex items-center gap-2"
      onClick={() => handleChangeType({ type })}
    >
      <div
        className={`rounded-items-center flex h-5 w-5 justify-center rounded-full bg-black ${type === currentType ? "bg-black" : "border border-[#E5E7EB] bg-white"} `}
      >
        {type === currentType && (
          <Image
            src="/icon/check-icon.svg"
            alt="check-box"
            width={12}
            height={12}
          />
        )}
      </div>
      <p className="text-[#0B1C30]">{text}</p>
    </button>
  );
}
