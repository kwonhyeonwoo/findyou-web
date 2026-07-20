import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import Image from "next/image";

interface Props {
  id: string;
  profile?: string;
  name: string;
  message: string;
  handleApplicationStatus: (
    id: string,
    status: "ACCEPTED" | "REJECTED",
  ) => void;
  //   scop: string;
}

function ApplicantCard({
  profile,
  name,
  message,
  id,
  handleApplicationStatus,
}: Props) {
  const STATUS_BTNS = [
    {
      text: "거절",
      isPending: false,
      isDisabled: false,
      bgColor: "bg-gray-100",
      textColor: "text-gray-600",
      onClick: () => handleApplicationStatus(id, "REJECTED"),
    },
    {
      text: "수락",
      isPending: false,
      isDisabled: false,
      bgColor: "bg-black",
      textColor: "text-white",
      onClick: () => handleApplicationStatus(id, "ACCEPTED"),
    },
  ];
  return (
    <div className="flex w-full rounded-[12px] border border-[#EEEEE] p-4">
      <div className="flex w-full flex-col">
        <div className="flex gap-2">
          {/* 프로필 */}
          <div>
            {profile ? (
              <Image
                src={`http://localhost:8000${profile}`}
                alt={name}
                width={62}
                height={62}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="h-12 w-12 rounded-full bg-gray-100" />
            )}
          </div>

          {/* 별점,수행횟수 */}
          <div>
            <p className="text-[18px]">{name}</p>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <Image
                  src="/common/star.svg"
                  width={12}
                  height={12}
                  alt="stars"
                />
                <p className="text-[12px]">
                  <span className="text-[#FFB800]">4.8</span>(128)
                </p>
              </div>
              <p className="text-[12px] text-[#464554]">수행 143회</p>
            </div>
          </div>
        </div>

        {/* 메시지 */}
        <p className="mt-3 text-[14px] leading-normal text-[#464554]">
          {message}
        </p>

        {/* 버튼 */}
        <div className="mt-4 flex w-full gap-3">
          {STATUS_BTNS.map((item) => (
            <SubmitButton
              key={item.text}
              text={item.text}
              isPending={item.isPending}
              isDisabled={item.isDisabled}
              bgColor={item.bgColor}
              textColor={item.textColor}
              onClick={item.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApplicantCard;
