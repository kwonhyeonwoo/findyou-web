import { useHelperAppliCreateMutation } from '@/hooks/mutations/helper-application/useHelperAppliCreateMutation';
import { useGetHelperQuery } from '@/hooks/quires/helper/useGetHelperQuery';
import { useCustomApplication } from '@/hooks/common/useCustomApplication';
import { useUser } from '@/store/useUserStore';
import { useParams } from 'next/navigation';
import { useApplicationReset } from '@/store/useApplicationStore';

export const useHelperPostDetail = () => {
  const { id } = useParams();
  const user = useUser();
  const { data } = useGetHelperQuery(String(id));
  const { mutate } = useHelperAppliCreateMutation();
  const { message, saveAsDefault, openLink } = useCustomApplication();
  const { setReset } = useApplicationReset();

  const handleSubmit = () => {
    if (id) {
      mutate({ message, saveAsDefault, openLink, helperId: id as string });
      setReset();
    }
  };

  return {
    data,
    uid: user.userId,
    handleSubmit,
  };
};
