import { ErrandResponse } from "@/interfaces/errand.interface";
import { useApplicationStatusMutation } from "./quires/errand-application/useApplicationStatusMutation";
import { useGetMyErrandsQuery } from "./quires/errand/useGetMyErrandsQuery";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useRequestTemplate = () => {
  const router = useRouter();
  const { mutate } = useApplicationStatusMutation();
  const [currentIdx, setCurrentIdx] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data } = useGetMyErrandsQuery();

  const handleActive = (idx: number | null, item?: ErrandResponse) => {
    if (item?.status === "matching") {
      setCurrentIdx(idx);
      setIsOpen((prev) => !prev);
    } else if (item?.status === "in_progress") {
      router.push(`/errand/status/${item.id}`)
    } else if (item?.status === "completed") {

    }

  };
  const handleApplicationStatus = (
    id: string,
    status: "ACCEPTED" | "REJECTED",
  ) => {
    mutate({ id, status });
  };

  return {
    data,
    isOpen,
    currentIdx,
    handleApplicationStatus,
    handleActive,
  };
};
