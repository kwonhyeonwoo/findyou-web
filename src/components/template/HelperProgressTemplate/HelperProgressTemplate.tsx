'use client';
import KaKaoChatButton from '@/components/common/KaKaoChatButton/KaKaoChatButton';
import ClientProfileCard from '../HelperProgress/ClientProfileCard/ClientProfileCard';
import HelperProgressBody from '../HelperProgress/HelperProgressBody/HelperProgressBody';
import HelperProgressTop from '../HelperProgress/HelperProgressTop/HelperProgressTop';
import useHelperProgress from './hooks/useHelperProgress';
import AlertModal from '@/components/common/AlertModal/AlertModal';
import SubmitButton from '@/components/common/SubmitButton/SubmitButton';

export default function HelperProgressTemplate() {
  const {
    data,
    isOpen,
    setIsOpen,
    handleIsOpen,
    handleProfileActive,
    handleCompletedRequest,
  } = useHelperProgress();
  console.log('dta', data);
  if (!data) return null;
  return (
    <div className="flex w-full flex-1 flex-col gap-5 pt-5 pb-10">
      <HelperProgressTop />
      <HelperProgressBody
        price="12000"
        category={data?.helperPosts?.category}
        title={data.helperPosts.title}
        description={data.helperPosts.description}
        message={data.message}
      />
      <ClientProfileCard
        id={data.client.id}
        nickName={data.client.nickName}
        rating={4.3}
        reviewCount={12}
        handleProfileActive={handleProfileActive}
      />
      <KaKaoChatButton />
      <SubmitButton
        text="완료 요청하기"
        isPending={false}
        isDisabled={false}
        onClick={handleIsOpen}
      />
      <AlertModal
        title="심부름 진행을 완료 하시겠습니까?"
        description={`의뢰인이 확인 전 까지 완료 대기 상태입니다.`}
        isOpen={isOpen}
        actionText="완료신청"
        setState={setIsOpen}
        handleActive={handleCompletedRequest}
      />
    </div>
  );
}
