import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Props {
  title: string;
  isOpen: boolean;
  message: string;
  handleIsOpen: () => void;
  handleChangeMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
}
function ErrandMessageModal({
  isOpen,
  title,
  message,
  handleIsOpen,
  handleChangeMessage,
  handleSubmit,
}: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={handleIsOpen}>
      <DialogContent className="w-[90%] max-w-[425px] rounded-[12px]">
        <DialogHeader className="text-left">
          <DialogTitle>심부름 지원하기</DialogTitle>
          <DialogDescription>{title}</DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="relative">
            <textarea
              placeholder="예: 자전거를 타고 있어서 5분 안에 갈 수 있어요!"
              value={message}
              onChange={handleChangeMessage}
              maxLength={100}
              className="focus-visible:ring-teal-primary h-40 w-full resize-none rounded-[8px] p-2"
            />
            <span className="absolute right-2 bottom-2 text-[12px] text-[#8B95A1]">
              {message?.length || 0} / 100
            </span>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={handleIsOpen}
            className="rounded-[8px] border border-gray-300 px-4 py-2 text-[14px] font-medium text-gray-600 hover:bg-gray-50"
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
            // disabled={isPending || !message?.trim()}
            className="bg-teal-primary rounded-[8px] px-4 py-2 text-[14px] font-medium text-white disabled:opacity-50"
          >
            지원완료
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ErrandMessageModal;
