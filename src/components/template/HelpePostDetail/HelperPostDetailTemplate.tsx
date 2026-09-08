'use client';
import HelperPostDetailProfile from '@/components/HelperPostDetail/HelperPostDetailProfile/HelperPostDetailProfile';
import { useHelperPostDetail } from './hook/useHelperPostDetail';
import HelperPostDetailCategory from '@/components/HelperPostDetail/HelperPostDetailCategory/HelperPostDetailCategory';
import { CATEGORIES_ENUM } from '@/interfaces/category.enum';
import { MOVEMENT_ENUM } from '@/interfaces/helper-post.interface';
import HelperPostDetailTitle from '@/components/HelperPostDetail/HelperPostDetailTitle/HelperPostDetailTitle';
import HelperPostDetailAddress from '@/components/HelperPostDetail/HelperPostDetailAddress/HelperPostDetailAddress';
import HelperPostDetailContent from '@/components/HelperPostDetail/HelperPostDetailContent/HelperPostDetailContent';
import HelperPostDetailPrice from '@/components/HelperPostDetail/HelperPostDetailPrice/HelperPostDetailPrice';
import Image from 'next/image';
import SubmitButton from '@/components/common/SubmitButton/SubmitButton';
import ErrandMessageModal from '@/components/ErrandDetail/ErrandMessageModal/ErrandMessageModal';

export default function HelperPostDetailTemplate() {
  const { data } = useHelperPostDetail();
  if (!data) return null;
  return (
    <div className="flex flex-col gap-5 pb-15">
      {/* 프로필  */}
      <HelperPostDetailProfile
        nickName={data.helper.nickName}
        rating={4.3}
        completeCount={12}
      />
      {/* 카테고리, 이동수단 */}
      <HelperPostDetailCategory
        category={data.category}
        movement={data.movement}
      />
      {/* 제목, 몇시간전에 등록했는지 */}
      <HelperPostDetailTitle title={data.title} createdAt={data.createdAt} />
      <div className="-mx-5 border-t-5 border-gray-100" />
      {/* 거래희망장소 */}
      <HelperPostDetailAddress
        lng={data.lng}
        lat={data.lat}
        address={data.address}
      />
      <div className="-mx-5 border-t-5 border-gray-100" />
      {/* 상세내용 */}
      <HelperPostDetailContent content={data.introduction} />
      <div className="-mx-5 border-t-5 border-gray-100" />
      {/* 희망금액 */}
      <HelperPostDetailPrice price={data.price} />
      <div className="-mx-5 border-t-5 border-gray-100" />

      {/* 찜하기 및 신청하기 버튼 */}
      <div className="flex items-center gap-2">
        <button className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[8px] border border-gray-200 bg-white">
          <Image
            src={'/icon/heart-outline.svg'}
            width={20}
            height={20}
            alt="heart"
          />
        </button>
        <div className="min-w-0 flex-1">
          <SubmitButton
            text="신청하기"
            isPending={false}
            isDisabled={false}
            bgColor="bg-teal-primary"
            textColor="text-white"
            onClick={() => {}}
          />
        </div>
      </div>
      {/* <ErrandMessageModal isOpen={} title='의뢰자에게 어필할 수 있는 간단한 소개를 남겨주세요!' handleIsOpen={()=>{}}/> */}
    </div>
  );
}
