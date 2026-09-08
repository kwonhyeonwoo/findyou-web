import { useParams, usePathname, useRouter } from 'next/navigation';
import { toast, Toaster } from 'sonner';

const WHITE_PATH = ['/history'];

export const useBackShare = () => {
  const router = useRouter();
  const pathname = usePathname();
  const WHITE_STYLE = WHITE_PATH.some((p) => pathname.startsWith(p));
  const handleBackBtn = () => router.back();
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success('주소를 복사하였습니다 !');
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
      toast.error('주소 복사 실패');
    }
  };
  return {
    WHITE_STYLE,
    handleBackBtn,
    handleCopy,
  };
};
