"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FeatureSection } from "@/components/FeatureSection";
import { ShowcaseSection } from "@/components/ShowcaseSection";
import { DocumentationSection } from "@/components/DocumentationSection";
import { Footer } from "@/components/Footer";
import { EarlyAccessModal } from "@/components/EarlyAccessModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-white/30">
      <Navbar onOpenModal={() => setIsModalOpen(true)} />
      <Hero onOpenModal={() => setIsModalOpen(true)} />
      <FeatureSection />
      <ShowcaseSection />
      <DocumentationSection />
      <Footer />
      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
