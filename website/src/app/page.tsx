import MaxWidthProvider from "@/components/MaxWidthProvider";
import NavBar from "@/components/NavBar";

import Link from "next/link";
import Image from "next/image";
import PageLoader from "@/components/PageLoader/PageLoader";
import SectionHeader from "@/components/SectionHeader";
import TextImageCard from "@/components/TextImageCard";
import { getPayloadClient } from "@/get-payload";

const infoData = [
  {
    word: "innovation",
    title: "Vi arbetar med innovation",
    text: [
      'För mig handlar denna del om att skapa och tillverka nya eller bättre lösningar som i sin tur ger ett större värde och fyller syfte för individ, företag eller samhälle. En bra struktur för detta innehåller insiktsutveckling, idégenerering, idéutarbetande och experimentdesign.',
      'En majoritet av de bästa lösningsidéerna finns hos dig som stöter på dem i vardagen. Många visualiserar lösningar och sätt att överkomma detta, andra bara accepterar en begränsning. För dig som söker lösningar eller en form av prototyp till detta har kommit rätt.'
    ],
    image: "/images/innovation.svg",
    alt: "innovation image",
  },
  {
    word: "innovation",
    title: "Vi arbetar med innovation",
    text: [
      'För mig handlar denna del om att skapa och tillverka nya eller bättre lösningar som i sin tur ger ett större värde och fyller syfte för individ, företag eller samhälle. En bra struktur för detta innehåller insiktsutveckling, idégenerering, idéutarbetande och experimentdesign.',
      'En majoritet av de bästa lösningsidéerna finns hos dig som stöter på dem i vardagen. Många visualiserar lösningar och sätt att överkomma detta, andra bara accepterar en begränsning. För dig som söker lösningar eller en form av prototyp till detta har kommit rätt.'
    ],
    image: "/images/innovation.svg",
    alt: "innovation image",
  },
  {
    word: "innovation",
    title: "Vi arbetar med innovation",
    text: [
      'För mig handlar denna del om att skapa och tillverka nya eller bättre lösningar som i sin tur ger ett större värde och fyller syfte för individ, företag eller samhälle. En bra struktur för detta innehåller insiktsutveckling, idégenerering, idéutarbetande och experimentdesign.',
      'En majoritet av de bästa lösningsidéerna finns hos dig som stöter på dem i vardagen. Många visualiserar lösningar och sätt att överkomma detta, andra bara accepterar en begränsning. För dig som söker lösningar eller en form av prototyp till detta har kommit rätt.'
    ],
    image: "/images/innovation.svg",
    alt: "innovation image",
  },
]

const productsData = [
  {
    title: "Produkt 1",
    text: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
    ],
    image: "/images/innovation.svg",
    alt: "innovation image",
  }
]

export default function Home() {

  const payload = getPayloadClient()

  return (
    <>
      <PageLoader>
        <section className="bg-hero-image bg-left bg-cover min-h-[90vh] flex items-center justify-start">
          <NavBar />
          <MaxWidthProvider>

            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-5xl text-center sm:text-left md:text-7xl font-extrabold t- w-full max-w-[650px] text-white mb-6">We make your imagination the only limit</h1>
              <Link href="#contact" className="tha-container flex gap-4 items-center rounded-full p-1 pr-4 border border-white w-fit">
                <Image src="/images/paper_plane.svg" width={48} height={48} alt="paper plane image" aria-hidden="true" />
                <span className="text-white tha-item tha-white" data-content="KONTAKTA OSS">
                  KONTAKTA OSS
                </span>
              </Link>
            </div>

          </MaxWidthProvider>
        </section>

        <div className="bg-background relative rounded-3xl -mt-6 lg:rounded-[32px] lg:-mt-8 py-12 sm:py-24 ">
          <MaxWidthProvider>

            <section className="flex flex-col items-center gap-12 mb-16 sm:mb-24">
              <SectionHeader title="om oss" subTitle="Sjögren innovation i 3 ord" />
              <div className="flex flex-col gap-12 lg:gap-28">
                {infoData.map((info, i) => (
                  <TextImageCard key={i} {...info} reversed={i % 2 != 0} />
                ))}
              </div>
            </section>

            <section className="flex flex-col items-center gap-12 mb-16 sm:mb-24">
              <SectionHeader title="tidigare produkter" subTitle="Tidigare produkter och projekt som kanske kan inspirera dig" />
              <div className="w-full flex flex-col gap-12 lg:gap-28">
                {productsData.map((product, i) => (
                  <TextImageCard key={i} {...product} reversed={i % 2 != 0} />
                ))}
              </div>
            </section>

          </MaxWidthProvider>
        </div>
      </PageLoader>
    </>
  );
}
