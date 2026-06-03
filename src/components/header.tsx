"use client"; 

import Link from 'next/link';

export default function Header() {
    
  console.log("O Header tentou renderizar!"); 

  return (
    <header className="fixed top-0 h-16 bg-black text-white flex items-center px-4 z-[9999]">
      <p className="font-bold mr-4 text-yellow-300"></p>
      <nav className="flex gap-4">
        <div className="fixed left-8 !important text-4xl">
            <b>Luiz Fellipe</b>
        </div>
        <div className="relative left-0 !important">
            <Link href="/">Home</Link>
        </div>
        <div>
            <Link href="/about">About Me</Link>
        </div>
        <div>
            <Link href="/tools">Tools</Link>
        </div>
        <div>
            <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}