import Image from 'next/image';
import { HelperPostResponse } from '@/interfaces/helper-post.interface';
import { CATEGORY_BG_STYLE } from '@/constants/category-constants';
import { fillterCategory } from '@/lib/lib';
import { HelperApplicationResponse } from '@/interfaces/helper-application.interface';
import { CustomStatus } from '@/interfaces/common.interface';
interface Props {
  data: HelperPostResponse;
  acceptedApplication?: HelperApplicationResponse;
  handleAcceptedActive: (appliId: string) => void;
  handleReceivedHistory: (helperPostId: string) => void;
}
function ReceivedCard({
  data,
  acceptedApplication,
  handleAcceptedActive,
  handleReceivedHistory,
}: Props) {
  const isApplicationLength = data.applications.filter(
    (item) =>
      item.status !== CustomStatus.REJECTED &&
      item.status !== CustomStatus.COMPLETED,
  );
  console.log('first', isApplicationLength.length);
  return (
    <div
      onClick={() => {
        if (acceptedApplication) {
          // 심부름 진행내역으로
          handleAcceptedActive(acceptedApplication.id);
        } else {
          // 지원자 내역으로
          handleReceivedHistory(data.id);
        }
      }}
      className="border-basic-border flex cursor-pointer items-center justify-between gap-2 border-b pb-4"
    >
      {/* 카테고리이미지, 제목, 카테고리, 시간 */}
      <div className="flex items-center gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full ${CATEGORY_BG_STYLE[data.category]}`}
        >
          <Image
            src={`/category/${data.category.toLowerCase()}.svg`}
            alt={data.category}
            className="h-6 w-6 rounded-[8px]"
            width={24}
            height={24}
          />
        </div>
        <div className="flex flex-col">
          <p className="font-bold">{data.title}</p>
          <div className="flex items-center gap-1 text-[13px] text-[#4E5968]">
            <p>{fillterCategory(data.category)}</p>
            <p>2일전</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div>
          {acceptedApplication ? (
            <p className="text-[14px] text-[#4E5968]">{`${acceptedApplication.client.nickName}님과 진행중`}</p>
          ) : (
            <div className="bg-teal-primary rounded-full px-3 py-1 text-[12px] font-bold text-white">
              {isApplicationLength.length}
            </div>
          )}
        </div>
        <Image
          src={'/common/right-arrow.svg'}
          width={8}
          height={8}
          alt="right-arrow"
        />
      </div>
    </div>
  );
}

export default ReceivedCard;
