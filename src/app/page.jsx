import Link from "next/link";
import { Sparkles, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-10">
        {/* HeroSection */}
        <div className="@container mb-16">
          <div className="flex flex-col gap-10 lg:flex-row items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Momen Digital Jadi Nyata
                </span>
              </div>
              <h1 className="text-[#0e171a] dark:text-white text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
                Abadikan Momenmu <br /> dengan{" "}
                <span className="text-primary">Gaya!</span>
              </h1>
              <p className="text-[#518194] dark:text-gray-400 text-lg font-medium leading-relaxed max-w-[500px]">
                Transformasikan kenangan digitalmu ke dalam bingkai unik dan
                estetik dalam hitungan detik. Cepat, mudah, dan penuh gaya.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/create"
                  className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-primary text-white text-base font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all"
                >
                  <span>Mulai Sekarang</span>
                </Link>
                <button className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-14 px-8 border-2 border-primary/20 dark:border-white/10 text-primary dark:text-primary text-base font-bold hover:bg-primary/5 transition-all">
                  <span>Lihat Tutorial</span>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
                <div
                  className="relative w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-xl shadow-2xl overflow-hidden border-8 border-white dark:border-background-dark"
                  data-alt="Modern digital photo booth display showcasing various frame styles"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8bTLz7UjC1Bqt30N9UyAPcmuDrlPFtWCPN8Nvr-bIf8G027KglyTlqA0yWOwzV_KK9wRVMWWBLGucdDveh8Md7MGAGD1GwaTlqimVTT_nICCOBssypA8LwVHtFl7e3DXqIPOt03k_Is61kZS9viaZFOybRh0XcyjaNR9AboSANb4GdutTxig9AJS3T-qpHm3giwUJeppizEgI9rCBDAZxYNZ9K9TG25KcPD76ZcmjqfuqKGGCSBpDrA3S-BznQ14o2C3bKQdZYkj-")',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* SectionHeader */}
        <div className="flex items-center justify-between mb-8 border-l-4 border-primary pl-4">
          <div>
            <h2 className="text-[#0e171a] dark:text-white text-3xl font-bold leading-tight">
              Koleksi Frame Kami
            </h2>
            <p className="text-[#518194] dark:text-gray-400 font-medium">
              Temukan desain yang sesuai dengan kepribadianmu.
            </p>
          </div>
          <Link
            href="#"
            className="hidden sm:flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all"
          >
            Semua Koleksi{" "}
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* ImageGrid / Frame Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {[
            { src: "/frame 1.png", name: "Happiness", desc: "Cheerful moments" },
            { src: "/frame 2.png", name: "Frame 2", desc: "Classic style" },
            { src: "/frame 3.png", name: "Frame 3", desc: "Modern look" },
            { src: "/frame 4.png", name: "Frame 4", desc: "Elegant design" },
            { src: "/frame 5.png", name: "Frame 5", desc: "Creative vibes" },
            { src: "/frame 6.png", name: "Frame 6", desc: "Minimalist beauty" },
          ].map((frame, idx) => (
            <div key={idx} className="group flex flex-col bg-white dark:bg-white/5 p-3 rounded-xl border border-[#e8eff2] dark:border-white/10 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
              <div className="w-full aspect-1/3 bg-gray-100 dark:bg-gray-800 rounded-lg mb-3 overflow-hidden">
                <img
                  src={frame.src}
                  alt={frame.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <p className="text-[#0e171a] dark:text-white text-sm font-bold truncate">
                  {frame.name}
                </p>
                <p className="text-[#518194] dark:text-gray-400 text-xs font-normal">
                  {frame.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTASection */}
        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-white/5 border border-primary/20">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 size-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-64 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="relative px-6 py-16 md:px-16 md:py-24 text-center">
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-[#0e171a] dark:text-white text-4xl md:text-5xl font-black leading-tight max-w-[800px]">
                Siap untuk mencetak kenangan?
              </h1>
              <p className="text-[#518194] dark:text-gray-400 text-lg font-medium max-w-[600px]">
                Bergabunglah dengan ribuan pengguna lain yang telah mengabadikan
                momen mereka dengan KaelBox.
              </p>
              <Link
                href="/create"
                className="mt-4 flex min-w-[220px] cursor-pointer items-center justify-center rounded-full h-14 px-10 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-all"
              >
                <span>Mulai Sekarang</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
