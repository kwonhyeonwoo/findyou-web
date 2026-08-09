import ReceivedHeader from '../ReceivedHeader/ReceivedHeader';
import ReceivedBody from '../ReceivedBody/ReceivedBody';
import ReceivedButton from '../ReceivedFooter/ReceivedButton';
import Image from 'next/image';
import { HelperPostResponse } from '@/interfaces/helper-postinterface';
import { CATEGORY_BG_STYLE } from '@/constants/category-constants';
import { fillterCategory } from '@/lib/lib';
interface Props {
  data: HelperPostResponse;
  handleReceivedHistory: (helperPostId: string) => void;
}
function ReceivedCard({ data, handleReceivedHistory }: Props) {
  console.log('id', data.helper);
  return (
    <div
      onClick={() => handleReceivedHistory(data.id)}
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
        <div className="bg-teal-primary rounded-full px-3 py-1 text-[12px] font-bold text-white">
          {data.applications.length}
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
