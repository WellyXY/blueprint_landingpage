"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Grid, Heart, MessageCircle, MoreHorizontal } from "lucide-react";
import { characters } from "@/lib/data";
import { Navbar } from "@/components/Navbar";

export default function CharacterProfile() {
    const params = useParams();
    const character = characters.find((c) => c.id === params.id);

    if (!character) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono">
                Character not found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Simple Navbar for this page */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-[#333]">
                <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                    <span className="font-mono text-sm uppercase tracking-wide">Back</span>
                </Link>
                <span className="font-mono text-sm font-bold uppercase tracking-widest">{character.username}</span>
                <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </nav>

            <main className="pt-24 pb-12 container max-w-4xl mx-auto px-4">
                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                    <div className="relative group">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                            <div className="w-full h-full rounded-full border-4 border-black overflow-hidden">
                                <img src={character.avatar} alt={character.name} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                            <h1 className="text-2xl font-light">{character.username}</h1>
                            <div className="flex gap-2">
                                <button className="px-6 py-1.5 bg-white text-black font-semibold rounded-lg text-sm hover:bg-gray-200 transition-colors">
                                    Follow
                                </button>
                                <button className="px-6 py-1.5 bg-[#1a1a1a] text-white font-semibold rounded-lg text-sm border border-[#333] hover:bg-[#2a2a2a] transition-colors">
                                    Message
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-start gap-8 mb-6 text-sm">
                            <div className="flex gap-1">
                                <span className="font-bold">{character.posts.length}</span>
                                <span className="text-gray-400">posts</span>
                            </div>
                            <div className="flex gap-1">
                                <span className="font-bold">{character.followers}</span>
                                <span className="text-gray-400">followers</span>
                            </div>
                            <div className="flex gap-1">
                                <span className="font-bold">{character.following}</span>
                                <span className="text-gray-400">following</span>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <h2 className="font-bold">{character.name}</h2>
                            <p className="text-gray-400 text-sm font-mono uppercase tracking-wide">{character.role}</p>
                            <p className="whitespace-pre-line text-sm leading-relaxed">{character.bio}</p>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-t border-[#333] mb-4">
                    <div className="flex justify-center gap-12">
                        <button className="flex items-center gap-2 py-4 border-t border-white -mt-px text-xs font-bold uppercase tracking-widest">
                            <Grid className="w-3 h-3" /> Posts
                        </button>
                        <button className="flex items-center gap-2 py-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
                            <span className="w-3 h-3 border border-gray-500 rounded-sm" /> Saved
                        </button>
                        <button className="flex items-center gap-2 py-4 text-gray-500 text-xs font-bold uppercase tracking-widest">
                            <span className="w-3 h-3 border border-gray-500 rounded-full" /> Tagged
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-3 gap-1 md:gap-8">
                    {character.posts.map((post) => (
                        <div key={post.id} className="aspect-square relative group cursor-pointer bg-[#111]">
                            <img src={post.content} alt={post.caption} className="w-full h-full object-cover" />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold">
                                <div className="flex items-center gap-2">
                                    <Heart className="w-5 h-5 fill-white" />
                                    {post.likes}
                                </div>
                                <div className="flex items-center gap-2">
                                    <MessageCircle className="w-5 h-5 fill-white" />
                                    {post.comments}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
