import { MOVEMENT } from '@/constants/helper.constant';
import { MOVEMENT_ENUM } from '@/interfaces/helper.interface';
import Image from 'next/image';
interface Props {
  currMovement: MOVEMENT_ENUM;
  handleCurrMovement: (type: MOVEMENT_ENUM) => void;
}
export default function MovementMethod({
  currMovement,
  handleCurrMovement,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[12px] text-[#464554]">이동수단</p>
      <div className="flex flex-wrap gap-2">
        {MOVEMENT.map(({ text, type, img }, idx) => (
          <button
            type="button"
            className={`flex items-center gap-2 px-[17px] py-2 ${type === currMovement ? 'bg-black' : 'bg-white'} border-primary-basic-border rounded-[8px] border`}
            onClick={() => handleCurrMovement(type)}
          >
            <img
              src={`
                /helper-write/${currMovement === type ? `${img}_active.svg` : `${img}.svg`}  
              `}
            />
            <p
              className={`text-[13px] font-medium ${type === currMovement ? 'text-white' : 'text-black'}`}
            >
              {text}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
