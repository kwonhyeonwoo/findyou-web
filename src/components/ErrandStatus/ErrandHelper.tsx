import Image from "next/image";

interface Props {
  nickName: string;
  profile?: string;
  onProfileDetail: () => void;
}

function ErrandHelper({ profile, nickName, onProfileDetail }: Props) {
  return (
    <div className="flex items-center justify-between rounded-[12px] border border-[#E3E2E2] p-4">
      <div className="flex items-center gap-3">
        {profile ? (
          <div className="h-12 w-12 rounded-full">
            <Image
              src={`http://localhost:8000/${profile}`}
              alt={nickName}
              className="h-12 w-12 rounded-full object-cover"
              width={48}
              height={48}
            />
          </div>
        ) : (
          <div className="h-12 w-12 rounded-full bg-gray-400" />
        )}
        <div className="flex flex-col">
          <p className="text-[12px] text-[#464554]">지원자</p>
          <p>{nickName}</p>
        </div>
      </div>
      <button
        onClick={onProfileDetail}
        className="h-8 rounded-[8px] bg-black px-4 text-[12px] text-white"
      >
        상세정보
      </button>
    </div>
  );
}

export default ErrandHelper;
