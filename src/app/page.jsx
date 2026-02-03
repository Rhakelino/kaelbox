import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* TopNavBar */}
      <div className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20">
          <header className="flex items-center justify-between h-20 border-b border-solid border-[#e8eff2] dark:border-white/10">
            <div className="flex items-center gap-3">
              <div className="bg-primary size-10 flex items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-white text-2xl">
                  camera_roll
                </span>
              </div>
              <h2 className="text-xl font-extrabold tracking-tight">
                KaelBox
              </h2>
            </div>
            <div className="flex flex-1 justify-end items-center gap-8">
              <nav className="hidden md:flex items-center gap-8">
                <Link
                  href="#"
                  className="text-sm font-semibold hover:text-primary transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold hover:text-primary transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold hover:text-primary transition-colors"
                >
                  About
                </Link>
              </nav>
              <button className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-full h-11 px-6 bg-primary text-white text-sm font-bold shadow-sm hover:shadow-md transition-all">
                <span>Login</span>
              </button>
            </div>
          </header>
        </div>
      </div>

      <main className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 py-10">
        {/* HeroSection */}
        <div className="@container mb-16">
          <div className="flex flex-col gap-10 lg:flex-row items-center">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full w-fit">
                <span className="material-symbols-outlined text-sm">
                  auto_awesome
                </span>
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
            <span className="material-symbols-outlined">chevron_right</span>
          </Link>
        </div>

        {/* ImageGrid / Frame Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Card 1 */}
          <div className="group flex flex-col bg-white dark:bg-white/5 p-4 rounded-xl border border-[#e8eff2] dark:border-white/10 hover:shadow-xl transition-all duration-300">
            <div
              className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl mb-4"
              data-alt="Colorful pixel art style photo frame design"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSXn3t5MXHmKY_M-kwFZVs6dxOMc6e9UYMzpHIrjtduLXz2iaobOVrBsftWd36svZeVGPKIYT4CxLM6ORwA71gf2q45AHjMTOlevOb4B4WxaJh15s9T1yDLy1bSH_6IPibW0wrmEx_tC_mIiGH1EA9fcS9fyUPIXDNNT3PkfOogSRhojaq2VwOMr18x06B5wz2WlVaooidT_1z333-JJQhs70XRlgxtHt51AoctUrK_yrWM04Eqc4pTJ6irQ6DMWzlzL4TWXsiTt0C")',
              }}
            ></div>
            <div className="flex flex-col gap-1">
              <p className="text-[#0e171a] dark:text-white text-lg font-bold">
                Pixel Fun Adventure
              </p>
              <p className="text-[#518194] dark:text-gray-400 text-sm font-normal">
                Vibrant and playful aesthetic
              </p>
              <button className="mt-4 flex items-center justify-center w-full h-11 rounded-full bg-primary/10 text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all">
                Pilih Frame Ini
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group flex flex-col bg-white dark:bg-white/5 p-4 rounded-xl border border-[#e8eff2] dark:border-white/10 hover:shadow-xl transition-all duration-300">
            <div
              className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl mb-4"
              data-alt="Classic vintage film strip style photo frame"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD51bd7z6jv-04MeiiKLdz4ULCuT-fIlmc-tp8DeNZ0Su8KgZ7wp3GpMrxi6xJ1bxDWHK91XsFCGvIWzW_8HSq4_lPXAkKpT_f8BeJpyPwRdRl0rPqWMrtFkXsjwbsK6Xt2o2d7azscia3SEQXUtCDLdjmUGP3K4TMLgRdVMr1grZMJKyQKwelb7tsHVX1z_C8gSIfqTPbBfAEplFLq5wRHS5sGYURYZrnn-NZF9Q5N73IfjJaUEEYEwaeFH2qVcdBwcnqVNF_gKJFe")',
              }}
            ></div>
            <div className="flex flex-col gap-1">
              <p className="text-[#0e171a] dark:text-white text-lg font-bold">
                Retro Vibe
              </p>
              <p className="text-[#518194] dark:text-gray-400 text-sm font-normal">
                Classic film grain aesthetic
              </p>
              <button className="mt-4 flex items-center justify-center w-full h-11 rounded-full bg-primary/10 text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all">
                Pilih Frame Ini
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group flex flex-col bg-white dark:bg-white/5 p-4 rounded-xl border border-[#e8eff2] dark:border-white/10 hover:shadow-xl transition-all duration-300">
            <div
              className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl mb-4"
              data-alt="Soft aesthetic pastel blue and pink frame"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB6_RljcwJEPApQ3BfgD-iMZuuu_j817iXkZwwxfsEL1Zf12hlV8bXBXC8jVSoG5Pl896Q41M_F5HJGr9y7YPfPiM3D-qcoDlzQRNb6kemUzgJcx60ZYPillHg9SAFJTNrme0S810E3ia_ipslzASbDlPB45Da4m_J6FfBldo3Da029PT4Muy-v7-PXW_pB-gLzEWKHASSg0yYVump4kRz4QRBUixlkqW7j94zDqkVx_zTgfslOAPXmpBDkHYCzfhU36VxgnhKLepJq")',
              }}
            ></div>
            <div className="flex flex-col gap-1">
              <p className="text-[#0e171a] dark:text-white text-lg font-bold">
                Soft Pastel
              </p>
              <p className="text-[#518194] dark:text-gray-400 text-sm font-normal">
                Dreamy soft tones & bokeh
              </p>
              <button className="mt-4 flex items-center justify-center w-full h-11 rounded-full bg-primary/10 text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all">
                Pilih Frame Ini
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="group flex flex-col bg-white dark:bg-white/5 p-4 rounded-xl border border-[#e8eff2] dark:border-white/10 hover:shadow-xl transition-all duration-300">
            <div
              className="w-full aspect-square bg-center bg-no-repeat bg-cover rounded-xl mb-4"
              data-alt="Minimalist elegant white border photo frame"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCVykESnCTrK_o3zOHeVKim6iUdesidgN3PmBnGwSIcT31Cr0C9a7A2gE6v1WVoo0n1uGmXAiVM1trZPQ3DrVoW3UfDPA2jJUTYF0zXbQTs9GvVBnbLONCSZYJOqScCO91zwBxVNw36iNT23UwzGj3r8m7z5smufOrV3vsauej91Q0M3txFkcIukeVwGVRfQbIQyTX7K9Qq43B2cfkCivhr45EYGZyzOYqH4F0zjpeuUjxJVekgi_hEBd00nU_jjoHDbQIt_y1UZcgD")',
              }}
            ></div>
            <div className="flex flex-col gap-1">
              <p className="text-[#0e171a] dark:text-white text-lg font-bold">
                Classic White
              </p>
              <p className="text-[#518194] dark:text-gray-400 text-sm font-normal">
                Clean and minimalist elegance
              </p>
              <button className="mt-4 flex items-center justify-center w-full h-11 rounded-full bg-primary/10 text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all">
                Pilih Frame Ini
              </button>
            </div>
          </div>
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

      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark/50 border-t border-[#e8eff2] dark:border-white/10 py-12">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary size-10 flex items-center justify-center rounded-full">
              <span className="material-symbols-outlined text-white text-xl">
                camera_roll
              </span>
            </div>
            <h2 className="text-lg font-extrabold tracking-tight">
              KaelBox
            </h2>
          </div>
          <p className="text-[#518194] dark:text-gray-500 text-sm font-medium">
            © 2026 KaelBox. Dibuat dengan cinta untuk setiap kenangan.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-[#518194] hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">public</span>
            </Link>
            <Link
              href="#"
              className="text-[#518194] hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">alternate_email</span>
            </Link>
            <Link
              href="#"
              className="text-[#518194] hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">share</span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
