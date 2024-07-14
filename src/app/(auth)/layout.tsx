import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Clean NextJs App Router",
  description: "Clean NextJs App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <div className='min-h-screen flex flex-col justify-center items-start'>
          <main className='max-w-[1024px] mx-auto flex-1 pt-20'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
