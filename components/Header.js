import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-gray-900 text-gray-100 w-full shadow">
      <div className="container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center ">
        <Link href="/">
          <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
            <Image src="/images/logo.png" width={40} height={40} alt="Logo" />
            <span className="ml-3 text-xl">DevSpace</span>
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 justify-end text-base items-center md:ml-auto">
          <Link href="/blog">
            <a className="uppercase mx-5 cursor-pointer hover:text-indigo-500">Blog</a>
          </Link>
          <Link href="/about">
            <a className="uppercase mx-5 cursor-pointer hover:text-indigo-500">About</a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
