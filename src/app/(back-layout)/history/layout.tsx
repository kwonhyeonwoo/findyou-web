import HistoryTab from '@/components/common/HistoryTab/HistoryTab';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HistoryTab />
      {children}
    </div>
  );
}
