export default function OpenTalk() {
  return (
    <div className="flex flex-col justify-center gap-2">
      <label className="text-[12px] text-[#464554]">
        카카오톡 오픈채팅 링크 (선택)
      </label>
      <input
        type="text"
        placeholder="카카오톡 오픈채팅 링크를 입력해주세요."
        className="w-full flex-1 rounded-[8px] border border-[#C7C4D7] px-4 py-3"
      />
    </div>
  );
}
