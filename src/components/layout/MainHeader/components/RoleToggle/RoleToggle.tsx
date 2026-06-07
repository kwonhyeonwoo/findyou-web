interface Props {
  type: "helper" | "client" | null;
  onToggleBtn: () => void;
}

export default function RoleToggle({ type, onToggleBtn }: Props) {
  return (
    <button
      onClick={onToggleBtn}
      className="rounded-full bg-[#F0EEFF] px-3 py-[6px] text-[14px] font-bold text-[#2A14B4]"
    >
      {type === "helper" ? "헬퍼" : "요청자"}
      {type === null && "로그인"}
    </button>
  );
}
