import BackHeader from '@/components/layout/BackHeader/BackHeader';
import MainAuthProvider from '@/components/MainAuthProvider/MainAuthProvider';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <MainAuthProvider>
      <div className="relative mx-auto flex min-h-screen w-full max-w-[480px] flex-col shadow-xl">
        <BackHeader />
        <main className="flex flex-1 flex-col">{children}</main>
      </div>
    </MainAuthProvider>
  );
}
