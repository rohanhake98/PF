"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, GitBranch, Mail } from "lucide-react";

export default function FloatingCTA() {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="glass-panel px-6 py-3 rounded-full flex items-center gap-6 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-4 border-r border-line-subtle pr-6">
          <a 
            href="/resume.pdf" // User to provide actual path
            target="_blank"
            className="flex items-center gap-2 text-[10px] mono-all-caps text-text-primary hover:text-accent-glow transition-colors"
          >
            <Download className="w-3 h-3" />
            Resume
          </a>
          <a 
            href="#contact"
            className="flex items-center gap-2 text-[10px] mono-all-caps text-accent-primary hover:text-accent-glow transition-colors"
          >
            <Mail className="w-3 h-3" />
            Hire_Me
          </a>
        </div>
        
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/rohan-hake" target="_blank" className="text-text-muted hover:text-text-primary transition-colors">
            <ExternalLink className="w-4 h-4" />
          </a>
          <a href="https://github.com/rohanhake98" target="_blank" className="text-text-muted hover:text-text-primary transition-colors">
            <GitBranch className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
