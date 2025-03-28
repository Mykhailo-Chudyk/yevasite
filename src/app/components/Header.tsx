import { Arsenal } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import yevayevtikhova from "../images/yevayevtikhova.png";

const arsenal = Arsenal({   
  subsets: ['latin'],
  style: 'italic',
  weight: '400',
});

export default function Header() {
  return (
    <header className="w-full flex justify-end py-6 px-4 max-w-[1600px] mx-auto">
      <Link href="/">
        <Image 
          src={yevayevtikhova}
          alt="Yeva Yevtikhova"
          width={175}
          height={40}
          className="md:mr-8 mr-4"
        />
      </Link>
    </header>
  );
} 