import { useRouter } from "next/navigation";

export const useErrandTemplate = () => {
  const router = useRouter();

  const handleRouter = (id: string) => router.push(`/errand/${id}`);
  return {
    handleRouter,
  };
};
