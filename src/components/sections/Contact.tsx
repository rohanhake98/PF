"use client";

import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [input, setInput] = useState("");

  return (
    <section id="contact" className="py-24 px-8 max-w-4xl mx-auto">
      <div className="flex flex-col mb-16 items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black tracking-tighter text-gradient-amber"
        >
          TERMINAL_ACCESS
        </motion.h2>
        <p className="mt-2 text-text-muted font-mono text-[10px] uppercase tracking-[0.3em]">
          Secure channel for professional inquiries & architectural discussions.
        </p>
      </div>

      <div className="glass-panel rounded-lg overflow-hidden border-line-subtle shadow-2xl">
        {/* Terminal Header */}
        <div className="bg-bg-void/80 px-4 py-2 border-b border-line-subtle flex items-center justify-between">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
          </div>
          <div className="font-mono text-[9px] text-text-muted tracking-widest uppercase">
            synapse-ssh — 80x24
          </div>
          <div className="w-10" />
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-xs md:text-sm min-h-[300px] bg-bg-void/40">
          <div className="text-text-muted mb-4 leading-relaxed">
            Last login: {new Date().toUTCString()} on synapse_core
            <br />
            Welcome to Rohan's secure communications port.
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex gap-2 text-accent-glow">
              <span>rohan@synapse:~$</span>
              <span className="text-text-primary">./send_message.sh --contact</span>
            </div>
            
            <div className="text-text-muted italic mb-4">
              [SYSTEM]: Awaiting user input... (Connect Supabase in Phase 5)
            </div>

            <div className="flex gap-2 items-center">
              <span className="text-accent-primary">root#</span>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
                className="bg-transparent border-none outline-none text-text-primary flex-1 placeholder:text-line-subtle"
                autoFocus
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
