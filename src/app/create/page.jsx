"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamic import untuk menghindari SSR issues dengan webcam
const VirtualPhotobox = dynamic(
    () => import("@/components/VirtualPhotobox"),
    {
        ssr: false,
        loading: () => (
            <div className="flex items-center justify-center min-h-[500px]">
                <div className="flex flex-col items-center gap-4">
                    <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                        <span className="material-symbols-outlined text-primary text-3xl">
                            photo_camera
                        </span>
                    </div>
                    <p className="text-navy/60 dark:text-white/60 text-sm font-medium">
                        Memuat kamera...
                    </p>
                </div>
            </div>
        ),
    }
);

export default function Create() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-navy dark:text-white min-h-screen flex flex-col">
            {/* Top Navigation Bar */}
            <header className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-primary/20 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-[60]">
                <div className="flex items-center gap-6">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 text-navy dark:text-white hover:text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined text-[24px]">
                            arrow_back
                        </span>
                        <span className="text-sm font-bold">Kembali</span>
                    </Link>
                    <div className="h-6 w-[1px] bg-primary/30"></div>
                    <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                        📸 Virtual Photobox
                    </h1>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-6 mr-6">
                        <Link
                            href="#"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Gallery
                        </Link>
                        <Link
                            href="#"
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            Templates
                        </Link>
                    </div>
                    <div className="size-10 rounded-full bg-primary/20 border border-primary overflow-hidden">
                        <div className="w-full h-full bg-primary/30 flex items-center justify-center">
                            <span className="material-symbols-outlined text-primary">
                                person
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 md:px-10 py-8">
                {/* Instructions Banner */}
                <div className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-primary text-2xl">
                                tips_and_updates
                            </span>
                        </div>
                        <div>
                            <h2 className="font-bold text-lg mb-1">Cara Menggunakan</h2>
                            <p className="text-sm text-navy/70 dark:text-white/70">
                                1. Pilih frame yang kamu suka → 2. Klik "Mulai Foto" → 3.
                                Berpose saat countdown → 4. Download hasil fotomu!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Virtual Photobox Component */}
                <VirtualPhotobox />
            </main>

            {/* Footer Help Text */}
            <footer className="text-center py-8 border-t border-primary/10">
                <p className="text-xs font-medium text-navy/40 dark:text-white/40 uppercase tracking-widest">
                    KaelBox Virtual Photobox • Abadikan momenmu dengan gaya!
                </p>
            </footer>
        </div>
    );
}
