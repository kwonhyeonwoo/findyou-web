import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { SetStateAction } from 'react';

interface Props {
  title: string;
  description: string;
  isOpen: boolean;
  actionText: string;
  setState: React.Dispatch<SetStateAction<boolean>>;
  handleActive: () => void;
}
export default function AlertModal({
  title,
  description,
  isOpen,
  actionText,
  setState,
  handleActive,
}: Props) {
  return (
    <AlertDialog open={isOpen} onOpenChange={setState}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="flex gap-2 sm:justify-center sm:space-x-0">
          <AlertDialogCancel className="h-10 flex-1">취소</AlertDialogCancel>
          <AlertDialogAction onClick={handleActive} className="h-10 flex-1">
            {actionText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
