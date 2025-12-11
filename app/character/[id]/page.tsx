"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MoreHorizontal, Share2, UserPlus, Heart, MessageCircle, MapPin, Briefcase, Calendar, Globe, Verified, Grid, ArrowUpRight } from "lucide-react";
import { characters } from "@/lib/data";

export default function CharacterProfile() {
    const params = useParams();
    const router = useRouter();
    const character = characters.find((c) => c.id === params.id);

    if (!character) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono">
                Character not found
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-[#050505] text-white font-sans overflow-x-hidden selection:bg-white/30">
            {/* 1. Immersive Backdrop - Monochrome */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20 blur-[120px] scale-110 grayscale"
                    style={{ backgroundImage: `url(${character.avatar})` }}
                />
                <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-3xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20" />
            </div>

            {/* Navigation */}
            <nav className="relative z-50 flex items-center justify-between px-6 py-8 md:px-12 max-w-[1400px] mx-auto">
                <button 
                    onClick={() => router.back()}
                    className="flex items-center gap-3 px-5 py-2.5 bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full border border-white/5 transition-all group"
                >
                    <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors font-mono">Back</span>
                </button>
                
                <div className="flex gap-3">
                    <button className="p-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full border border-white/5 transition-all text-gray-400 hover:text-white group">
                        <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl rounded-full border border-white/5 transition-all text-gray-400 hover:text-white group">
                        <MoreHorizontal className="w-4 h-4" />
                    </button>
                </div>
            </nav>

            <main className="relative z-10 container mx-auto px-4 pb-20 pt-8 lg:pt-12 max-w-[1200px]">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
                    
                    {/* 2. Left Column: Identity Card - Minimalist & Monochrome */}
                    <aside className="w-full lg:w-[380px] shrink-0">
                        <div className="sticky top-28 group">
                            {/* Subtle Ambient Glow (Grayscale) */}
                            <div className="absolute -inset-1 bg-white/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                            <div className="relative bg-[#0a0a0a] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 lg:p-8 shadow-2xl overflow-hidden">
                                
                                {/* Avatar Container */}
                                <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden mb-8 relative">
                                    <div className="absolute inset-0 border border-white/10 rounded-2xl z-10 pointer-events-none" />
                                    <img 
                                        src={character.avatar} 
                                        alt={character.name} 
                                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>

                                {/* Identity Block */}
                                <div className="mb-8 text-center lg:text-left">
                                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                                        <h1 className="text-3xl font-bold tracking-tight text-white">{character.name}</h1>
                                        <Verified className="w-4 h-4 text-white/40" />
                                    </div>
                                    <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">@{character.username}</p>
                                </div>

                                {/* Minimalist Stats */}
                                <div className="flex justify-between items-center mb-8 px-2">
                                    <div className="text-center">
                                        <span className="block text-lg font-bold text-white mb-1 font-mono">{character.followers}</span>
                                        <span className="text-[9px] uppercase tracking-widest text-gray-600 font-bold">Followers</span>
                                    </div>
                                    <div className="w-px h-8 bg-white/5" />
                                    <div className="text-center">
                                        <span className="block text-lg font-bold text-white mb-1 font-mono">{character.following}</span>
                                        <span className="text-[9px] uppercase tracking-widest text-gray-600 font-bold">Following</span>
                                    </div>
                                    <div className="w-px h-8 bg-white/5" />
                                    <div className="text-center">
                                        <span className="block text-lg font-bold text-white mb-1 font-mono">{character.posts.length}</span>
                                        <span className="text-[9px] uppercase tracking-widest text-gray-600 font-bold">Posts</span>
                                    </div>
                                </div>

                                {/* Monochrome Actions */}
                                <div className="flex gap-3 mb-8">
                                    <button className="flex-1 py-3.5 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 uppercase tracking-widest text-[10px] font-mono">
                                        <UserPlus className="w-3 h-3" />
                                        Follow
                                    </button>
                                    <Link 
                                        href={`/character/${character.id}/chat`}
                                        className="flex-1 py-3.5 bg-transparent border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-colors uppercase tracking-widest text-[10px] font-mono flex items-center justify-center"
                                    >
                                        Message
                                    </Link>
                                </div>

                                {/* Tags - Clean Style */}
                                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                    {[character.role.split(' ')[0], "Identity", "v1.0"].map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] uppercase tracking-widest text-gray-400 font-mono hover:text-white hover:border-white/20 transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* 3. Right Column: Content - High-End Layout */}
                    <div className="flex-1 w-full space-y-12 lg:pt-8">
                        
                        {/* Blueprint Bio */}
                        <section className="relative">
                            <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-6 font-mono flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                                Blueprint DNA
                            </h2>
                            
                            <p className="text-2xl md:text-3xl leading-relaxed text-gray-300 font-light max-w-2xl selection:bg-white selection:text-black">
                                <span className="text-white font-normal">"{character.bio.split('\n')[0]}"</span>
                                <br />
                                <span className="text-lg md:text-xl text-gray-500 mt-4 block">{character.bio.split('\n').slice(1).join(' ')}</span>
                            </p>
                        </section>

                        {/* Metadata Grid - Strictly Monochrome */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
                            <div className="bg-[#050505] p-6 hover:bg-[#0a0a0a] transition-colors group">
                                <div className="mb-4 text-gray-500 group-hover:text-white transition-colors">
                                    <Briefcase className="w-5 h-5" />
                                </div>
                                <p className="text-[9px] uppercase tracking-widest text-gray-600 mb-2 font-mono">Role</p>
                                <p className="text-sm font-medium text-gray-200">{character.role}</p>
                            </div>
                            <div className="bg-[#050505] p-6 hover:bg-[#0a0a0a] transition-colors group">
                                <div className="mb-4 text-gray-500 group-hover:text-white transition-colors">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <p className="text-[9px] uppercase tracking-widest text-gray-600 mb-2 font-mono">Location</p>
                                <p className="text-sm font-medium text-gray-200">Sector 7, Node A</p>
                            </div>
                            <div className="bg-[#050505] p-6 hover:bg-[#0a0a0a] transition-colors group">
                                <div className="mb-4 text-gray-500 group-hover:text-white transition-colors">
                                    <Calendar className="w-5 h-5" />
                                </div>
                                <p className="text-[9px] uppercase tracking-widest text-gray-600 mb-2 font-mono">Initialized</p>
                                <p className="text-sm font-medium text-gray-200">Nov 18, 2025</p>
                            </div>
                        </div>

                        {/* Memory Stream - Clean Grid */}
                        <section>
                             <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white font-mono flex items-center gap-3">
                                    <Grid className="w-3 h-3 text-white/40" />
                                    Memory Stream
                                </h2>
                                <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">
                                    {character.posts.length} Nodes Active
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {character.posts.map((post, i) => (
                                    <div 
                                        key={post.id} 
                                        className="group cursor-pointer"
                                    >
                                        <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white/5 border border-white/5 relative mb-4">
                                            <img 
                                                src={post.content} 
                                                alt={post.caption} 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                            />
                                            
                                            {/* Minimalist Overlay */}
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                                            
                                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-xl">
                                                    <ArrowUpRight className="w-4 h-4 text-black" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Post Metadata */}
                                        <div className="flex items-start justify-between">
                                            <p className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors line-clamp-1 w-3/4">
                                                {post.caption}
                                            </p>
                                            <div className="flex items-center gap-3 text-xs font-mono text-gray-600">
                                                <span className="flex items-center gap-1.5">
                                                    <Heart className="w-3 h-3" />
                                                    {post.likes}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </div>
                </div>
            </main>
        </div>
    );
}
