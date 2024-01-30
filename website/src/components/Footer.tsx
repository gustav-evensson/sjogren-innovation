import Link from "next/link";
import MaxWidthProvider from "./MaxWidthProvider";

export default function Footer() {
  return (
    <footer className="bg-background_secondary py-8 sm:py-12">
      <MaxWidthProvider>
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-start">
          <div className="flex flex-col gap-12 md:flex-row">
            <div>
              <h5 className="font-bold text-lg">Sjögren Innovation</h5>
              <p>Kalborn 57</p>
              <p>790 15 Sundborn</p>
            </div>
            <div className="flex flex-col">
              <h5 className="font-bold text-lg">Kontakt</h5>
              <a className="w-fit border-b border-transparent transition hover:border-text" href="mailto:k.e.sjogren@outlook.com">Mail: k.e.sjogren@outlook.com</a>
              <a className="w-fit border-b border-transparent transition hover:border-text" href="tel:+46722292927">Tel: +46 72-229 29 27</a>
              <a href="tel:+"></a>
            </div>
            <div className="flex flex-col">
              <h5 className="font-bold text-lg">Navigering</h5>
              <Link className="w-fit border-b border-transparent transition hover:border-text" href="/">
                Hem
              </Link>
              <Link className="w-fit border-b border-transparent transition hover:border-text" href="/products">
                Produkter
              </Link>
            </div>
          </div>
          <div>
            <a target="_blank" href="https://www.instagram.com/sjogreninnovation/">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path d="M17.6361 7H17.6477" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </MaxWidthProvider>
    </footer>
  );
}
