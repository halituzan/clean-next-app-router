import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Clean NextJs App Router",
  description: "Clean NextJs App Router",
};

async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <div className='min-h-screen flex flex-col justify-center items-start'>
          <main className='max-w-[1024px] mx-auto flex-1 pt-20'>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
