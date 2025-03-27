import { Arsenal } from 'next/font/google';

const arsenal = Arsenal({   
  subsets: ['latin'],
  style: 'italic',
  weight: '400',
});

export default function Header() {
  return (
    <header className="w-full flex justify-end py-6 px-4 max-w-[1600px]">
      <h1 className={`${arsenal.className} text-2xl font-bold md:mr-8 mr-4`}>Yeva Yevtikhova</h1>
    </header>
  );
} 