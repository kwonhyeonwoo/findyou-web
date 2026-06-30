import { usePathname } from "next/navigation";

export const useHistoryTab = () => {
  const pathname = usePathname();

  return {
    pathname,
  };
};
