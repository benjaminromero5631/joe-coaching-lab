"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import VideoModal from "@/components/VideoModal";

const VIDEO_URL =
  "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0";
const LS_KEY = "jcl_lead";

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as const, delay },
  };
}

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoEmbedded, setVideoEmbedded] = useState(false);

  // Si ya dejó datos antes, mostramos el video directamente al hacer clic
  const hasLead = () => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem(LS_KEY);
  };

  // Comprobar en mount por si el usuario ya rellenó el form en otra visita
  useEffect(() => {
    // No auto-embed: el video solo se muestra tras hacer clic
  }, []);

  const handleVideoClick = () => {
    if (hasLead()) {
      setVideoEmbedded(true);
    } else {
      setModalOpen(true);
    }
  };

  const handleModalSuccess = () => {
    setModalOpen(false);
    setVideoEmbedded(true);
  };

  return (
    <section className="relative bg-[#0a0a0a] pt-20 pb-14 px-4 overflow-hidden">
      {/* Glow de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] bg-[#00B4D8]/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto text-center">
        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          className="inline-flex items-center gap-2 border border-[#00B4D8]/30 bg-[#00B4D8]/5 text-[#90E0EF] text-[10px] font-bold tracking-[0.1em] uppercase px-4 py-2 rounded-full mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] flex-shrink-0 animate-pulse" />
          Si estás listo/a para dejar las excusas y seguir un plan real, este es tu lugar
        </motion.div>

        {/* Título */}
        <motion.h1
          {...fadeUp(0.08)}
          className="text-[2.15rem] sm:text-5xl font-extrabold leading-[1.12] tracking-tight mb-4"
        >
          Entrena con estrategia,{" "}
          <span className="text-[#00B4D8]">deja el estancamiento atrás</span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          {...fadeUp(0.16)}
          className="text-base sm:text-xl text-white/90 leading-relaxed mb-8"
        >
          Pierde grasa, gana músculo y construye un cuerpo que realmente refleje
          tu esfuerzo.
        </motion.p>

        {/* Video */}
        <motion.div {...fadeUp(0.24)} className="mb-8">
          {videoEmbedded ? (
            /* Embed de YouTube una vez desbloqueado */
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/40">
              <iframe
                src={VIDEO_URL}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Video Joe Coaching Lab"
                className="absolute inset-0 w-full h-full border-none"
              />
            </div>
          ) : (
            /* Placeholder clickable */
            <button
              type="button"
              onClick={handleVideoClick}
              className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#111827] border border-white/8 shadow-2xl shadow-black/40 cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8]"
              aria-label="Ver el video"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-[#00B4D8]/15 border border-[#00B4D8]/30 flex items-center justify-center group-hover:bg-[#00B4D8]/28 group-hover:border-[#00B4D8]/60 transition-colors duration-200">
                  <svg
                    className="w-7 h-7 text-[#00B4D8] ml-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-white/30 text-xs tracking-wide">
                  Tu video aquí
                </p>
              </div>
            </button>
          )}
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.32)} className="flex flex-col items-center gap-4">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0077B6] active:bg-[#005f8c] text-[#0a0a0a] font-bold text-sm px-7 py-3 rounded-full transition-colors duration-200 shadow-lg shadow-[#00B4D8]/25"
          >
            Quiero mi plan personalizado
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          {/* Sello de marca minimal */}
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/18 select-none">
            Joe Coaching Lab
          </p>
        </motion.div>
      </div>

      {/* Gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />

      {/* Modal de captura de leads */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={handleModalSuccess}
      />
    </section>
  );
}
