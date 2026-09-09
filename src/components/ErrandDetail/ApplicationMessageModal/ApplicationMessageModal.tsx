import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import ErrandMsgTextarea from '../ErrandMsgTextarea/ErrandMsgTextarea';
import ErrandMsgOpenLink from '../ErrandMsgOpenLink/ErrandMsgOpenLink';

interface Props {
  title: string;
  isOpen: boolean;
  message: string;
  openLink: string;
  saveAsDefault: boolean;
  onMessageChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onLinkChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectedSaveDefault: () => void;
  onSubmit: () => void;
  handleIsOpen: () => void;
}
function ApplicationMessageModal({
  isOpen,
  title,
  message,
  openLink,
  saveAsDefault,
  onMessageChange,
  onLinkChange,
  onSelectedSaveDefault,
  onSubmit,
  handleIsOpen,
}: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={handleIsOpen}>
      <DialogContent className="w-[90%] max-w-[425px] rounded-[12px]">
        <DialogHeader className="text-left">
          <DialogTitle>{title} 지원하기</DialogTitle>
          <DialogDescription>
            의뢰자에게 어필할 수 있는 간단한 소개를 남겨주세요!
          </DialogDescription>
        </DialogHeader>

        <ErrandMsgTextarea
          message={message}
          handleChangeMessage={onMessageChange}
        />

        <ErrandMsgOpenLink
          link={openLink}
          saveAsDefault={saveAsDefault}
          onOpenLinkChange={onLinkChange}
          onSelectBox={onSelectedSaveDefault}
        />

        <div className="flex gap-2">
          <button
            onClick={handleIsOpen}
            className="flex-1 rounded-[8px] border border-gray-300 px-4 py-2 text-[14px] font-medium text-gray-600 hover:bg-gray-50"
          >
            취소
          </button>
          <button
            onClick={onSubmit}
            // disabled={isPending || !message?.trim()}
            className="bg-teal-primary flex-3 rounded-[8px] px-4 py-2 text-[14px] font-medium text-white disabled:opacity-50"
          >
            지원완료
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ApplicationMessageModal;
