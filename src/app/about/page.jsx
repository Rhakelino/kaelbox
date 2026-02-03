import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Heart, Coffee } from "lucide-react";

export default function About() {
    return (
        <>
            <Navbar />
            <main className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 min-h-screen">
                <div className="flex flex-col md:flex-row items-center gap-16 mb-20">
                    <div className="w-full md:w-1/2">
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit mb-6">
                            <Users className="w-4 h-4" />
                            <span className="text-xs font-bold uppercase tracking-wider">Tentang Kami</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-[#0e171a] dark:text-white mb-6 leading-tight">
                            Misi Kami Adalah <span className="text-primary">Mengabadikan Kebahagiaan</span>
                        </h1>
                        <p className="text-[#518194] dark:text-gray-400 text-lg leading-relaxed mb-8">
                            KaelBox lahir dari keinginan sederhana: membuat foto booth digital berkualitas studio dapat diakses oleh siapa saja, di mana saja. Kami percaya setiap senyuman layak diabadikan dengan indah.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <img src="/frame 1.png" className="w-full rounded-2xl shadow-lg transform translate-y-8" alt="Team activity" />
                            <img src="/frame 2.png" className="w-full rounded-2xl shadow-lg" alt="Office vibe" />
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        { icon: <Heart className="w-8 h-8 text-primary" />, title: "Dibuat dengan Cinta", desc: "Setiap pixel didesain dengan perhatian penuh pada detail." },
                        { icon: <Users className="w-8 h-8 text-primary" />, title: "Komunitas Kreatif", desc: "Ribuan pengguna berbagi template dan inspirasi setiap hari." },
                        { icon: <Coffee className="w-8 h-8 text-primary" />, title: "Selalu Berinovasi", desc: "Kami tidak pernah berhenti mencari cara baru untuk membuat fotomu lebih keren." }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-white/5 p-8 rounded-3xl border border-gray-100 dark:border-white/5 hover:border-primary/30 transition-colors">
                            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#0e171a] dark:text-white mb-3">{item.title}</h3>
                            <p className="text-[#518194] dark:text-gray-400">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
