import { formatRelativeTime } from "@/lib/lib";
import Image from "next/image";

interface Props {
  profile?: string;
  nickName: string;
  createdAt: Date;
}

function ErrandDetailProfile({ profile, nickName, createdAt }: Props) {
  return (
    <div className="flex w-full justify-between pt-6">
      <div className="flex gap-3">
        {/* 프로필 */}
        {profile ? (
          <Image
            src={profile ? profile : ""}
            alt={nickName}
            width={48}
            height={48}
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-gray-500" />
        )}

        {/* 이름,시간 */}
        <div className="flex flex-col">
          <p className="text-[18px] font-medium">{nickName}</p>
          <p className="text-[12px] text-[#777586]">
            {formatRelativeTime(String(createdAt))}
          </p>
        </div>
      </div>
      {/* 별점 */}
      <div className="flex items-center gap-1">
        <Image src="/common/star.svg" alt="star" width={15} height={15} />
        <p>4.9</p>
      </div>
    </div>
  );
}

export default ErrandDetailProfile;
