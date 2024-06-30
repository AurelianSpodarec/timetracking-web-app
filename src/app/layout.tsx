import type { Metadata } from "next";
import ContextProvider from '@/context'
import { cabinSketch, neucha } from "@/config/fonts";

import './../styles/styles.scss'

export const metadata: Metadata = {
  title: "Clockify",
  description: "Automate time tracking with just one click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className={`${cabinSketch.variable} ${neucha.variable}`}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html >
  );
}
