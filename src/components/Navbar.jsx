"use client";

import Link from "next/link";
import { Camera } from "lucide-react";

export default function Navbar() {
    const handleLogin = () => {
        alert("Fitur ini sedang dalam tahap pengembangan");
    };

    return (
        <div className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20">
                <header className="flex items-center justify-between h-20 border-b border-solid border-[#e8eff2] dark:border-white/10">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="bg-primary size-10 flex items-center justify-center rounded-full">
                                <Camera className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-xl font-extrabold tracking-tight">
                                KaelBox
                            </h2>
                        </Link>
                    </div>
                    <div className="flex flex-1 justify-end items-center gap-8">
                        <nav className="hidden md:flex items-center gap-8">
                            <Link
                                href="/"
                                className="text-sm font-semibold hover:text-primary transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/gallery"
                                className="text-sm font-semibold hover:text-primary transition-colors"
                            >
                                Gallery
                            </Link>
                            <Link
                                href="/pricing"
                                className="text-sm font-semibold hover:text-primary transition-colors"
                            >
                                Pricing
                            </Link>
                            <Link
                                href="/about"
                                className="text-sm font-semibold hover:text-primary transition-colors"
                            >
                                About
                            </Link>
                        </nav>
                        <button
                            onClick={handleLogin}
                            className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-11 px-6 bg-primary text-white text-sm font-bold shadow-sm hover:shadow-md transition-all"
                        >
                            <span>Login</span>
                        </button>
                    </div>
                </header>
            </div>
        </div>
    );
}
