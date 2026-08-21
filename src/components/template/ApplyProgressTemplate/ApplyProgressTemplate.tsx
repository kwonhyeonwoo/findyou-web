'use client';
import SubmitButton from '@/components/common/SubmitButton/SubmitButton';
import ErrandHelper from '@/components/ErrandStatus/ErrandHelper';
import ErrandStatusInfo from '@/components/ErrandStatus/ErrandStatusInfo';
import ErrandStatusTitle from '@/components/ErrandStatus/ErrandStatusTitle';
import { CustomStatus } from '@/interfaces/common.interface';
import useApplyProgress from './hooks/useApplyProgress';

function ApplyProgressTemplate() {
  // helper-application get 요청
  // helperPosts 에서 title,description, pirce 필요,
  // helperPosts.helper에서 nickName, profile 필요
  // 상세정보에서는 helperPosts에 address, addressDong,startTime필요하고
  // helper-application에 있는 message 필요료함
  // 완료승인은 helper-application에 completed 보내줘야함.
  const { data, isPending, handleApplicationComplete } = useApplyProgress();
  console.log('progress data', data);
  if (!data) return null;
  return (
    <div className="flex flex-1 flex-col gap-6">
      <ErrandStatusTitle
        title="안녕하세요ㅕ"
        price="12000"
        status={CustomStatus.PENDING}
        date={new Date()}
      />
      <ErrandHelper nickName={'권현우'} onProfileDetail={() => {}} />

      <ErrandStatusInfo
        startTime={new Date()}
        start="효목동"
        arrive="신암동"
        description="확인용"
      />
      <div className="mt-auto pb-10">
        <SubmitButton
          text="완료승인"
          isPending={false}
          isDisabled={data.status !== CustomStatus.COMPLETE_REQUESTED}
          onClick={() => handleApplicationComplete(data.id)}
        />
      </div>
    </div>
  );
}

export default ApplyProgressTemplate;
