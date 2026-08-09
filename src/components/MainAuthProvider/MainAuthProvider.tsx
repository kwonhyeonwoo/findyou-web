'use client';
import { useMeQuery } from '@/hooks/quires/auth/useMeQuery';
import { useSetUser } from '@/store/useUserStore';
import React, { useEffect } from 'react';

export default function MainAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, isLoading } = useMeQuery();
  const setUser = useSetUser();
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);
  return <>{children}</>;
}
