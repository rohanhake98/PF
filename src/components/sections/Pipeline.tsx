"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";

export default function Pipeline() {
  return (
    <section id="about" className="py-24 px-8 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl font-black tracking-tighter text-gradient-amber sticky top-24"
          >
            THE PIPELINE
          </motion.h2>
          <p className="mt-4 text-text-muted font-mono text-[10px] uppercase tracking-widest leading-relaxed">
            Sequential progression of experience, specialized in high-volume data and intelligent systems.
          </p>
        </div>

        <div className="md:w-2/3 relative">
          {/* Central Line */}
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-line-subtle hidden md:block" />

          <div className="flex flex-col gap-16">
            {resumeData.experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative md:pl-12"
              >
                {/* Node */}
                <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-accent-glow hidden md:block border-4 border-bg-void shadow-[0_0_15px_rgba(229,169,61,0.5)]" />
                
                <span className="font-mono text-[10px] text-accent-primary tracking-[0.3em] uppercase mb-2 block">
                  {exp.period}
                </span>
                <h3 className="text-xl font-bold tracking-tight mb-1">{exp.role}</h3>
                <p className="text-text-muted text-sm font-medium mb-4 italic">@ {exp.company} — {exp.location}</p>
                
                <ul className="space-y-3">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="text-xs text-text-muted leading-relaxed flex gap-3">
                      <span className="text-accent-glow font-mono mt-1">↳</span>
                      {item}
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
