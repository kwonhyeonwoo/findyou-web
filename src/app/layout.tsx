import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css'; // 💡 폴더 깊이가 달라졌으니 경로 확인!
import Providers from './providers';
import Script from 'next/script';
import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = { title: 'Find You - Main' };

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col text-gray-900">
        <Providers>
          <Script
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_KEY}&libraries=services,clusterer&autoload=false`}
            strategy="beforeInteractive"
          />

          {children}
          <Toaster
            toastOptions={{
              classNames: {
                title: '!text-white',
                toast: '!border-transparent *:data-icon:text-white!',
                description: '!text-white',
                error: '!bg-red-500 !text-white',
                info: '!bg-info ',
                warning: '!bg-warning ',
                success: '!bg-success ',
                loading: '!bg-gray-500',
              },
            }}
            position="top-center"
          />
        </Providers>
      </body>
    </html>
  );
}
