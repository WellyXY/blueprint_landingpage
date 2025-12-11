"use client";

import { Check } from "lucide-react";

export function DocumentationSection() {
    return (
        <section id="docs" className="py-24 bg-[#050505]">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-sans tracking-tighter">
                            Simple Integration.<br />
                            <span className="text-[#cbcbcb]">Powerful Identity.</span>
                        </h2>
                        <p className="text-gray-400 text-lg font-mono mb-8">
                            Define your character's DNA in a simple JSON structure. Pika handles the memory, context, and cross-platform synchronization.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Persistent Memory Stream",
                                "Cross-Platform State Sync",
                                "Dynamic Personality Engine",
                                "Universal Asset Reference"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-gray-300 font-mono text-sm uppercase tracking-wide">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="mt-10 px-8 py-4 text-sm font-bold text-white bg-[#1a1a1a] border border-[#333] hover:bg-[#2a2a2a] rounded-lg transition-all font-mono uppercase tracking-wide">
                            Read Full Documentation
                        </button>
                    </div>

                    <div className="lg:w-1/2 w-full">
                        <div className="bg-[#111] border border-[#333] rounded-2xl overflow-hidden shadow-2xl">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#333] bg-[#1a1a1a]">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                                <span className="ml-2 text-xs text-gray-500 font-mono">character.json</span>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <pre className="font-mono text-sm leading-relaxed">
                                    <code className="text-gray-300">
                                        {`{
  "id": "char_123456789",
  "name": "Kai",
  "version": "1.0.0",
  "blueprint": {
    "personality": {
      "traits": ["sarcastic", "loyal", "street-smart"],
      "voice": "cyberpunk_slang_v2"
    },
    "memory": {
      "persistence": "permanent",
      "shared_context": true
    },
    "appearance": {
      "avatar_url": "assets/kai_avatar.png",
      "model_ref": "models/kai_v1.glb"
    }
  },
  "integrations": {
    "discord": { "enabled": true },
    "unity": { "prefab": "KaiNPC" },
    "web": { "widget": true }
  }
}`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
