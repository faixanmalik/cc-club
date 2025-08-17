
'use client';
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PaymentModal from "../components/PaymentModal";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Notice from "../components/Notice";

const TIERS = [
  {
    id: "trial-1",
    name: "Trial Virtual Credit Card (Basic)",
    price: 10,
    balance: 120,
    img: "/images/image-10.png",
  },
  {
    id: "trial-2",
    name: "Trial Virtual Credit Card (Standard)",
    price: 13,
    balance: 150,
    img: "/images/image-8.jpg",
  },
  {
    id: "trial-3",
    name: "Trial Virtual Credit Card (Premium)",
    price: 15,
    balance: 200,
    img: "/images/image-9.jpg",
  },
];

const REGULAR_CARDS = [
  {
    id: "regular-1",
    name: "Virtual Credit Card (Global)",
    price: 30,
    balance: 1116,
    img: "/images/image-6.jpg",
  },
  {
    id: "regular-2",
    name: "Virtual Credit Card (Amazon)",
    price: 30,
    balance: 1194,
    img: "/images/image-5.jpg",
  },
  {
    id: "regular-3",
    name: "Virtual Credit Card (Facebook)",
    price: 30,
    balance: 1115,
    img: "/images/image-4.jpg",
  },
  {
    id: "regular-4",
    name: "Virtual Credit Card (Instagram)",
    price: 30,
    balance: 1110,
    img: "/images/image-3.jpg",
  },
  {
    id: "regular-5",
    name: "Virtual Credit Card (YouTube)",
    price: 30,
    balance: 1127,
    img: "/images/image-2.jpg",
  },
  {
    id: "regular-6",
    name: "Virtual Credit Card (Twitter X)",
    price: 30,
    balance: 1090,
    img: "/images/image-1.jpg",
  },
  {
    id: "regular-7",
    name: "Virtual Credit Card (FedEx)",
    price: 30,
    balance: 1101,
    img: "/images/image-9.jpg",
  },
  {
    id: "regular-8",
    name: "Virtual Credit Card (VPN)",
    price: 30,
    balance: 1158,
    img: "/images/image-8.jpg",
  },
  {
    id: "regular-9",
    name: "Virtual Credit Card (Ads)",
    price: 30,
    balance: 1051,
    img: "/images/image-7.jpg",
  },
  {
    id: "regular-10",
    name: "Virtual Credit Card (USD)",
    price: 30,
    balance: 1000,
    img: "/images/image-6.jpg",
  },
  {
    id: "regular-11",
    name: "Virtual Credit Card (Red Pocket)",
    price: 30,
    balance: 1145,
    img: "/images/image-10.png",
  },
];

export default function Page() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (open && modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  function handleOpen(product) {
    setSelected(product);
    setOpen(true);
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Header />
      <Hero />

      <section id="trial" className="mx-auto max-w-6xl px-4 pb-6">
        <div className="flex items-end justify-between mb-4">
          <h3 className="text-xl font-semibold">Tiers</h3>
          <p className="text-sm text-neutral-400">Choose what fits your needs.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-xl hover:shadow-yellow-500/10"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition" />
              
              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
                <img src={t.img} alt={`${t.name}`} className="h-full w-full object-cover" />
              </div>


              <div className="mt-4 items-center">
                <div>
                  <h4 className="text-lg font-semibold">{t.name}</h4>
                  <p className="text-sm text-neutral-400">{t.subtitle}</p>
                </div>
                <div className="mt-1">
                  <div className="text-xl font-bold text-yellow-400">${t.price.toFixed(2)}</div>
                </div>
              </div>

              {/* Balance display instead of perks */}
              <div className="mt-3 text-sm text-neutral-300">
                Balance: <span className="font-semibold">${t.balance}</span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <button
                  onClick={() => handleOpen(t)}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium bg-yellow-400 text-black hover:brightness-95 active:brightness-90 transition shadow-lg shadow-yellow-500/20"
                >
                  Pay via Binance
                </button>
              </div>
              <p className="mt-3 text-xs text-neutral-400">Instant delivery after payment*</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="regular" className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex items-end justify-between mb-4">
          <h3 className="text-xl font-semibold">Regular</h3>
          <p className="text-sm text-neutral-400">Best for ongoing use.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {REGULAR_CARDS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-6 shadow-xl hover:shadow-yellow-500/10"
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-yellow-400/0 via-yellow-400/0 to-yellow-400/5 opacity-0 group-hover:opacity-100 transition" />
              
              <div className="aspect-[16/9] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950">
                <img src={t.img} alt={`${t.name}`} className="h-full w-full object-cover" />
              </div>


              <div className="mt-4 items-center">
                <div>
                  <h4 className="text-lg font-semibold">{t.name}</h4>
                  <p className="text-sm text-neutral-400">{t.subtitle}</p>
                </div>
                <div className="mt-1">
                  <div className="text-xl font-bold text-yellow-400">${t.price.toFixed(2)}</div>
                </div>
              </div>

              {/* Balance display instead of perks */}
              <div className="mt-3 text-sm text-neutral-300">
                Balance: <span className="font-semibold text-yellow-400">${t.balance}</span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <button
                  onClick={() => handleOpen(t)}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium bg-yellow-400 text-black hover:brightness-95 active:brightness-90 transition shadow-lg shadow-yellow-500/20"
                >
                  Pay via Binance
                </button>
              </div>
              <p className="mt-3 text-xs text-neutral-400">Instant delivery after payment*</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Contact />
      <Notice />
      <Footer />

      <PaymentModal open={open} setOpen={setOpen} selected={selected} modalRef={modalRef} />
    </div>
  );
}
