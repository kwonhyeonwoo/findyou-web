import BackHeader from "@/components/layout/BackHeader/BackHeader";
import MainAuthProvider from "@/components/MainAuthProvider/MainAuthProvider";

export default function layout({children}:{children:React.ReactNode}) {
  return (
        <MainAuthProvider>
            <div className="mx-auto relative flex min-h-screen w-full max-w-[480px] flex-col bg-white shadow-xl">
                <BackHeader/>
                <main className="flex-1 px-5 box-border">
                    {children}
                </main>
            </div>
        </MainAuthProvider>
  )
}
