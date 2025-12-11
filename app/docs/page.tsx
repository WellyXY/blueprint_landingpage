"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Copy, Terminal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DocsPage() {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/30">
            {/* We reuse the Navbar but maybe we want a simpler header for docs */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-[#333]">
                <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-mono text-sm uppercase tracking-wide">Back to Home</span>
                </Link>
                <span className="font-mono text-sm font-bold uppercase tracking-widest">Pika API Docs</span>
                <div className="w-5" /> {/* Spacer */}
            </nav>

            <div className="container mx-auto px-4 pt-24 pb-20 flex flex-col lg:flex-row gap-12">
                {/* Sidebar Navigation */}
                <aside className="lg:w-64 hidden lg:block sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono">Getting Started</h3>
                            <ul className="space-y-2 border-l border-[#333] ml-1">
                                <li><a href="#introduction" className="block pl-4 text-gray-400 hover:text-white text-sm transition-colors border-l border-transparent hover:border-white">Introduction</a></li>
                                <li><a href="#quick-start" className="block pl-4 text-gray-400 hover:text-white text-sm transition-colors border-l border-transparent hover:border-white">Quick Start</a></li>
                                <li><a href="#authentication" className="block pl-4 text-gray-400 hover:text-white text-sm transition-colors border-l border-transparent hover:border-white">Authentication</a></li>
                                <li><a href="#base-url" className="block pl-4 text-gray-400 hover:text-white text-sm transition-colors border-l border-transparent hover:border-white">Base URL</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-mono">Resources</h3>
                            <ul className="space-y-2 border-l border-[#333] ml-1">
                                <li><a href="#character-object" className="block pl-4 text-gray-400 hover:text-white text-sm transition-colors border-l border-transparent hover:border-white">Character Object</a></li>
                                <li><a href="#create-character" className="block pl-4 text-gray-400 hover:text-white text-sm transition-colors border-l border-transparent hover:border-white">Create Character</a></li>
                                <li><a href="#sync-memory" className="block pl-4 text-gray-400 hover:text-white text-sm transition-colors border-l border-transparent hover:border-white">Sync Memory</a></li>
                            </ul>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex-1 max-w-3xl">
                    <div id="introduction" className="mb-16">
                        <h1 className="text-4xl font-bold mb-6 font-sans tracking-tight">Introduction</h1>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            The Pika API allows you to programmatically manage AI characters, sync their memories across platforms, and integrate their personalities into your applications.
                        </p>
                        <div className="bg-[#111] border border-[#333] rounded-lg p-4 flex items-start gap-4">
                            <div className="p-2 bg-blue-500/10 rounded-md">
                                <Terminal className="w-5 h-5 text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-1">Developer Preview</h4>
                                <p className="text-gray-400 text-sm">
                                    The API is currently in closed beta. Contact us to request an API key.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="quick-start" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 font-sans">Quick Start</h2>
                        <p className="text-gray-400 mb-8">
                            Integrate Pika in 3 simple steps. We handle the memory, context, and cross-platform synchronization while you focus on the experience.
                        </p>

                        <div className="space-y-12">
                            {/* Step 1 */}
                            <div className="relative pl-8 border-l border-[#333]">
                                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                <h3 className="text-lg font-bold text-white mb-2">1. Install SDK</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Install the Pika SDK for your frontend, or import the corresponding packages for Discord or Unity.
                                </p>
                                <div className="bg-[#111] border border-[#333] rounded-md p-3 font-mono text-sm text-gray-300 inline-block">
                                    npm i @pika/sdk
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative pl-8 border-l border-[#333]">
                                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                <h3 className="text-lg font-bold text-white mb-2">2. Define character.json</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Configure your character's DNA: personality traits, tone of voice, memory strategy, appearance, and asset references.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="relative pl-8 border-l border-[#333]">
                                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                <h3 className="text-lg font-bold text-white mb-2">3. Initialize & Embed</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Initialize the client with your API Key or Webhook to open the persistent memory stream. Then embed via Web Widget, Discord Bot, or Unity Prefab—all sharing the same identity.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="authentication" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 font-sans">Authentication</h2>
                        <p className="text-gray-400 mb-4">
                            Authenticate your requests by including your API key in the <code className="text-red-400 bg-red-900/10 px-1 py-0.5 rounded font-mono text-sm">Authorization</code> header.
                        </p>
                        <div className="bg-[#111] border border-[#333] rounded-lg overflow-hidden">
                            <div className="px-4 py-2 border-b border-[#333] bg-[#1a1a1a] flex justify-between items-center">
                                <span className="text-xs text-gray-500 font-mono">Bash</span>
                                <button onClick={() => copyToClipboard('Authorization: Bearer YOUR_API_KEY')} className="text-gray-500 hover:text-white">
                                    <Copy className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="p-4 overflow-x-auto">
                                <code className="font-mono text-sm text-green-400">
                                    Authorization: Bearer pk_live_51M...
                                </code>
                            </div>
                        </div>
                    </div>

                    <div id="base-url" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 font-sans">Base URL</h2>
                        <p className="text-gray-400 mb-4">
                            All API requests should be made to:
                        </p>
                        <div className="bg-[#111] border border-[#333] rounded-lg p-4 font-mono text-sm text-gray-300">
                            https://api.pika.ai/v1
                        </div>
                    </div>

                    <div id="character-object" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 font-sans">Character Object</h2>
                        <p className="text-gray-400 mb-6">
                            The core resource is the Character. It defines the identity, memory settings, and appearance.
                        </p>
                        <div className="bg-[#111] border border-[#333] rounded-lg overflow-hidden">
                            <div className="px-4 py-2 border-b border-[#333] bg-[#1a1a1a]">
                                <span className="text-xs text-gray-500 font-mono">JSON Representation</span>
                            </div>
                            <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300">
{`{
  "id": "char_123456789",
  "name": "Kai",
  "blueprint": {
    "personality": {
      "traits": ["sarcastic", "loyal"],
      "voice": "cyberpunk_slang_v2"
    },
    "memory": {
      "persistence": "permanent",
      "context_window": 8192
    }
  },
  "created_at": "2023-11-14T10:00:00Z"
}`}
                            </pre>
                        </div>
                    </div>

                    <div id="create-character" className="mb-16">
                        <h2 className="text-2xl font-bold mb-6 font-sans">Create Character</h2>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded font-mono">POST</span>
                            <code className="font-mono text-gray-300">/characters</code>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Create a new character blueprint.
                        </p>
                        
                        <div className="bg-[#111] border border-[#333] rounded-lg overflow-hidden mb-6">
                            <div className="px-4 py-2 border-b border-[#333] bg-[#1a1a1a]">
                                <span className="text-xs text-gray-500 font-mono">Request Example</span>
                            </div>
                            <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300">
{`curl -X POST https://api.pika.ai/v1/characters \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Kai",
    "blueprint": {
      "personality": { "traits": ["sarcastic"] }
    }
  }'`}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

