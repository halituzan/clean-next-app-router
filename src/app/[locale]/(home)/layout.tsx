import Footer from "@/components/Footer";
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

// Providing all messages to the client
// side is the easiest way to get started

const LocaleLayout = async ({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) => {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <div className='min-h-screen flex flex-col justify-center items-start'>
          <NextIntlClientProvider messages={messages}>
            <main className='max-w-[1024px] mx-auto flex-1 pt-20'>
              {children}
            </main>
            <footer className='w-full h-10 flex bg-rose-600 text-white'>
              <Footer />
            </footer>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
};
export default LocaleLayout;
