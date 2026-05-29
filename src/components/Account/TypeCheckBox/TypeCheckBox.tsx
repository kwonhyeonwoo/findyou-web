import Image from "next/image";

interface Props {
  text: string;
  type: "helper" | "client";
  selectedType: "helper" | "client";
  onSelectType: (type: "helper" | "client") => void;
}

export default function TypeCheckBox({
  text,
  type,
  selectedType,
  onSelectType,
}: Props) {
  return (
    <button className="flex items-center gap-2">
      <div
        className={`rounded-items-center flex h-5 w-5 justify-center rounded-full bg-black ${type === selectedType ? "bg-black" : "border border-[#E5E7EB] bg-white"} `}
      >
        {type === selectedType && (
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
