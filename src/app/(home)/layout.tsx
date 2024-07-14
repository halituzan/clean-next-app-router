import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Footer from "@/components/Footer";
import { appWithTranslation } from "next-i18next";
import i18n from "@/configs/i18n";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Clean NextJs App Router",
  description: "Clean NextJs App Router",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <div className='min-h-screen flex flex-col justify-center items-start'>
          <main className='max-w-[1024px] mx-auto flex-1 pt-20'>
            {children}
          </main>
          <footer className='w-full h-10 flex bg-rose-600 text-white'>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
};
export default RootLayout;
