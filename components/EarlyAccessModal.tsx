"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";

interface EarlyAccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#111] border border-[#333] rounded-2xl p-6 z-50 shadow-2xl"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {isSuccess ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">🎉</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 font-mono uppercase">Request Received</h3>
                                <p className="text-gray-400">
                                    We've added you to the waitlist. Keep an eye on your inbox!
                                </p>
                                <button
                                    onClick={onClose}
                                    className="mt-6 px-6 py-2 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors font-mono uppercase text-sm"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-xl font-bold text-white mb-2 font-mono uppercase">Get Early Access</h2>
                                <p className="text-gray-400 mb-6 text-sm">
                                    Join the revolution of living AI characters.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1 font-mono">Email</label>
                                        <input
                                            type="email"
                                            required
                                            className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors"
                                            placeholder="you@company.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1 font-mono">I am a...</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <label className="cursor-pointer">
                                                <input type="radio" name="type" className="peer sr-only" required />
                                                <div className="text-center px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-gray-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all text-sm font-bold">
                                                    Individual
                                                </div>
                                            </label>
                                            <label className="cursor-pointer">
                                                <input type="radio" name="type" className="peer sr-only" required />
                                                <div className="text-center px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg text-gray-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white transition-all text-sm font-bold">
                                                    Company
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1 font-mono">Purpose</label>
                                        <textarea
                                            required
                                            rows={3}
                                            className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors resize-none"
                                            placeholder="What are you building?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors font-mono uppercase text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            "Request Access"
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
