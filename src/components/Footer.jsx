import Link from "next/link";
import { Camera, Globe, AtSign, Share2 } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-background-dark/50 border-t border-[#e8eff2] dark:border-white/10 py-12">
            <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3">
                    <div className="bg-primary size-10 flex items-center justify-center rounded-full">
                        <Camera className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-lg font-extrabold tracking-tight">KaelBox</h2>
                </div>
                <p className="text-[#518194] dark:text-gray-500 text-sm font-medium">
                    © 2026 KaelBox. Dibuat dengan cinta untuk setiap kenangan.
                </p>
                <div className="flex gap-6">
                    <Link
                        href="#"
                        className="text-[#518194] hover:text-primary transition-colors"
                    >
                        <Globe className="w-5 h-5" />
                    </Link>
                    <Link
                        href="#"
                        className="text-[#518194] hover:text-primary transition-colors"
                    >
                        <AtSign className="w-5 h-5" />
                    </Link>
                    <Link
                        href="#"
                        className="text-[#518194] hover:text-primary transition-colors"
                    >
                        <Share2 className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
