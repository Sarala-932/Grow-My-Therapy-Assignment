"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative flex items-center justify-between px-6 md:px-10 lg:px-16 py-8 w-full max-w-350 mx-auto bg-transparent z-50">
            <div className="flex flex-col cursor-pointer shrink-0 z-50">
                <h1 className="text-2xl lg:text-3xl font-serif text-[#333333] leading-tight tracking-tight">
                    Dr. Maya Reynolds
                </h1>
                <span className="text-[9px] lg:text-[10px] tracking-[0.25em] text-[#596854] uppercase mt-0.5">
                    Therapy & Counseling
                </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-10 text-[10px] lg:text-[11px] tracking-[0.15em] text-[#555555] uppercase shrink-0 z-50">
                <Link href="#about" className="hover:text-black transition">
                    About
                </Link>
                <Link href="#team" className="hover:text-black transition">
                    Our Team
                </Link>
                <Link
                    href="#specialties"
                    className="hover:text-black transition"
                >
                    Specialties
                </Link>
                <Link href="#methods" className="hover:text-black transition">
                    Methods
                </Link>
                <Link href="#faqs" className="hover:text-black transition">
                    FAQs
                </Link>

                <Link
                    href="#contact"
                    className="px-6 py-2 border border-gray-400 rounded-full hover:bg-[#333333] hover:text-white transition duration-300"
                >
                    Contact
                </Link>
            </div>

            {/* Hamburger Icon (Mobile Only) */}
            <div className="md:hidden flex items-center z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-[#333] focus:outline-none p-2"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-[#F8F5F2] border-t border-[#e2dcd3] shadow-lg py-8 flex flex-col items-center space-y-6 md:hidden z-40 text-[11px] tracking-[0.2em] text-[#555555] uppercase animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="#team" onClick={() => setIsOpen(false)}>Our Team</Link>
                    <Link href="#specialties" onClick={() => setIsOpen(false)}>Specialties</Link>
                    <Link href="#methods" onClick={() => setIsOpen(false)}>Methods</Link>
                    <Link href="#faqs" onClick={() => setIsOpen(false)}>FAQs</Link>
                    <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-4 px-8 py-3 border border-gray-400 rounded-full hover:bg-[#333333] hover:text-white transition">
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
}
