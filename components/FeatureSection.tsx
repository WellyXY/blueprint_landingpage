"use client";

import { motion } from "framer-motion";
import { BrainCircuit, History, Layers, Zap } from "lucide-react";

const features = [
    {
        icon: BrainCircuit,
        title: "Persistent Memory",
        description: "Your AI character remembers every interaction, building a unique personality and context over time that never resets."
    },
    {
        icon: History,
        title: "Universal History",
        description: "Context travels with the user. Conversations started on one platform continue seamlessly on another."
    },
    {
        icon: Layers,
        title: "Cross-Platform Living",
        description: "Deploy your character to web, mobile, VR, or game engines. The identity remains consistent everywhere."
    },
    {
        icon: Zap,
        description: "Drop-in SDKs for all major platforms. Get your character running in minutes, not weeks."
    }
];

export function FeatureSection() {
    return (
        <section id="features" className="py-24 relative overflow-hidden bg-black border-t border-[#333]">
            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-mono tracking-tighter text-white">
                        More Than Just a Chatbot.<br />
                        <span className="text-[#cbcbcb]">A Living Identity.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-mono">
                        Pika provides the infrastructure for the next generation of AI characters.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl bg-[#111] border border-[#333] hover:border-white/30 transition-colors group"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white font-mono uppercase">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-mono text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
