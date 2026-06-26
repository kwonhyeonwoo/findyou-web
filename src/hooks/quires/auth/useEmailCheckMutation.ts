import { userApi } from "@/api/user/userApi";
import { IResponse } from "@/interfaces/response.interface";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useEmailCheckMutation = () => {
  return useMutation({
    mutationFn: userApi.emailCheck,
    onSuccess: (data: IResponse) => {
      if (!data.success) {
        return toast.error(data.message);
      }
      toast.success(data.message);
    },
    onError: (error) => {
      console.log("error", error);
      toast.error(error.message);
    },
  });
};
