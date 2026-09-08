import Image from 'next/image';
import { HelperPostResponse } from '@/interfaces/helper-post.interface';
import { CATEGORY_BG_STYLE } from '@/constants/category-constants';
import { fillterCategory } from '@/lib/lib';
import { HelperApplicationResponse } from '@/interfaces/helper-application.interface';
import { CustomStatus } from '@/interfaces/common.interface';
interface Props {
  data: HelperPostResponse;
  userId: string | null;
  completedApplication?: HelperApplicationResponse;
  acceptedApplication?: HelperApplicationResponse;
  handleAcceptedActive: (appliId: string) => void;
  handleSelectedReview: (
    completedApplication: HelperApplicationResponse,
  ) => void;
  handleReceivedHistory: (helperPostId: string) => void;
  handleCompletedActive: (
    completedApplication: HelperApplicationResponse,
  ) => void;
}
function ReceivedCard({
  data,
  userId,
  completedApplication,
  acceptedApplication,
  handleSelectedReview,
  handleAcceptedActive,
  handleReceivedHistory,
  handleCompletedActive,
}: Props) {
  const isApplicationLength = data.applications.filter(
    (item) =>
      item.status !== CustomStatus.REJECTED &&
      item.status !== CustomStatus.COMPLETED,
  );

  // completedApplication.review => 내가 받은 리뷰
  const receivedReview = completedApplication?.reviews?.some(
    (review) => review.reviewee.id === userId,
  );
  return (
    <div className="border-basic-border flex cursor-pointer flex-col gap-4 rounded-[16px] border bg-white px-4 py-5 pb-4">
      {/* 카테고리이미지, 제목, 카테고리, 시간 */}
      <div className="flex items-center justify-between">
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

        {/* 버튼 모아두는 곳 */}
        <div className="flex items-center gap-2">
          <div>
            {acceptedApplication ? (
              <button
                onClick={() => handleAcceptedActive(acceptedApplication.id)}
                className="text-[13px] text-[#4E5968]"
              >{`${acceptedApplication.client.nickName}님과 진행중`}</button>
            ) : completedApplication ? (
              <button
                onClick={() => handleCompletedActive(completedApplication)}
                className="text-[14px] text-[#4E5968]"
              >
                {/* 헬퍼가 리뷰를 작성하고, 리뷰를 받았는 경우 */}
                {completedApplication.hasWrittenReview && receivedReview ? (
                  '리뷰 보기'
                ) : // 헬퍼가 리뷰를 작성하고, 리뷰를 못 받았는 경우
                completedApplication.hasWrittenReview && !receivedReview ? (
                  '리뷰 대기 중'
                ) : (
                  // 리뷰를 작성하지 않았는 경우
                  <div className="flex items-center gap-1">
                    <p>리뷰쓰기</p>
                    <Image
                      src={'/common/right-arrow.svg'}
                      width={8}
                      height={8}
                      alt="right-arrow"
                    />
                  </div>
                )}
              </button>
            ) : (
              <button
                onClick={() => handleReceivedHistory(data.id)}
                className="flex gap-1"
              >
                <div className="bg-teal-primary rounded-full px-3 py-1 text-[12px] font-bold text-white">
                  {isApplicationLength.length}
                </div>
                <Image
                  src={'/common/right-arrow.svg'}
                  width={8}
                  height={8}
                  alt="right-arrow"
                />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* 받은리뷰가있고 내가 아직 리뷰를 안 적었을 때 */}
      {completedApplication?.review && !receivedReview && (
        <div className="-mx-4 -mb-4 flex justify-between rounded-br-[12px] rounded-bl-[12px] border border-b border-[#F2E4C4] bg-[#FFF7E8] px-3 py-2 text-[13px] font-medium">
          <p className="text-[#8A6D2B]">받은 리뷰가 도착했습니다.</p>
          <button
            onClick={() => handleSelectedReview(completedApplication)}
            className="flex items-center gap-1"
          >
            <p className="text-[#8A6D2B]">보기</p>
            <Image
              src={'/common/right-arrow-amber.svg'}
              width={15}
              height={15}
              className="h-[15px] w-[15px]"
              alt="arrow"
            />
          </button>
        </div>
      )}
    </div>
  );
}

export default ReceivedCard;
// status가 completed이면 리뷰쓰기 또는 리뷰 보기로 넘어가야함
