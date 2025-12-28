"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image src="/logo-full.png" alt="Spectre UNO" width={200} height={50} className="h-10 w-auto object-contain object-left" priority />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-12">
                        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
                        <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
                        <Link href="/what-we-do" className="text-sm font-medium hover:text-primary transition-colors">What We Do</Link>
                        <Link href="/responsible-trade" className="text-sm font-medium hover:text-primary transition-colors">Responsible Trade</Link>
                        <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-primary hover:text-accent-green focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 top-20 shadow-lg animate-in slide-in-from-top-2 duration-300">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        <Link href="/" className="text-base font-medium text-foreground hover:text-primary py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/about" className="text-base font-medium text-foreground hover:text-primary py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>About</Link>
                        <Link href="/what-we-do" className="text-base font-medium text-foreground hover:text-primary py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>What We Do</Link>
                        <Link href="/responsible-trade" className="text-base font-medium text-foreground hover:text-primary py-2 border-b border-gray-50" onClick={() => setIsOpen(false)}>Responsible Trade</Link>
                        <Link href="/contact" className="text-base font-medium text-foreground hover:text-primary py-2" onClick={() => setIsOpen(false)}>Contact</Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
