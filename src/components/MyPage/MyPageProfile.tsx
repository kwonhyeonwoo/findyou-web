import Image from 'next/image';

interface Props {
  profile?: string;
  nickName: string;
  handleProfileEdit: () => void;
}

function MyPageProfile({ profile, nickName, handleProfileEdit }: Props) {
  return (
    <div className="flex gap-[14px]">
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#F2F4F6]">
        <Image
          width={30}
          height={30}
          src={`${profile ? `${process.env.NEXT_PUBLIC_API_URL}${profile}` : '/icon/user.svg'}`}
          alt={nickName}
          className="h-[30px] w-[30px] rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <p className="text-[18px] font-bold text-[#1A1A1A]">{nickName}</p>
        <button className="border-basic-border rounded-[8px] border px-[12px] py-[5px] text-[12px] text-[#1A1A1A]">
          프로필 수정
        </button>
      </div>
    </div>
  );
}

export default MyPageProfile;
