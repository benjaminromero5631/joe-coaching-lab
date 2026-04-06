"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-5 z-50"
        >
          <a
            href="#contacto"
            className="relative flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0077B6] text-[#0a0a0a] font-bold text-sm px-5 py-3.5 rounded-full shadow-xl shadow-[#00B4D8]/30 transition-colors duration-200"
            aria-label="Contactar con Joe"
          >
            {/* Pulso */}
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#90E0EF] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00B4D8]" />
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Contáctame
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
