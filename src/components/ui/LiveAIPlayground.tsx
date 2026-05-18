"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, BrainCircuit } from "lucide-react";

export default function LiveAIPlayground() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isThinking) return;

    setIsThinking(true);
    setResponse("");
    
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: query }),
      });

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          setResponse((prev) => prev + chunk);
        }
      }
    } catch (err) {
      setResponse("System error: Connection to Digital Twin lost.");
    } finally {
      setIsThinking(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [response]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 relative z-20 px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel rounded-xl overflow-hidden border-line-subtle"
      >
        {/* Header */}
        <div className="bg-bg-void/50 px-4 py-3 border-b border-line-subtle flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-4 h-4 text-accent-glow" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-text-muted">
              Digital_Twin_Inference_v1.0
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className={`w-1.5 h-1.5 rounded-full ${isThinking ? 'bg-accent-glow animate-pulse' : 'bg-green-500'}`} />
            <span className="font-mono text-[8px] text-text-muted uppercase tracking-tighter">
              {isThinking ? 'Thinking' : 'Online'}
            </span>
          </div>
        </div>

        {/* Quick Action Chips */}
        <div className="px-4 py-2 flex gap-2 overflow-x-auto border-b border-line-subtle bg-bg-void/10 scrollbar-hide">
          {["Stack", "Experience", "Projects"].map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => setQuery(`Tell me about your ${label.toLowerCase()}`)}
              className="px-2 py-0.5 rounded-[2px] border border-line-subtle text-[8px] mono-all-caps text-text-muted hover:border-accent-glow hover:text-accent-glow transition-all whitespace-nowrap"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Response Area */}
        <div 
          ref={scrollRef}
          className="p-6 h-40 overflow-y-auto font-mono text-xs text-text-primary bg-bg-void/20 scrollbar-hide"
        >
          {response ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <span className="text-accent-glow mr-2">●</span>
              {response}
              {isThinking && <span className="inline-block w-1.5 h-4 bg-accent-glow ml-1 animate-pulse" />}
            </motion.div>
          ) : (
            <span className="text-text-muted italic">Ask about Rohan's MERN stack, AI projects, or ETL pipelines...</span>
          )}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 bg-bg-void/40 border-t border-line-subtle flex gap-4">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="What is Rohan's tech stack?"
            className="bg-transparent border-none outline-none text-xs text-text-primary flex-1 placeholder:text-line-subtle font-mono"
            disabled={isThinking}
          />
          <button 
            type="submit"
            disabled={isThinking || !query.trim()}
            className="p-2 rounded-md hover:bg-line-subtle transition-colors disabled:opacity-50"
          >
            <Send className="w-4 h-4 text-accent-glow" />
          </button>
        </form>
      </motion.div>
      
      <p className="mt-3 text-center font-mono text-[8px] text-text-muted tracking-[0.2em] uppercase">
        Live RAG Simulation — Powered by Synapse Core
      </p>
    </div>
  );
}
