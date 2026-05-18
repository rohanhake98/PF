"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export default function Pipeline() {
  return (
    <section id="about" className="section-container">
      <div className="content-shield opacity-80" />
      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-black text-gradient-amber md:sticky md:top-32"
          >
            THE PIPELINE
          </motion.h2>
          <p className="mt-6 mono-all-caps leading-relaxed max-w-xs">
            Sequential progression of experience, specialized in high-volume data and intelligent systems.
          </p>
        </div>

        <div className="md:w-2/3 relative mt-12 md:mt-0">
          {/* Central Line */}
          <div className="absolute left-4 md:left-0 top-0 bottom-0 w-[1px] bg-line-subtle" />

          <div className="flex flex-col gap-20">
            {resumeData.experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-12"
              >
                {/* Node */}
                <div className="absolute left-[-4px] md:left-[-4px] top-2 w-2 h-2 rounded-full bg-accent-glow border-4 border-bg-void shadow-[0_0_20px_rgba(229,169,61,0.6)]" />
                
                <span className="mono-all-caps text-accent-primary mb-3 block">
                  {exp.period}
                </span>
                <h3 className="text-2xl md:text-3xl font-black mb-1">{exp.role}</h3>
                <p className="text-text-muted text-xs md:text-sm font-bold mb-6 tracking-wide opacity-90 uppercase">@ {exp.company} — {exp.location}</p>
                
                <ul className="space-y-5">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-sm md:text-base text-text-muted leading-relaxed flex gap-4">
                      <span className="text-accent-glow font-mono mt-1 text-[10px] opacity-50">0{i+1}</span>
                      <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
