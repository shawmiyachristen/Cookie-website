/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ShoppingBag, ArrowRight, Instagram, ChevronLeft, ChevronRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      {/* Announcement Bar */}
      <div className="bg-[#fadcce] py-2 text-center">
        <p className="label-bold text-[10px] text-brand-primary">
          Free shipping on all orders within France
        </p>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-brand-surface/80 backdrop-blur-md border-b border-brand-outline/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="headline-md tracking-tighter text-brand-primary uppercase">
            Munchies
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="label-bold hover:text-brand-primary transition-colors">Shop All</a>
            <a href="#" className="label-bold hover:text-brand-primary transition-colors">Bundles</a>
            <a href="#" className="label-bold hover:text-brand-primary transition-colors">Nutty</a>
            <a href="#" className="label-bold hover:text-brand-primary transition-colors">Club</a>
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden sm:inline label-bold">EU (€)</span>
            <button className="relative p-1 text-brand-secondary hover:text-brand-primary transition-colors">
              <ShoppingBag size={22} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 bg-brand-primary text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida/ADBb0ujiWbBPt7qH6kFcW0QwFLyVFvkkL_zMNCyhS9jIoW14vOCdNe6Vi432MctCVRInn7lQ2w4vy5SqWYKGVKXlS2D0zjkbdonPsd0v9CC4qqskM3BDED8UBS7oAngOId_HXNPljRgn-1uOjwFL_ibrxFSacd867DzWh082l3ZVPNrVMFGqTgy1068U3Skrs2yAK3GUEFrHtf8L1WQVESdWUUaRM0jVdWtS0IjTrQkIRbiYS34t53wg-FJKMxifysN5IxTwKZnJtp8_wQ"
            alt="Warm artisanal cookies lifestyle"
            className="w-full h-full object-cover scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-surface/90 via-brand-surface/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="headline-display text-brand-secondary mb-8">
              Cozy up with our new cookie collection
            </h1>
            <button className="bg-brand-primary text-white px-10 py-5 rounded-full label-bold shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
              Shop now
            </button>
          </motion.div>
        </div>
      </header>

      {/* Freshly Baked Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="headline-xl text-brand-primary">Freshly baked</h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 border border-brand-primary rounded-full flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all">
              <ChevronLeft size={20} />
            </button>
            <button className="w-10 h-10 border border-brand-primary rounded-full flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {[
            {
              title: "Dark Chocolate Peanut Butter Chip",
              price: "$2.99",
              tag: "Gourmet Cookie",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0RolkexnFw2TDrfDGiaU2RuHN6JRU380Ro6JL7L3avEeqbCROGPAPA19N7pxj8ZFNu2rWg64f7I_oIVVG0LfESPcL9Ppr4xxaHM8800d11xKXyS02jGm_UhBVCA3FnjV69baSg69l2JTVCqprdFpZvR7JfV9CKmLNoRy01ssM1Wwa-a4Q9mrNoNKLLJgMCyH4e_bM5h7cdNcTi6lxbnr59QSMdN1xNYyfz3aEKG9qayVRxliCQIx6nBpKqoXB_iHsk9igdJ58ZVs"
            },
            {
              title: "Chocolate Chip Walnuts",
              price: "$2.99",
              tag: "Nutty Cookie",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJYzbIeB6XAezSH5aErtm6j9pDtmku4P7w9uzSpMIcT3E47CuSdSrQnj0JbHbVRndCwO64dVIoB3iaJXSQxU3ZoVSDlXAtQLCr2Kh8KKQYU1q3VLFot9qdkaVfv1lUZuKtk_09SEbDv8Yn0cOhl0eI7dWtPFa1jy0NuPP2f3jfGNLJdy0NvM0jf_hNDkrq_esFJ2a2-NEa3gQcOcLow9Q5G6eQqHV8_QjW7yQwDpOp2SXseQqVMUYdWeRqAoiu4kIsYX6DvnX5I-I"
            },
            {
              title: "Caramel Chocolate Chip",
              price: "$2.99",
              tag: "Indulgent",
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTjBLXE2KF2j0NJglvVYA5WboeZfv6mJJ3UGqjgJC51AL-htR-2JugvaI3yCwAeKG5iKC66tGOqehuseG-z1-OKimEX3Bp-NO-QYthq32ebMebhGbD_3iMjKvlTf-3I98zaoQ1FkDPPHt20BV3moW22WCxj7cl1Jhqg34uUeeWenAAEo1_hmbouDyeibb0QpeXbKSUKe-lzgpRvZQ0_RTuJMGBt_Qr4JXOI9pKJl-frKApj1oz0JsowuNTazEI9KpzIPBbZwrrEuk"
            }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeIn} className="group cursor-pointer">
              <div className="bg-brand-container-low aspect-square rounded-2xl overflow-hidden mb-6 relative shadow-sm group-hover:shadow-xl transition-all duration-500">
                <span className="absolute top-4 right-4 label-bold text-[9px] bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-brand-primary z-10">
                  {item.tag}
                </span>
                <img 
                  src={item.img} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="headline-md text-brand-secondary mb-2 group-hover:text-brand-primary transition-colors">
                {item.title}
              </h3>
              <p className="label-bold text-brand-primary">from {item.price}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Where to Buy Button */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <button className="w-full py-8 border-2 border-brand-primary rounded-full headline-md text-brand-primary uppercase tracking-[0.2em] hover:bg-brand-primary hover:text-white transition-all duration-500">
          Where to buy
        </button>
      </div>

      {/* Build Your Box */}
      <section className="bg-brand-container py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB0qW8N1Ka-rmWpnAKct2544Ryy8pWKtdowXmiJA2cVfcOaDy5mVODuLQ3xvVtthlDNkFfEnvhZ3sCD_ARjkdGQYVUkuGYdtEya-22im11563Q_tqFF6HoEJR0qn1MDG98-tL3wjJxO9ua3pSnLtCHqcp7LdrvocVKxdsEjuiywzgz2Wm7qvhGgC02JMhx0rARxaT4uE4LSj2ercTyQC1XdB2N39KdRCBMRD6t-9m7ODwh7uLsoL5ZkkKAoNmwpD_XC3eaJovzTB8"
              alt="Assorted cookie gift box"
              className="rounded-3xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div {...fadeIn}>
            <span className="label-bold text-brand-primary block mb-4">Personalized Indulgence</span>
            <h2 className="headline-xl text-brand-secondary mb-6">Build your box</h2>
            <p className="font-body text-xl text-brand-on-surface-variant mb-10 leading-relaxed">
              Choose your favorite flavors and create a custom assortment designed for your cravings. Perfect for gifting or hoarding.
            </p>
            <div className="p-6 bg-brand-surface rounded-3xl shadow-sm flex items-center gap-6 mb-10 group">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0RolkexnFw2TDrfDGiaU2RuHN6JRU380Ro6JL7L3avEeqbCROGPAPA19N7pxj8ZFNu2rWg64f7I_oIVVG0LfESPcL9Ppr4xxaHM8800d11xKXyS02jGm_UhBVCA3FnjV69baSg69l2JTVCqprdFpZvR7JfV9CKmLNoRy01ssM1Wwa-a4Q9mrNoNKLLJgMCyH4e_bM5h7cdNcTi6lxbnr59QSMdN1xNYyfz3aEKG9qayVRxliCQIx6nBpKqoXB_iHsk9igdJ58ZVs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <h4 className="label-bold text-brand-secondary mb-1">Dark Chocolate PB Chip</h4>
                <div className="flex items-center text-brand-primary gap-1 font-bold">
                  <span>Add to assortment</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
            <button className="w-full bg-brand-secondary text-white py-5 rounded-full label-bold uppercase tracking-widest hover:bg-brand-primary transition-colors">
              Start Building
            </button>
          </motion.div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-24 px-6">
        <motion.div 
          {...fadeIn}
          className="max-w-3xl mx-auto text-center border-y border-brand-outline/20 py-20"
        >
          <p className="font-display text-2xl md:text-4xl text-brand-on-surface-variant leading-relaxed">
            Munchies is a <span className="text-brand-primary font-bold italic">premium</span> chocolate company specializing in crafting high-quality chocolate chips for baking enthusiasts and professionals alike.
          </p>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <div className="bg-brand-surface py-12 border-y border-brand-outline/10 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-24">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-24 items-center">
              <span className="font-display text-5xl md:text-7xl font-extrabold text-brand-primary tracking-tighter uppercase">Healthy Ingredients</span>
              <span className="font-display text-5xl md:text-7xl font-extrabold text-brand-primary tracking-tighter uppercase">MUNCHIES</span>
              <span className="font-display text-5xl md:text-7xl font-extrabold text-brand-primary tracking-tighter uppercase">100% Vegan</span>
            </div>
          ))}
        </div>
      </div>

      {/* Shop Gallery Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="headline-xl text-brand-primary mb-12">Shop our cookies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <GalleryItem delay={0} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl00CPGzqlF08YKQhv2r4SM5kZtM7PODyvBiY4i18e--9az0dc2idZztOx6ifoRabIrVtPUULooHcndw33wpYeiqgoxnK0Nqi8R07p1AzwJJ4QPGq5mFjjWNDjQ8Nql1j8PFM5ywap19oVRfm0kuuDxyBj7s8LiB7aBRjo1Hg99JJpgJg_1zdj1txb9HAcw94H3pn9u4EpCSZemGB70eurpfNk-BdtvX3RPNZ5W9v4L1S7_5rReTBddizbEhIaGehXNO3dpY68yAo" />
          <GalleryItem delay={0.1} span src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB_3UvHIlrQNiOOQRHW98ulPVL5X6srxuaUZRp-OuRS36jdwGt1IS3Si4NRzbcuds-Dr2kJkBC9TPHRIIfw_4ZJ7Q0q0GX7-x8HVjUlhJ1dceqZwCm8tc4K1XHPfzfwY__OrLQNvWo-4CJkocYgLawu3nF5s9tcVR3LF1QSnEDDtxG7CLiWfSD88H38q6KiTnnwEJZnUZj8sSaChtoZiwULVsd9zQnmc1b9e9twXb0i2NHVFRtjB47SeMmAXrqvoTrFqs0RDcDZUM" />
          <GalleryItem delay={0.2} src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCEp8MxdphTUaq-0rnIjhMpCzE36_oGmq3Hu35Y1AuJFfykFYfHB37nPpXtmWLpwH4c35Jz6bkqQMicQS8caTmwpMU-709XPKAbgKEocnKsCnk2PtzLapHtMF_eYD3ueLXXDemfJsegY7ZV0rnMQyR2DsqaFmb7s2rNXbdeTSwAh4JWSQv28Z5Zp3_Wi73yLWhsuTED7gou3CK-aGr_EeSy9L8iAXUvj0tHLDptQYLlHSPso4fRhtko2ZhpBXfCn-QiP00tOEsLIk" />
          <GalleryItem delay={0.3} src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3mZ9mZnjGcHNlR_g80irUALVP4mIHNeET5APpuE_PMOe6SaQrCzNCnbHQLHweKaniMoflSrVcBdCVRn1hI66mR-6o0QUbSr80oNDqIhoUl_seWrswEA_Ug_-kR3vp4IAjKKaQ4PxWbwqp0WF8eEP9Cc4-0m8SpTGRkKo5hFfjuiXZTofug57R2rXWDphWQt321qBx7cjO611E--XOHGMvn4b-0dC_JmmuJ-6vJlC3ygv96JooKLZRaRzWRIK6cLm1ZqCRtl_nBGw" />
          <GalleryItem delay={0.4} src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc_c4EpcsBFW7yltemVSkw6XMcKUFBgUjJL3ekClvnh2aRc6ZVBJcl3Y-FMqKs_I3yIFfPJz2WN4ayYT4Q0dEHVlDHwTG-MvSeKSFBMriMN4VE2tntK1ns9S-NZYrsYRAfEKeRgWp5VuAwS9c5Z59ae373Jkdl4gVOMKojCkEYBZWkNPwNB5QMSnEMkHn3mgFkWyxWpfGjoCFPGstCkdcv7ekEm0lxcsHVU2p4oIRCMpBCfhxlhUArWakOV8upF7mfhg-L3IYsNYI" />
          <GalleryItem delay={0.5} src="https://lh3.googleusercontent.com/aida-public/AB6AXuAljk9BL9a8KC469CEdOxH0BD0LJMhpMkL3_lG4PxyoFK5hno1JQO0O4h_lFmxcE3thBtRcaJZfd0SKoInXriT-9QTnc7zBXweaeLF0edZvcBymqBc70TQsYolZYbVi58sas3sqnq5iIl7e5ssr2nOrli3s_uQmLvw7ct9w4wRezmWEGY7OJX7RCH3a56niVrV19P3YKuX74IRO1ED-SzHXnA0UUuQnc0Am_QqfDUw_0g56-Jkkwaftl_URjYpMTUu3VJOTcPrIBQ8" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-secondary text-brand-surface pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 mb-24">
          <div className="text-center md:text-left">
            <h2 className="headline-display text-8xl md:text-[140px] opacity-10 leading-none mb-4">MUNCHIES</h2>
            <p className="font-body text-sm opacity-60">© 2024 Munchies Artisanal Cookies. Handmade with love.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 label-bold">
            <a href="#" className="hover:text-brand-primary transition-colors">Contact</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Shipping</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Returns</a>
            <a href="#" className="hover:text-brand-primary transition-colors flex items-center gap-2">
              <Instagram size={16} />
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GalleryItem({ src, span = false, delay = 0 }) {
  return (
    <motion.div 
      {...fadeIn}
      transition={{ delay, duration: 0.6 }}
      className={`relative overflow-hidden rounded-3xl ${span ? 'row-span-2 aspect-[4/5] mt-12' : 'aspect-square'}`}
    >
      <img 
        src={src} 
        alt="Artisanal cookie gallery" 
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
        referrerPolicy="no-referrer"
      />
    </motion.div>
  );
}
