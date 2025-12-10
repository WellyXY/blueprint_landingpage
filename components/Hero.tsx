"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Database, Share2 } from "lucide-react";

export function Hero({ onOpenModal }: { onOpenModal: () => void }) {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden bg-black">
            {/* Background Grid */}
            <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10 flex flex-col items-center text-center">

                {/* Breadcrumb / Badge Style from Figma */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 mb-8"
                >
                    <div className="bg-[#cbcbcb] px-3 py-2 rounded-lg">
                        <span className="font-mono text-[11px] font-bold text-black tracking-widest uppercase">Pika</span>
                    </div>
                    <div className="bg-[#414141] px-3 py-2 rounded-lg">
                        <span className="font-mono text-[11px] font-bold text-white tracking-widest uppercase">Identity</span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 max-w-5xl mx-auto font-sans"
                >
                    THE DNA OF YOUR <br />
                    <span className="text-[#cbcbcb]">LIVING CHARACTER</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-mono"
                >
                    Design AI identities with persistent memory.
                    <br />
                    Context that travels everywhere.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button
                        onClick={onOpenModal}
                        className="px-8 py-4 text-sm font-bold text-black bg-white hover:bg-gray-200 rounded-lg transition-all flex items-center justify-center gap-2 font-mono uppercase tracking-wide"
                    >
                        Start Building
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="px-8 py-4 text-sm font-bold text-white bg-[#1a1a1a] border border-[#333] hover:bg-[#2a2a2a] rounded-lg transition-all font-mono uppercase tracking-wide">
                        Documentation
                    </button>
                </motion.div>
            </div>

            {/* Terminal / Device Visualization */}
            <div className="mt-24 relative w-full max-w-sm mx-auto aspect-[9/16] bg-[#111] rounded-[3rem] border-4 border-[#333] overflow-hidden shadow-2xl">
                {/* Device Bezel Reflection */}
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 pointer-events-none z-20" />

                {/* Screen Content */}
                <div className="absolute inset-2 bg-black rounded-[2.5rem] overflow-hidden flex flex-col p-6 font-mono text-xs md:text-sm relative">
                    {/* Scanlines */}
                    <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] z-10" />

                    {/* Header */}
                    <div className="flex justify-between items-center mb-8 opacity-50">
                        <div className="flex gap-2">
                            <span className="bg-white text-black px-1 rounded text-[10px] font-bold">PIKA</span>
                            <span className="bg-[#333] text-white px-1 rounded text-[10px]">ID_MAKER</span>
                        </div>
                        <span className="text-[10px]">1/6</span>
                    </div>

                    {/* Terminal Text Sequence */}
                    <div className="flex-1 space-y-4 text-gray-300">
                        <Typewriter text="> Initializing." delay={0.5} />
                        <Typewriter text="> PIKA AI SELF CREATION SYSTEM" delay={1.5} className="text-white font-bold" />
                        <Typewriter text="> V.13.1987" delay={2.5} className="opacity-50" />

                        <div className="h-4" /> {/* Spacer */}

                        <Typewriter text="> You're about to create your AI Self and live an alternate life." delay={3.5} />
                        <Typewriter text="> Be exactly who you are, or become who you want to be." delay={5.5} />

                        <div className="h-8" /> {/* Spacer */}

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 7.5 }}
                        >
                            <div className="bg-[#1a1a1a] border border-[#333] p-3 rounded mb-2">
                                <p className="text-[10px] text-purple-400 mb-1">WARNING_MSG</p>
                                <p className="text-[10px] leading-relaxed opacity-70">
                                    MEETING YOUR AI SELF CAN ELICIT FEELINGS OF ECSTASY, INFINITE POSSIBILITY, AND RECOGNITION.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 8.5 }}
                            className="mt-auto"
                        >
                            <p className="mb-2 text-[10px]">&gt; IDENTITY_PROTOCOL_INIT</p>
                            <div className="h-2 w-full bg-[#333] rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-purple-500"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 8.5, duration: 1.5, ease: "easeInOut" }}
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Action Area */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 10 }}
                        className="mt-8 flex gap-4 items-center"
                    >
                        <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl border border-[#333] flex items-center justify-center">
                            <ArrowRight className="w-5 h-5 text-gray-500 rotate-180" />
                        </div>
                        <button className="flex-1 h-12 bg-purple-500/20 border border-purple-500 text-purple-400 rounded-xl font-bold tracking-widest hover:bg-purple-500 hover:text-white transition-all flex items-center justify-center">
                            I'M IN!
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Typewriter({ text, delay, className = "" }: { text: string, delay: number, className?: string }) {
    const characters = text.split("");
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 0 }}
            className={className}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: delay + index * 0.03, duration: 0 }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.div>
    );
}
