import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Loading } from "@/components/ui/loading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Science Olympiads Center | Fan Olimpiadalar Markazi",
  description:
    "Empowering students through science education and competitions. Fan Olimpiadalar Markazi supports students in science olympiads and academic excellence.",
  keywords: [
    "Science Olympiads Center",
    "Fan Olimpiadalar Markazi",
    "Fan olimpiadasi markazi",
    "Olimpiada markazi",
    "Olimpiadalar markazi",
    "Respublika fan olimpiadasi markazi",
    "Fan olimpiadalari uchun tayyorgarlik",

    "Olimpiadaga tayyorlov kurslari",

    "Fan olimpiadalari darslari",

    "O‘quvchilar uchun fan olimpiadasi",

    "Maktab o‘quvchilari olimpiadasi",
    "science olympiad",
    "academic competitions",
    "student olympiad",
    "education center",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Loading minVisibleMs={900} />

          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
