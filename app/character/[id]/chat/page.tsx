"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Send, MoreHorizontal, Sparkles, User } from "lucide-react";
import { characters } from "@/lib/data";

interface Message {
    role: "user" | "assistant";
    content: string;
}

export default function ChatInterface() {
    const params = useParams();
    const router = useRouter();
    const character = characters.find((c) => c.id === params.id);
    
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    if (!character) {
        return <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center font-mono">Character not found</div>;
    }

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = { role: "user" as const, content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage],
                    characterId: character.id,
                }),
            });

            const data = await response.json();
            
            if (data.message) {
                setMessages((prev) => [...prev, { role: "assistant", content: data.message.content }]);
            }
        } catch (error) {
            console.error("Chat error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen bg-[#050505] text-white font-sans overflow-hidden flex flex-col">
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-10 blur-[100px] scale-110 grayscale"
                    style={{ backgroundImage: `url(${character.avatar})` }}
                />
                <div className="absolute inset-0 bg-[#050505]/90 backdrop-blur-xl" />
            </div>

            {/* Header */}
            <header className="relative z-50 flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/20 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => router.back()}
                        className="p-2 hover:bg-white/5 rounded-full transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
                            <img src={character.avatar} alt={character.name} className="w-full h-full object-cover grayscale" />
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black" />
                        </div>
                        <div>
                            <h1 className="text-sm font-bold text-white tracking-wide">{character.name}</h1>
                            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                                <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse" />
                                Neural Link Active
                            </p>
                        </div>
                    </div>
                </div>
                <button className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-400 hover:text-white">
                    <MoreHorizontal className="w-5 h-5" />
                </button>
            </header>

            {/* Chat Area */}
            <main className="relative z-10 flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scrollbar-hide">
                {/* Welcome Message */}
                <div className="flex justify-center my-8">
                    <div className="bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-center max-w-sm backdrop-blur-sm">
                        <Sparkles className="w-5 h-5 text-gray-500 mx-auto mb-2" />
                        <p className="text-xs text-gray-400 font-mono leading-relaxed">
                            Encrypted connection established with <span className="text-white font-bold">{character.name}</span>.
                            <br />
                            Blueprint DNA loaded.
                        </p>
                    </div>
                </div>

                {messages.map((msg, idx) => (
                    <div 
                        key={idx} 
                        className={`flex gap-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                        {msg.role === "assistant" && (
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 shrink-0 mt-1">
                                <img src={character.avatar} alt="Bot" className="w-full h-full object-cover grayscale" />
                            </div>
                        )}

                        <div 
                            className={`max-w-[80%] md:max-w-[60%] rounded-2xl p-4 text-sm leading-relaxed ${
                                msg.role === "user" 
                                    ? "bg-white text-black font-medium rounded-tr-sm" 
                                    : "bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm"
                            }`}
                        >
                            {msg.content}
                        </div>

                        {msg.role === "user" && (
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/5 shrink-0 mt-1">
                                <User className="w-4 h-4 text-gray-400" />
                            </div>
                        )}
                    </div>
                ))}
                
                {isLoading && (
                    <div className="flex gap-4 justify-start">
                         <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 shrink-0 mt-1">
                                <img src={character.avatar} alt="Bot" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm p-4 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                            <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </main>

            {/* Input Area */}
            <footer className="relative z-50 p-4 md:p-6 bg-gradient-to-t from-[#050505] to-transparent">
                <div className="max-w-4xl mx-auto relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder={`Message ${character.name}...`}
                        className="w-full bg-[#0a0a0a] border border-white/10 rounded-full py-4 pl-6 pr-14 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/20 transition-all shadow-2xl"
                    />
                    <button 
                        onClick={sendMessage}
                        disabled={!input.trim() || isLoading}
                        className="absolute right-2 top-2 bottom-2 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-white transition-all group"
                    >
                        <Send className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </footer>
        </div>
    );
}
