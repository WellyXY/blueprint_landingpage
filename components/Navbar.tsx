"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export function Navbar({ onOpenModal }: { onOpenModal: () => void }) {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/50 backdrop-blur-md border-b border-[#333]"
        >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 relative">
                    <img src="/pika-icon.png" alt="Pika Icon" className="w-full h-full object-contain invert" />
                </div>
                <span className="text-lg font-bold tracking-tight text-white font-mono uppercase">Pika</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-xs font-bold text-gray-400 font-mono uppercase tracking-widest">
                <Link href="#features" className="hover:text-white transition-colors">Features</Link>
                <Link href="#docs" className="hover:text-white transition-colors">Documentation</Link>
                <Link href="#showcase" className="hover:text-white transition-colors">Showcase</Link>
            </div>

            <div className="flex items-center gap-4">
                <Link href="/login" className="text-xs font-bold text-gray-400 hover:text-white transition-colors hidden sm:block font-mono uppercase tracking-widest">
                    Sign In
                </Link>
                <button
                    onClick={onOpenModal}
                    className="px-4 py-2 text-xs font-bold text-black bg-white hover:bg-gray-200 rounded-md transition-all font-mono uppercase tracking-widest"
                >
                    Get Early Access
                </button>
            </div>
        </motion.nav>
    );
}
