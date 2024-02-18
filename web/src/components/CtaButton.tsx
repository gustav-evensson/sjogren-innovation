import Image from 'next/image';
import Link from 'next/link';

export default function CtaButton({ children } :{ children: React.ReactNode }) {
  return (
    <Link href="#contact" className="tha-container flex gap-4 items-center rounded-full p-1 pr-4 border border-white w-fit">
      <Image src="/assets/paper_plane.svg" width={48} height={48} alt="paper plane image" aria-hidden="true" />
      <span className="text-white tha-item tha-white uppercase" data-content={children}>
        {children}
      </span>
    </Link>
  );
}
