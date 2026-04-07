"use client";

import { motion } from "framer-motion";

interface Paso {
  numero: string;
  titulo: string;
  descripcion: string;
}

const pasos: Paso[] = [
  {
    numero: "01",
    titulo: "Primer acercamiento, ¡conozcámonos!",
    descripcion:
      "Analizamos tu punto de partida: historial, hábitos, objetivos y estilo de vida. Sin este paso, cualquier plan es genérico.",
  },
  {
    numero: "02",
    titulo: "Estructurar planificación adaptada a ti y tu estilo de vida",
    descripcion:
      "Diseñamos un programa de entrenamiento y nutrición hecho a tu medida, que encaja con tu rutina, tus tiempos y lo que realmente puedes sostener.",
  },
  {
    numero: "03",
    titulo: "Empezamos a construir tu proceso físico y mental",
    descripcion:
      "Ponemos el plan en acción trabajando tanto el cuerpo como la mentalidad: hábitos, disciplina y constancia son la base del cambio real.",
  },
  {
    numero: "04",
    titulo: "Proceso activo",
    descripcion:
      "Ejecutas el plan y vamos optimizando semana a semana en base a tu rendimiento y resultados.",
  },
];

export default function Plan() {
  return (
    <section id="plan" className="py-16 bg-[#0a0a0a] px-4">
      <div className="max-w-lg mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mb-10"
        >
          <p className="text-[#00B4D8] text-[11px] font-bold tracking-widest uppercase mb-3">
            Método Joe coaching lab
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Plan que
            <br />
            <span className="text-[#00B4D8]">aplicaremos</span>
          </h2>
        </motion.div>

        {/* Timeline de pasos */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-[#00B4D8]/40 via-[#00B4D8]/15 to-transparent" />

          <div className="space-y-0">
            {pasos.map((paso, i) => (
              <motion.div
                key={paso.numero}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  ease: [0.25, 0.1, 0.25, 1] as const,
                  delay: i * 0.07,
                }}
                className="relative flex gap-4 pb-8 last:pb-0"
              >
                {/* Dot */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#0a0a0a] border-2 border-[#00B4D8]/50 flex items-center justify-center z-10">
                  <span className="text-[#00B4D8] text-[11px] font-extrabold">
                    {paso.numero}
                  </span>
                </div>

                {/* Contenido */}
                <div className="pt-1.5 pb-2">
                  <h3 className="text-white font-bold text-[15px] mb-1">
                    {paso.titulo}
                  </h3>
                  <p className="text-white/50 text-[13px] leading-relaxed">
                    {paso.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.35 }}
          className="mt-10"
        >
          <a
            href="#contacto"
            className="flex w-full items-center justify-center gap-2 bg-[#00B4D8] hover:bg-[#0077B6] active:bg-[#005f8c] text-[#0a0a0a] font-bold text-sm py-3.5 rounded-full transition-colors duration-200 shadow-lg shadow-[#00B4D8]/20"
          >
            Empezar ahora
          </a>
        </motion.div>

        {/* Separador de marca */}
        <div className="mt-14 flex items-center gap-4">
          <div className="flex-1 h-px bg-white/6" />
          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/18 select-none whitespace-nowrap">
            Joe Coaching Lab
          </span>
          <div className="flex-1 h-px bg-white/6" />
        </div>
      </div>
    </section>
  );
}
