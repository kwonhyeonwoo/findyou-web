'use client';
import KaKaoChatButton from '@/components/common/KaKaoChatButton/KaKaoChatButton';
import ClientProfileCard from '../HelperProgress/ClientProfileCard/ClientProfileCard';
import HelperProgressBody from '../HelperProgress/HelperProgressBody/HelperProgressBody';
import HelperProgressTop from '../HelperProgress/HelperProgressTop/HelperProgressTop';
import useHelperProgress from './hooks/useHelperProgress';
import AlertModal from '@/components/common/AlertModal/AlertModal';
import SubmitButton from '@/components/common/SubmitButton/SubmitButton';
import { CustomStatus } from '@/interfaces/common.interface';

export default function HelperProgressTemplate() {
  const {
    data,
    isOpen,
    isPending,
    userId,
    setIsOpen,
    handleIsOpen,
    handleProfileActive,
    handleCompletedRequest,
    handleAcceptCompleted,
  } = useHelperProgress();
  if (!data) return null;
  const isCompletedRequest =
    data.helperPosts.status === CustomStatus.COMPLETED_REQUEST;
  const isRequestedByMe = data.helperPosts.completionRequestedBy === userId;
  const isAccepting = isCompletedRequest && !isRequestedByMe;
  const isDisabled = isCompletedRequest && isRequestedByMe;
  const buttonStatus = !isCompletedRequest
    ? '완료요청 하기'
    : isRequestedByMe
      ? '완료 요청 대기 중'
      : '완료 수락';

  const modalProps = isAccepting
    ? {
        title: '완료를 수락하시겠습니까?',
        description: '수락 시 심부름이 완료 처리되며 되돌릴 수 없습니다.',
        actionText: '완료 수락',
        onActive: handleAcceptCompleted,
      }
    : {
        title: '심부름 진행을 완료 하시겠습니까?',
        description: `의뢰인이 확인 전 까지 완료 대기 상태입니다.`,
        actionText: '완료요청',
        onActive: handleCompletedRequest,
      };
  return (
    <div className="flex w-full flex-1 flex-col gap-5 pt-5 pb-10">
      <HelperProgressTop />
      <HelperProgressBody
        price="12000"
        category={data?.helperPosts?.category}
        title={data.helperPosts.title}
        introduction={data.helperPosts.introduction}
        message={data.message}
      />
      <ClientProfileCard
        id={data.client.id}
        nickName={data.client.nickName}
        rating={4.3}
        reviewCount={12}
        handleProfileActive={handleProfileActive}
      />
      <KaKaoChatButton link={data.openLink} />
      <SubmitButton
        text={buttonStatus}
        isPending={isPending}
        isDisabled={isDisabled}
        onClick={handleIsOpen}
      />
      <AlertModal
        title={modalProps.title}
        description={modalProps.description}
        isOpen={isOpen}
        actionText={modalProps.actionText}
        setState={setIsOpen}
        onActive={modalProps.onActive}
      />
    </div>
  );
}
