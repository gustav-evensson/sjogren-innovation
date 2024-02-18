import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader/PageLoader";


export const metadata: Metadata = {
  title: "Sjögren Innovation",
  description:
    "Välkommen, Edvin heter jag och driver min egen lilla verkstad. Verksamheten grundar sig på produktutveckling och idégenerering. Jag pysslar med att hjälpa andra med lösningar och plastdetaljer via 3D-ritningar och 3D-skrivning. Har du en idé så hjälper jag mer än gärna till med att bolla idéer, har du något problem så skulle vi kunna se till en lösning på detta.",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "https://sjogreninnovation.se",
    title: "Sjögren Innovation",
    description:
      "Välkommen, Edvin heter jag och driver min egen lilla verkstad. Verksamheten grundar sig på produktutveckling och idégenerering. Jag pysslar med att hjälpa andra med lösningar och plastdetaljer via 3D-ritningar och 3D-skrivning. Har du en idé så hjälper jag mer än gärna till med att bolla idéer, har du något problem så skulle vi kunna se till en lösning på detta.",
    images: [
      {
        url: "og/thumbnail.png",
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
    <html lang="sv" className="scroll-smooth">
      <body className="font-poppins flex flex-col min-h-screen">
        <PageLoader>
          <NavBar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </PageLoader>
      </body>
    </html>
  );
}
