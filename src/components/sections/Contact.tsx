"use client";

import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Contact() {
  const [input, setInput] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contact" className="section-container">
      <div className="content-shield opacity-80" />
      <div className="flex flex-col mb-16 items-center text-center w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-gradient-amber"
        >
          TERMINAL_ACCESS
        </motion.h2>
        <p className="mt-4 mono-all-caps max-w-md">
          Secure channel for professional inquiries & architectural discussions.
        </p>
      </div>

      <div className="glass-panel w-full max-w-4xl rounded-lg overflow-hidden border-line-subtle shadow-2xl group hover:border-accent-glow/20 transition-all duration-500">
        {/* Terminal Header */}
        <div className="bg-bg-void/90 px-5 py-3 border-b border-line-subtle flex items-center justify-between">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/30" />
            <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/30" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/30" />
          </div>
          <div className="mono-all-caps text-[9px] opacity-40">
            synapse-ssh — 80x24
          </div>
          <div className="w-10" />
        </div>

        {/* Terminal Body */}
        <div className="p-8 md:p-10 font-mono text-sm md:text-base min-h-[400px] bg-bg-void/60 flex flex-col">
          <div className="text-text-muted mb-8 leading-relaxed opacity-60">
            Last login: {mounted ? new Date().toUTCString() : "Initializing..."} on synapse_core
            <br />
            Welcome to Rohan's secure communications port.
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <div className="flex flex-wrap gap-x-3 text-accent-glow">
              <span className="font-bold">rohan@synapse:~$</span>
              <span className="text-text-primary">./send_message.sh --contact</span>
            </div>
            
            <div className="text-accent-primary/60 italic text-xs mb-6 px-4 py-2 border-l-2 border-accent-primary/20 bg-accent-primary/5">
              [SYSTEM]: Awaiting user input. Type message and hit Enter.
            </div>

            <div className="flex gap-3 items-start group/input">
              <span className="text-accent-glow font-bold mt-1">root#</span>
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Initialize message sequence..."
                className="bg-transparent border-none outline-none text-text-primary flex-1 placeholder:text-line-subtle resize-none min-h-[150px] focus:ring-0"
              />
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-line-subtle flex justify-between items-center">
            <div className="mono-all-caps text-[9px] opacity-30">
              Encryption: AES-256-GCM
            </div>
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-accent-glow animate-pulse" />
               <span className="mono-all-caps text-[9px]">Awaiting_Input</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
