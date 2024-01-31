"use client";

import { useEffect, useState } from "react";
import NavLogo from "./NavLogo";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import Link from "next/link";
import MaxWidthProvider from "../MaxWidthProvider";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if(pathname !== '/') return setIsScrolled(true);
    window.onscroll = () => {
      if (window.scrollY === 0) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, [pathname]);

  return (
    <nav
      className={cn("w-full fixed top-0 left-0 transition-all duration-300 z-50", {
        "bg-[#ffffffdd] backdrop-blur-md": isScrolled,
        "bg-transparent": !isScrolled,
      })}
    >
      <MaxWidthProvider>
        <div
          className={cn('w-full flex items-center justify-between transition-all duration-300' , {
            'py-4': isScrolled,
            'py-8': !isScrolled,
          })}
        >
          <NavLogo isScrolled={isScrolled} />
          <div className="hidden sm:flex items-center gap-6">
            <Link
              className={cn("font-raleway font-light transition duration-200 border-b", {
                "text-black border-transparent hover:border-black": isScrolled,
                "text-white border-transparent hover:border-white": !isScrolled,
              })}
              href="/products"
            >
              PRODUKTER
            </Link>
            <a
              className={cn("font-raleway font-light transition duration-200 border-b", {
                "text-black border-transparent hover:border-black": isScrolled,
                "text-white border-transparent hover:border-white": !isScrolled,
              })}
              href="#contact"
            >
              KONTAKT
            </a>
          </div>
        </div>
      </MaxWidthProvider>
    </nav>
  );
}
