"use client";

import { motion } from "framer-motion";

interface Testimonio {
  iniciales: string;
  color: string;
  nombre: string;
  detalle: string;
  texto: string;
  etiqueta: string;
  /*
    Para usar imagen real, descomenta el campo `imagen` y usa:
    import Image from "next/image";
    <Image src={t.imagen} alt={t.nombre} fill className="object-cover" />
  */
  // imagen?: string;
}

const testimonios: Testimonio[] = [
  {
    iniciales: "MD",
    color: "#00B4D8",
    nombre: "Marcos D.",
    detalle: "28 años · Volumen muscular",
    texto:
      "Llevaba 2 años en el gym sin ver cambios reales. Con Joe entendí que el problema no era el esfuerzo, sino el método. En 12 semanas gané más músculo que en todo ese tiempo.",
    etiqueta: "+8 kg músculo",
  },
  {
    iniciales: "LG",
    color: "#0077B6",
    nombre: "Laura G.",
    detalle: "24 años · Recomposición corporal",
    texto:
      "Siempre pensé que comer bien era complicado. Joe me mostró que no tiene por qué serlo. Bajé grasa y gané tono sin pasar hambre. El seguimiento semanal es lo que marca la diferencia.",
    etiqueta: "−6 kg grasa",
  },
  {
    iniciales: "CR",
    color: "#48CAE4",
    nombre: "Carlos R.",
    detalle: "31 años · Pérdida de grasa",
    texto:
      "Intenté mil dietas y nada funcionaba a largo plazo. El plan de Joe es sostenible, no una tortura. Cuatro meses después y sigo avanzando sin rebote.",
    etiqueta: "−11 kg en 4 meses",
  },
];

export default function CasoExito() {
  return (
    <section id="exito" className="py-16 bg-[#0d0d0d] px-4">
      <div className="max-w-lg mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const }}
          className="mb-8"
        >
          <p className="text-[#00B4D8] text-[11px] font-bold tracking-widest uppercase mb-3">
            Resultados reales
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Lo que dicen
            <br />
            <span className="text-[#00B4D8]">mis clientes</span>
          </h2>
        </motion.div>

        {/* Tarjetas */}
        <div className="space-y-4">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.nombre}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.45,
                ease: [0.25, 0.1, 0.25, 1] as const,
                delay: i * 0.08,
              }}
              className="relative rounded-2xl border border-white/8 bg-white/[0.03] p-5 overflow-hidden"
            >
              {/* Acento superior */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${t.color}60, transparent)`,
                }}
              />

              {/* Cabecera: avatar + nombre */}
              <div className="flex items-center gap-3 mb-4">
                {/*
                  Para imagen real: reemplaza este div por:
                  <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={t.imagen} alt={t.nombre} fill className="object-cover" />
                  </div>
                */}
                <div
                  className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-[#0a0a0a] font-extrabold text-sm"
                  style={{ backgroundColor: t.color }}
                >
                  {t.iniciales}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.nombre}</p>
                  <p className="text-white/40 text-[12px]">{t.detalle}</p>
                </div>
                <span
                  className="ml-auto text-[11px] font-bold px-2.5 py-1 rounded-full border flex-shrink-0"
                  style={{
                    color: t.color,
                    borderColor: `${t.color}40`,
                    backgroundColor: `${t.color}10`,
                  }}
                >
                  {t.etiqueta}
                </span>
              </div>

              {/* Texto testimonio */}
              <blockquote className="text-white/65 text-[13.5px] leading-relaxed italic">
                &ldquo;{t.texto}&rdquo;
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
