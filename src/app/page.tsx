"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Pipeline from "@/components/sections/Pipeline";
import Datapods from "@/components/sections/Datapods";
import Contact from "@/components/sections/Contact";
import LiveAIPlayground from "@/components/ui/LiveAIPlayground";
import Scene from "@/components/3d/Scene";
import FloatingCTA from "@/components/ui/FloatingCTA";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial system check
    const timer = setTimeout(() => {
      setIsLoading(false);
      
      // Initialize Scroll Animations after loading
      ScrollTrigger.create({
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          // Progress-based logic can be added here
        }
      });
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-bg-void text-text-primary overflow-hidden font-sans">
      {/* Background Layers */}
      <div className="fixed inset-0 z-0 industrial-grid opacity-20 pointer-events-none" />
      <div className="scanline pointer-events-none" />
      
      {/* Noise Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-void"
          >
            <div className="w-64 h-[1px] bg-line-subtle relative overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-0 bg-accent-glow"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase"
            >
              Initializing Synapse.OS
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D Canvas Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene />
      </div>

      {/* UI Content Layer */}
      <div className="relative z-10">
        <nav className="p-8 flex justify-between items-center mix-blend-difference">
          <div className="mono-all-caps">
            [ Rohan_Hake / 2026 ]
          </div>
          <div className="flex gap-8 mono-all-caps">
            <a href="#about" className="hover:text-accent-glow transition-colors">Architecture</a>
            <a href="#projects" className="hover:text-accent-glow transition-colors">Data_Pods</a>
            <a href="#contact" className="hover:text-accent-glow transition-colors">Terminal</a>
          </div>
        </nav>

        <section className="h-screen flex flex-col items-center justify-center px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoading ? 0 : 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-7xl md:text-9xl font-black mb-4 text-gradient-amber">
              SYNAPSE
            </h1>
            <p className="max-w-2xl mx-auto mono-all-caps tracking-widest leading-relaxed">
              Full Stack MERN Developer & AI Engineer
              <br />
              <span className="text-line-subtle normal-case tracking-normal">Building the future of predictive systems and intelligent UIs.</span>
            </p>
          </motion.div>

          <LiveAIPlayground />

          {/* CTA / Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-accent-glow to-transparent" />
            <span className="font-mono text-[8px] tracking-[0.4em] text-text-muted uppercase">
              Scroll to explore
            </span>
          </motion.div>
        </section>

        <Pipeline />
        <Datapods />
        <Contact />

        <FloatingCTA />
      </div>
    </main>
  );
}
