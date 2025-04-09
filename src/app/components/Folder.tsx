'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import violetfolder from '@/app/images/violetfolder.png'; 
import grayfolder from '@/app/images/grayfolder.png';

interface FolderProps {
  name: string;
  color?: 'grey' | 'violet';
}

const Folder: React.FC<FolderProps> = ({ name, color = 'grey'}) => {
  const router = useRouter();
  const folderImage = color === 'grey' ? grayfolder : violetfolder;

  const handleClick = () => {
    if (name === 'my story') {
      router.push('/me');
    }
  };

  return (
    <div 
      className="flex flex-col items-center cursor-pointer transition-transform duration-200 hover:scale-102 p-2.5"
      onClick={handleClick}
    >
      <Image 
        src={folderImage} 
        alt={`${color} folder`} 
        width={100}
        height={100}
        className="object-contain"
      />
      <div className="mt-2 text-sm text-gray-700 text-center break-words font-courier-prime w-full">
        [ {name} ]
      </div>
    </div>
  );
};

export default Folder;
