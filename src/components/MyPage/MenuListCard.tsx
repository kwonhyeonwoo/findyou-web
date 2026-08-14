import Image from 'next/image';

interface Props {
  text: string;
  path?: string;
  isLast: boolean;
}

function MenuListCard({ text, path, isLast }: Props) {
  return (
    <button
      className={`flex items-center justify-between py-3 ${
        isLast ? '' : 'border-b-basic-border border-b'
      }`}
    >
      <span className="font-bold">{text}</span>
      <Image
        src={'/common/right-arrow.svg'}
        alt="right-arrow"
        width={7}
        height={7}
      />
    </button>
  );
}

export default MenuListCard;
