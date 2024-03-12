import MaxWidthProvider from "@/components/MaxWidthProvider";
import SectionHeader from "@/components/SectionHeader";
import CtaButton from "@/components/CtaButton";
import CardGroup from "@/components/ProductCardGroup";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

import { ArrowRightIcon } from "@radix-ui/react-icons";

import { homeProductsData } from "@/lib/products";
import InfoCardGroup from "@/components/InfoCardGroup";

const infoData = [
  {
    word: "innovation",
    title: "Vi arbetar med innovation",
    text: [
      "För mig handlar denna del om att skapa och tillverka nya eller bättre lösningar som i sin tur ger ett större värde och fyller syfte för individ, företag eller samhälle. En bra struktur för detta innehåller insiktsutveckling, idégenerering, idéutarbetande och experimentdesign.",
      "En majoritet av de bästa lösningsidéerna finns hos dig som stöter på dem i vardagen. Många visualiserar lösningar och sätt att överkomma detta, andra bara accepterar en begränsning. För dig som söker lösningar eller en form av prototyp till detta har kommit rätt.",
    ],
    images: ["/assets/innovation.svg"],
  },
  {
    word: "kvalitet",
    title: "Kvalitet i varje steg",
    text: [
      "Grunden till en bra produkt handlar om kvalitet, att eftersträva och nå en hög standard är en viktig del i processen. Utvecklandet av en prototyp eller en produkt med 3D-skrivning ger dig ett snabbt och kostnadseffektivt sätt att visualisera och testa dina lösningar.",
    ],
    images: ["/assets/quality.svg"],
  },
  {
    word: "service",
    title: "Personlig service",
    text: [
      "Grundidén är att jag vill skapa en professionell men också personlig känsla vid ett bemötande. Dagens marknad i mitt tycke är väldigt opersonligt, därav vill jag skapa en verksamhet som verkligen lägger vikt och energi på det personliga bemötandet.",
      "Av min erfarenhet som kund hos många större firmor är att det inte är lika lätt att bolla idéer och tankar kring en produkt som det är hos en mindre verksamhet. Därav lägger jag stor vikt på det personliga bemötandet och vill så långt det går, hjälpa dig som kund och se till att din produkt eller idé når dina krav och målsättningar.",
      "Jag svarar gärna på frågor och funderingar så tveka inte att höra av dig.",
    ],
    images: ["/assets/service.svg"],
  },
];

const getProductData = async () => {
  try {
    const data = await fetch(process.env.HOST_URL + "/api/content/getProducts?limit=3", { next: { revalidate: 10 } })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error));
    
    return data?.products;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

export default async function Home() {

  const products = await getProductData();
  // const products = null

  return (
    <>
      <section className="bg-hero-image bg-left bg-cover min-h-[90vh] flex items-center justify-start">
        <MaxWidthProvider>
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-5xl text-center sm:text-left md:text-7xl font-extrabold t- w-full max-w-[650px] text-white mb-6">
              We make your imagination the only limit
            </h1>
            <CtaButton>kontakta oss</CtaButton>
          </div>
        </MaxWidthProvider>
      </section>

      <div className="bg-background relative rounded-3xl -mt-6 lg:rounded-[32px] lg:-mt-8 pt-12 sm:pt-24 ">
        <MaxWidthProvider>
          <section className="flex flex-col items-center gap-12 mb-16 sm:mb-24">
            <SectionHeader title="om oss" subTitle="Sjögren innovation i 3 ord" />
            <InfoCardGroup cardData={infoData} />
          </section>

          <section className="flex flex-col items-center gap-12 mb-16 sm:mb-24">
            <SectionHeader title="tidigare produkter" subTitle="Tidigare produkter och projekt som kanske kan inspirera dig" />
            {products ? (
              <CardGroup cardData={products} />
            ) : (
              <p className="text-center text-text_secondary">Laddar...</p>
            )}
            <Link href="/products" className="text-xl group mt-12 transition-all duration-300 flex items-center gap-2 hover:gap-4">
              Visa fler produkter
              <ArrowRightIcon className="size-6 inline-block" />
            </Link>
          </section>

          <section id="contact" className="flex flex-col items-center gap-12 mb-16 sm:mb-24">
            <SectionHeader title="kontakt" subTitle="Kontakta mig med dina bästa idéer så gör vi de till verklighet" />
            <ContactForm />
          </section>
        </MaxWidthProvider>
      </div>
    </>
  );
}
