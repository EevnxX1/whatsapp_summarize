'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from "next/image";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { 
    profile: '/profile/user.png', 
    name: 'Miftahul huda', 
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, omnis? Rem, hic facilis quae consectetur quos neque incidunt illum tempore?',
    href: '/chat/detail',
    date: '11-06-2025'
  },
  {
    profile: '/profile/user.png', 
    name: 'Faris Hasyim', 
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, omnis? Rem, hic facilis quae consectetur quos neque incidunt illum tempore?',
    href: '/chat/detail2',
    date: '11-06-2025'
  },
  { 
    profile: '/profile/user.png', 
    name: 'Sean Andrianto', 
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, omnis? Rem, hic facilis quae consectetur quos neque incidunt illum tempore?',
    href: '/chat/detail3',
    date: '11-06-2025'
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
        <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "hover:bg-gray-400 p-[10px] border-y border-white/20",
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              }
            )}
            >
            <div className='flex gap-x-[15px]'>
                <Image
                className='rounded-full bg-gray-100 w-[40px] h-[40px]'
                src={link.profile}   // bisa di public/
                alt="profile"
                width={40}
                height={0}
                />
                <div className='w-[85%] flex flex-col justify-center gap-y-1'>
                    <div className='flex justify-between'>
                        <h1 className='text-sm font-bold truncate'>{link.name}</h1>
                        <p className='text-[10px] self-center'>{link.date}</p>
                    </div>
                    <p className='text-xs truncate'>{link.text}</p>
                </div>
            </div>
        </Link>
        );
      })}
    </>
  );
}
