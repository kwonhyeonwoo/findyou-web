import { useCustomApplication } from '@/hooks/common/useCustomApplication';
import { useCreateErrandApplication } from '@/hooks/mutations/errand-application/useCreateErrandApplication';
import { useErrandDetailQuery } from '@/hooks/quires/errand/useErrandDetailQuery';
import { useUser } from '@/store/useUserStore';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export const useErrandDetail = () => {
  const { id } = useParams();
  const user = useUser();
  const { message, saveAsDefault, openLink } = useCustomApplication();
  const { data, isPending } = useErrandDetailQuery(String(id));
  const { mutate } = useCreateErrandApplication();
  const handleErrandSubmit = () => {
    mutate({ saveAsDefault, message, openLink, errandId: id as string });
  };
  return {
    data,
    uid: user.userId,
    isPending,
    handleErrandSubmit,
  };
};
