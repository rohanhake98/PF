"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ExternalLink, Terminal } from "lucide-react";

export default function Datapods() {
  return (
    <section id="projects" className="py-24 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black tracking-tighter text-gradient-amber"
        >
          DATA_PODS
        </motion.h2>
        <p className="mt-2 text-text-muted font-mono text-[10px] uppercase tracking-[0.3em]">
          Encapsulated system architectures & technical case studies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            className="glass-panel p-8 group relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-glow/5 blur-[60px] rounded-full group-hover:bg-accent-glow/10 transition-colors" />
            
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-bg-void/50 border border-line-subtle rounded-sm">
                <Terminal className="w-5 h-5 text-accent-glow" />
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-primary transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <h3 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-accent-glow transition-colors">
              {project.title}
            </h3>
            
            <p className="text-sm text-text-muted leading-relaxed mb-6 h-12 overflow-hidden">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 bg-line-subtle text-[8px] font-mono tracking-widest uppercase text-text-primary rounded-[2px]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-6 border-t border-line-subtle">
              <span className="font-mono text-[9px] text-accent-primary tracking-[0.2em] uppercase block mb-2">
                Performance_Metrics
              </span>
              <p className="text-[11px] text-text-muted font-medium italic">
                {project.metrics}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
