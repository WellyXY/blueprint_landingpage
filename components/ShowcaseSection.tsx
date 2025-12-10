"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { characters } from "@/lib/data";

export function ShowcaseSection() {
    return (
        <section id="showcase" className="py-24 bg-black relative">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-sans tracking-tighter">
                        Living Characters.<br />
                        <span className="text-[#cbcbcb]">Real Interactions.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-mono">
                        Explore how Pika identities manifest across different worlds.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {characters.map((char) => (
                        <Link href={`/character/${char.id}`} key={char.id}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-[#111] border border-[#333] rounded-2xl p-6 cursor-pointer hover:border-white/30 transition-all group h-full flex flex-col"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <img src={char.avatar} alt={char.name} className="w-12 h-12 rounded-full bg-white/10 object-cover" />
                                    <div>
                                        <h3 className="text-xl font-bold text-white font-mono uppercase">{char.name}</h3>
                                        <p className="text-xs text-gray-500 font-mono uppercase tracking-widest">{char.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm line-clamp-3 mb-4 font-mono flex-grow whitespace-pre-line">
                                    {char.bio}
                                </p>
                                <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity mt-auto">
                                    View Profile <ArrowRight className="w-3 h-3" />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
