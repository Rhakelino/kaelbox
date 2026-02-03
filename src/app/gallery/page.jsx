import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Image } from "lucide-react";

export default function Gallery() {
    const photos = [
        { src: "/frame 1.png", desc: "Moment 1" },
        { src: "/frame 2.png", desc: "Moment 2" },
        { src: "/frame 3.png", desc: "Moment 3" },
        { src: "/frame 4.png", desc: "Moment 4" },
        { src: "/frame 5.png", desc: "Moment 5" },
        { src: "/frame 6.png", desc: "Moment 6" },
    ];

    return (
        <>
            <Navbar />
            <main className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-10 min-h-screen">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-black text-[#0e171a] dark:text-white mb-4">Galeri Kenangan</h1>
                    <p className="text-[#518194] dark:text-gray-400 max-w-2xl mx-auto">
                        Lihat bagaimana pengguna lain mengabadikan momen spesial mereka.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {photos.map((photo, idx) => (
                        <div key={idx} className="group relative aspect-square bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                            <img
                                src={photo.src}
                                alt={photo.desc}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <div className="text-white">
                                    <p className="font-bold text-lg">{photo.desc}</p>
                                    <p className="text-sm opacity-80">Captured with KaelBox</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
