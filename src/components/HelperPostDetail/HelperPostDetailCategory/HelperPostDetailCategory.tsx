import {
  CATEGORIES,
  CATEGORY_BG_STYLE,
  CATEGORY_TEXT_STYLE,
} from '@/constants/category-constants';
import { MOVEMENT } from '@/constants/helper.constant';
import { CATEGORIES_ENUM } from '@/interfaces/category.enum';
import { MOVEMENT_ENUM } from '@/interfaces/helper-post.interface';
import Image from 'next/image';

interface Props {
  category: CATEGORIES_ENUM;
  movement: MOVEMENT_ENUM;
}

export default function HelperPostDetailCategory({
  category,
  movement,
}: Props) {
  const selectedCategory = CATEGORIES.find((item) => item.type === category);
  const selectedMovement = MOVEMENT.find((item) => item.type === movement);

  return (
    <div className="flex items-center gap-1">
      {selectedCategory && (
        <div
          className={`px-3 py-1 ${CATEGORY_BG_STYLE[selectedCategory.type]} ${CATEGORY_TEXT_STYLE[selectedCategory.type]} rounded-2xl`}
        >
          <p className="text-[13px] font-semibold">{selectedCategory.text}</p>
        </div>
      )}
      <div className="flex items-center justify-center gap-1 rounded-2xl bg-[#F1EFE8] px-3 py-1">
        <Image
          src={`/helper-write/${movement}.svg`}
          width={10}
          height={10}
          alt={`${movement}`}
          className="h-[10px] w-[10px]"
        />
        <p className="text-[13px] text-[#5F5E5A]">
          {selectedMovement && selectedMovement.text}
        </p>
      </div>
    </div>
  );
}
