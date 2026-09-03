import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import ErrandMsgTextarea from '../ErrandMsgTextarea/ErrandMsgTextarea';
import ErrandMsgOpenLink from '../ErrandMsgOpenLink/ErrandMsgOpenLink';
import { useErrandMessage } from './hooks/useErrandMessage';

interface Props {
  title: string;
  isOpen: boolean;
  handleIsOpen: () => void;
}
function ErrandMessageModal({ isOpen, title, handleIsOpen }: Props) {
  const {
    message,
    openLink,
    saveAsDefault,
    handleChangeMessage,
    handleSubmit,
    handleLinkChange,
    handleSelectBox,
  } = useErrandMessage();
  return (
    <Dialog open={isOpen} onOpenChange={handleIsOpen}>
      <DialogContent className="w-[90%] max-w-[425px] rounded-[12px]">
        <DialogHeader className="text-left">
          <DialogTitle>심부름 지원하기</DialogTitle>
          <DialogDescription>{title}</DialogDescription>
        </DialogHeader>

        <ErrandMsgTextarea
          message={message}
          handleChangeMessage={handleChangeMessage}
        />

        <ErrandMsgOpenLink
          link={openLink}
          saveAsDefault={saveAsDefault}
          onOpenLinkChange={handleLinkChange}
          onSelectBox={handleSelectBox}
        />

        <div className="flex gap-2">
          <button
            onClick={handleIsOpen}
            className="flex-1 rounded-[8px] border border-gray-300 px-4 py-2 text-[14px] font-medium text-gray-600 hover:bg-gray-50"
          >
            취소
          </button>
          <button
            onClick={handleSubmit}
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

export default ErrandMessageModal;
