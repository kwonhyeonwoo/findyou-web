import {
  CATEGORY_BG_STYLE,
  CATEGORY_TABS,
} from '@/constants/category-constants';
import { CATEGORIES_ENUM } from '@/interfaces/category.enum';
import { fillterCategory, formattedPrice } from '@/lib/lib';
import Image from 'next/image';

interface Props {
  price: string;
  category: CATEGORIES_ENUM;
  title: string;
  description: string;
  message: string;
}

function HelperProgressBody({
  price,
  title,
  description,
  message,
  category,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      {/* 카테고리, 가격 */}
      <div className="flex items-center gap-3">
        <div
          className={`${CATEGORY_BG_STYLE[category]} flex h-[50px] w-[50px] items-center justify-center rounded-full`}
        >
          <Image
            src={`/category/${category.toLocaleLowerCase()}.svg`}
            alt={category}
            width={20}
            height={20}
            className="h-5 w-5"
          />
        </div>
        <div className="flex items-center gap-1">
          <p className="text-[14px] font-semibold text-[#8B95A1]">
            {fillterCategory(category)}
          </p>
          <p className="text-[14px] font-semibold text-[#8B95A1]">
            {formattedPrice(String(price))}
          </p>
        </div>
      </div>

      {/* 제목,내용 */}
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold whitespace-pre">{title}</h2>
        <p className="text-[14px] leading-normal whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* 메시지 */}
      <div className="flex flex-col gap-1">
        <p className="text-[14px] text-[#B0B8C1]">요청 메시지</p>
        <p className="text-[14px]">{message}</p>
      </div>
    </div>
  );
}

export default HelperProgressBody;
