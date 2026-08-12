import { HelperApplicationResponse } from '@/interfaces/helper-application.interface';
import ReceivedDetailProfile from '../ReceivedDetailProfile/ReceivedDetailProfile';
import ReceivedDetailMessage from '../ReceivedDetailMessage/ReceivedDetailMessage';
import ReceivedDetailButton from '../ReceivedDetailButton/ReceivedDetailButton';

interface Props {
  data: HelperApplicationResponse;
  handleActive: (
    type: 'ACCEPTED' | 'REJECT',
    appliId: string,
    clientId: string,
  ) => void;
}
export default function ReceivedDetailCard({ data, handleActive }: Props) {
  const BUTTONS = [
    {
      text: '거절',
      bgColor: 'bg-[#F2F4F6]',
      textColor: 'text-[#4E5968]',
      Active: () => handleActive('REJECT', data.id, data.client.id),
    },
    {
      text: '수락',
      bgColor: 'bg-black',
      textColor: 'text-white',
      Active: () => handleActive('ACCEPTED', data.id, data.client.id),
    },
  ];
  return (
    <div className="border-basic-primary flex flex-col justify-center gap-4 rounded-[8px] border p-4">
      <ReceivedDetailProfile
        profile={data.client.profile}
        nickName={data.client.nickName}
        dateTime={data.createdAt}
        rating={'2.7'}
      />
      <ReceivedDetailMessage message={data.message} />
      <div className="flex items-center gap-1">
        {BUTTONS.map((item, idx) => (
          <ReceivedDetailButton
            key={idx}
            text={item.text}
            textColor={item.textColor}
            bgColor={item.bgColor}
            Active={item.Active}
          />
        ))}
      </div>
    </div>
  );
}
