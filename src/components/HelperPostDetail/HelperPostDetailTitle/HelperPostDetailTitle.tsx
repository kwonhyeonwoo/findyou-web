import { formatRelativeTime } from '@/lib/lib';

interface Props {
  title: string;
  createdAt: Date;
}

export default function HelperPostDetailTitle({ title, createdAt }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-bold">{title}</p>
      <p className="text-[14px] text-gray-400">
        {formatRelativeTime(String(createdAt))}
      </p>
    </div>
  );
}
