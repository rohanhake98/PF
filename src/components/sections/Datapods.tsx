"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/data/resume";
import { ExternalLink, Terminal } from "lucide-react";

export default function Datapods() {
  return (
    <section id="projects" className="section-container">
      <div className="content-shield opacity-60" />
      <div className="flex flex-col mb-20 w-full text-center items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-gradient-amber"
        >
          DATA_PODS
        </motion.h2>
        <p className="mt-4 mono-all-caps max-w-md">
          Encapsulated system architectures & technical case studies.
        </p>
      </div>

      <div className="card-grid">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-12 group relative overflow-hidden flex flex-col h-full hover:border-accent-glow/30 transition-all duration-500"
          >
            {/* Interactive Glow Affordance */}
            <div className="absolute inset-0 bg-accent-glow/0 group-hover:bg-accent-glow/[0.02] transition-colors pointer-events-none" />
            
            <div className="flex justify-between items-start mb-10 relative z-10">
              <div className="p-4 bg-bg-void/50 border border-line-subtle rounded-sm group-hover:border-accent-glow/50 transition-colors">
                <Terminal className="w-6 h-6 text-accent-glow" />
              </div>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-primary transition-all p-2 hover:scale-110"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <h3 className="text-3xl md:text-4xl font-black mb-4 group-hover:text-accent-glow transition-colors relative z-10 leading-tight">
              {project.title}
            </h3>
            
            <p className="text-sm md:text-base text-text-muted leading-relaxed mb-10 relative z-10 flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-12 relative z-10">
              {project.stack.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-white/5 text-[10px] font-mono tracking-widest uppercase text-text-primary border border-white/10 group-hover:border-accent-glow/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-10 border-t border-line-subtle relative z-10 mt-auto">
              <span className="mono-all-caps text-accent-primary mb-3 block">
                Deployment_Metrics
              </span>
              <p className="text-xs md:text-sm text-text-muted font-bold italic opacity-90 uppercase tracking-wide">
                {project.metrics}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
