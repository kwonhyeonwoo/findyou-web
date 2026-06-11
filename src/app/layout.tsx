import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // 💡 폴더 깊이가 달라졌으니 경로 확인!
import Providers from "./providers";
import { Toaster } from "sonner";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = { title: "Find You - Main" };

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
      <body className="flex min-h-full flex-col bg-gray-100 text-gray-900">
        <Providers>
          {children}
          <Toaster
            toastOptions={{
              classNames: {
                title: "!text-white",
                toast: "!border-transparent *:data-icon:text-white!",
                description: "!text-white",
                error: "!bg-red-500 !text-white",
                info: "!bg-info ",
                warning: "!bg-warning ",
                success: "!bg-success ",
                loading: "!bg-gray-500",
              },
            }}
            position="top-center"
          />
        </Providers>
      </body>
    </html>
  );
}
