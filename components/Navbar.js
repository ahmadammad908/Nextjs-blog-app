"use client";


import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from '../components/theme-btn';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container mx-auto flex justify-between   items-center">
        <div className="text-xl font-bold">
          <Link href="/">
            Tech Blogs
          </Link>
        </div>
        <ul className="md:flex hidden space-x-4 items-center">
          <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300 ">
            Home
          </Link>
          <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300 ">
            Blogs
          </Link>
          <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300 ">
            About Us
          </Link>
          <Link target="_blank"
            rel="noopener noreferrer"
            href="mailto: ahmadammad.me789@gmail.com" className="hover:scale-105 hover:font-semibold transition-transform duration-300 ">
            Contact
          </Link>
          <div className='flex items-center' >
            <Button variant="outline" className="mx-1">Login</Button>
            <Button variant="outline" className="mx-1">Sign Up</Button>
            <ModeToggle />

          </div>
        </ul>
        <div className="md:hidden flex justify-center items-center">
          <span className="mx-2">
            <ModeToggle />

          </span>
          <Sheet>
            <SheetTrigger className='flex'>

              <svg className='w-6 h-6' fill="none" stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>

            </SheetTrigger>

            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-bold my-4">Tech Blogs</SheetTitle>
                <SheetDescription>
                  <ul className='flex flex-col gap-6' >
                    <SheetClose  asChild>
                    <Link href="/" className="hover:text-gray-400 " >
                      Home
                    </Link>
                    </SheetClose>
                  
                    <SheetClose asChild>
                      <Link href="/blog" className="hover:text-gray-400 " >
                        Blogs
                      </Link>
                    </SheetClose>
                    <SheetClose  asChild>
                      <Link href="/about" className="hover:text-gray-400 ">
                        About Us
                      </Link>
                    </SheetClose>

                    <a href="mailto: ahmadammad.me789@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gray-400">
                      Contact
                    </a>
                    <div>
                      <Button variant="outline" className="mx-1 text-xs">Login</Button>
                      <Button variant="outline" className="mx-1 text-xs">Sign Up</Button>
                    </div>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>



    </nav>
  );
};

export default Navbar;
