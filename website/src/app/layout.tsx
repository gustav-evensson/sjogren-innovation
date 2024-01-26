import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sjögren Innovation",
  description: "We make your imagination the only limit",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    // TODO: Add url
    // url: "https://sjogren.dev",
    title: "Sjögren Innovation",
    description: "We make your imagination the only limit",
    images: [
      {
        url: "/thumbnail.png",
        width: 2400,
        height: 1260,
        alt: "Sjögren Innovation",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className="font-poppins">{children}</body>
    </html>
  );
}
