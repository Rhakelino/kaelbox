import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Star } from "lucide-react";

export default function Pricing() {
    return (
        <>
            <Navbar />
            <main className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-16 min-h-screen">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-[#0e171a] dark:text-white mb-6">Pilih Paketmu</h1>
                    <p className="text-[#518194] dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        Investasikan pada kenanganmu. Dapatkan akses ke template premium dan fitur eksklusif.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Basic Plan */}
                    <div className="bg-white dark:bg-white/5 rounded-3xl p-8 border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all">
                        <h3 className="text-xl font-bold text-[#0e171a] dark:text-white mb-2">Basic</h3>
                        <div className="text-4xl font-black text-primary mb-6">Gratis</div>
                        <ul className="space-y-4 mb-8">
                            {["Akses Frame Standar", "Resolusi SD", "Watermark KaelBox"].map(feature => (
                                <li key={feature} className="flex items-center gap-3 text-[#518194] dark:text-gray-400">
                                    <Check className="w-5 h-5 text-primary" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors cursor-pointer">
                            Pilih Basic
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div className="bg-[#0e171a] text-white rounded-3xl p-8 border-4 border-primary shadow-2xl relative transform md:-translate-y-4">
                        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>
                        <h3 className="text-xl font-bold mb-2">Pro</h3>
                        <div className="text-4xl font-black text-primary mb-6">Rp 29k<span className="text-base font-normal text-gray-400">/bulan</span></div>
                        <ul className="space-y-4 mb-8">
                            {["Semua Template Premium", "Resolusi HD & 4K", "Tanpa Watermark", "Priority Support"].map(feature => (
                                <li key={feature} className="flex items-center gap-3 text-gray-300">
                                    <Star className="w-5 h-5 text-primary fill-primary" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-4 rounded-xl bg-primary text-[#0e171a] font-bold hover:bg-primary/90 transition-colors shadow-lg cursor-pointer">
                            Mulai Pro Sekarang
                        </button>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="bg-white dark:bg-white/5 rounded-3xl p-8 border border-gray-200 dark:border-white/10 hover:shadow-xl transition-all">
                        <h3 className="text-xl font-bold text-[#0e171a] dark:text-white mb-2">Event</h3>
                        <div className="text-4xl font-black text-primary mb-6">Hubungi Kami</div>
                        <ul className="space-y-4 mb-8">
                            {["Custom Branding Frame", "Unlimited Photos", "Dedicated Support", "Analytics Dashboard"].map(feature => (
                                <li key={feature} className="flex items-center gap-3 text-[#518194] dark:text-gray-400">
                                    <Check className="w-5 h-5 text-primary" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className="w-full py-4 rounded-xl border-2 border-gray-200 dark:border-white/20 text-[#518194] dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
                            Hubungi Sales
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
