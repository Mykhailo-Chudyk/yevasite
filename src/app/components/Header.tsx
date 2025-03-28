import Image from 'next/image';
import Link from 'next/link';
import yevayevtikhova from "../images/yevayevtikhova.png";

export default function Header() {
  return (
    <header className="w-full flex justify-end py-4 sm:py-6 px-4 sm:px-6 md:px-8 max-w-[1600px] mx-auto">
      <Link href="/" className="block">
        <Image 
          src={yevayevtikhova}
          alt="Yeva Yevtikhova"
          width={140}
          height={32}
          className="w-auto h-[32px] sm:h-[40px] md:mr-8 mr-4"
          priority
        />
      </Link>
    </header>
  );
} 