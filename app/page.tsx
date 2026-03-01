"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[#fafafa] overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img1.png"
            alt="Hero Background"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          {/* Very subtle bottom gradient to fade into dark background cleanly */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>

        {/* Navbar Container */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 flex w-[calc(100%-2rem)] md:w-full max-w-[850px] items-center justify-between mt-4 md:mt-8 px-4 md:px-6 py-2 md:py-4 rounded-full bg-white/20 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
        >
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-2.5">
            <div className="relative flex h-5 w-5 md:h-7 md:w-7 items-center justify-center text-[#ffe100]">
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <circle cx="12" cy="12" r="5" />
                <path d="M12 7v10" />
                <path d="M7 12h10" />
              </svg>
            </div>
            <span className="text-lg md:text-[22px] font-bold text-[#1f2937] tracking-tight" style={{ fontFamily: "serif" }}>
              YumeLens
            </span>
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-zinc-700">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Faq</a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center justify-center p-1.5 text-zinc-800 relative z-50"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {isMobileMenuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              )}
            </motion.div>
          </button>

          {/* CTA Desktop */}
          <button className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-[#ffff80] to-[#ffed4a] text-zinc-900 font-semibold rounded-full text-[15px] shadow-[0_0_15px_rgba(255,237,74,0.5)]">
            Get Started
          </button>
        </motion.nav>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-[60px] right-4 z-40 md:hidden w-[180px] bg-white/20 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col p-4 border border-white/40"
            >
              <div className="flex flex-col gap-3.5 text-center text-sm font-medium text-zinc-800">
                <a href="#" className="active:text-zinc-900 transition-colors tracking-wide" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                <a href="#features" className="active:text-zinc-900 transition-colors tracking-wide" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                <a href="#how-it-works" className="active:text-zinc-900 transition-colors tracking-wide" onClick={() => setIsMobileMenuOpen(false)}>How it works</a>
                <a href="#pricing" className="active:text-zinc-900 transition-colors tracking-wide" onClick={() => setIsMobileMenuOpen(false)}>Pricing</a>
              </div>
              <button className="mt-4 w-full py-2 bg-gradient-to-r from-[#ffff80] to-[#ffed4a] text-zinc-900 font-semibold rounded-full text-[13px] shadow-[0_4px_15px_rgba(255,237,74,0.4)]">
                Get Started
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content Container */}
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 text-center max-w-4xl mx-auto w-full mt-[-10vh]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-[76px] font-medium tracking-tight text-[#0f172a] mb-6 leading-[1.1] drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]"
          >
            Transform Your Reality.<br className="hidden md:block" />
            Create Masterpieces.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-[21px] text-[#334155] mb-10 max-w-[800px] font-medium tracking-normal mx-auto leading-relaxed drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          >
            Upload any photo and let our advanced AI reimagine it into <br className="hidden md:block" /> breathtaking cinematic anime illustrations in seconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-[#ffff80] to-[#ffed4a] text-zinc-900 rounded-full text-lg font-semibold shadow-[0_4px_25px_rgba(255,237,74,0.6)]">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="w-full py-24 bg-transparent relative z-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16 flex flex-col items-center">
            <Badge variant="outline" className="mb-6 py-1 px-4 text-xs font-semibold tracking-wider text-zinc-600 bg-white shadow-sm border-zinc-200">
              POWERFUL CAPABILITIES
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-[#1f2937] mb-4 tracking-tight">The Ultimate AI Art Studio</h2>
            <p className="text-[15px] md:text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">Professional-grade tools designed for creators, built to preserve your<br className="hidden md:block" /> original vision while applying stunning artistic styles.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-zinc-100 shadow-sm rounded-2xl">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                </div>
                <CardTitle className="text-xl">Seamless 4K Uploads</CardTitle>
                <CardDescription className="text-sm pt-2 leading-relaxed h-20">Drop in your highest quality photos. Our engine handles up to 4K resolution images flawlessly, ensuring no detail takes a back seat.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-zinc-100 shadow-sm rounded-2xl">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 border border-purple-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 1-1h3l9-9" /><path d="M3 21v-3l9-9" /><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4ZM15 6l3 3" /><path d="m14 10-4.5 4.5" /><path d="M15 6 3 18" /></svg>
                </div>
                <CardTitle className="text-xl">Curated Aesthetics</CardTitle>
                <CardDescription className="text-sm pt-2 leading-relaxed h-20">Choose from an exclusive library of 50+ cinematic styles, meticulously trained on the works of legendary animation studios.</CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 bg-white border-zinc-100 shadow-sm rounded-2xl">
              <CardHeader className="pb-4">
                <div className="h-12 w-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-4 border border-pink-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.6 13.8-4.5-4.5" /><path d="M21 21V9l-6-6" /><path d="m11 21-8.5-8.5a2.12 2.12 0 0 1 3-3L11 15" /><path d="m4 10 4.5 4.5" /><path d="m15 15 4.5 4.5" /></svg>
                </div>
                <CardTitle className="text-xl">Real-Time Generation</CardTitle>
                <CardDescription className="text-sm pt-2 leading-relaxed h-20">Skip the wait. Our optimized GPU pipeline renders your high-resolution artwork remarkably fast, breaking the 10-second barrier.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="w-full py-24 bg-transparent relative z-20 overflow-hidden border-t border-zinc-200/50">
        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1f2937] tracking-tight mb-5">Create Magic in 3 Steps</h2>
            <p className="text-zinc-500 text-lg max-w-xl mx-auto leading-relaxed">No complex tools. Just pure imagination brought to life instantly through our optimized rendering pipeline.</p>
          </div>

          <div className="w-full max-w-4xl grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { title: "Upload your image", desc: "Select any high-resolution photo or sketch.", step: "1" },
              { title: "Select a style", desc: "Choose from curated cinematic aesthetics.", step: "2" },
              { title: "Generate result", desc: "Experience lightning-fast rendering.", step: "3" }
            ].map((step, i) => (
              <Card key={i} className="flex flex-col text-center border-zinc-100 shadow-sm rounded-2xl pt-6">
                <CardHeader className="pb-2">
                  <div className="mx-auto w-12 h-12 bg-zinc-100 text-zinc-600 font-bold text-lg rounded-full flex items-center justify-center mb-4 transition-colors">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[14px] px-2 leading-relaxed">
                    {step.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-24 bg-transparent relative z-20 overflow-hidden border-t border-zinc-200/50">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1f2937] tracking-tight mb-4">Trusted by Creators</h2>
            <p className="text-zinc-500 text-lg max-w-xl mx-auto leading-relaxed">See how professionals are integrating YumeLens into their daily creative workflows.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sarah L.", role: "Digital Artist", text: "The most intuitive AI generation tool I've used. The cinematic styles are breathtaking and perfectly preserve the composition of my original sketches." },
              { name: "Mark D.", role: "Photographer", text: "It transforms my standard portrait shots into magical studio-quality scenes. It's an indispensable part of my creative workflow now." },
              { name: "Jenny K.", role: "Content Creator", text: "The rendering speed is incredible. Just a few clicks and I have highly stylized thumbnails that immediately grab attention. Truly a game changer." }
            ].map((testimonial, i) => (
              <Card key={i} className="flex flex-col h-full border-zinc-100 shadow-sm rounded-2xl bg-white">
                <CardHeader className="pb-2">
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-zinc-800" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-2">
                  <p className="text-zinc-600 leading-relaxed text-[15px]">"{testimonial.text}"</p>
                </CardContent>
                <CardFooter className="pt-4 border-t border-zinc-50 flex gap-4">
                  <Avatar className="h-10 w-10 border border-zinc-100 bg-zinc-100">
                    <AvatarFallback className="text-xs font-bold text-zinc-600">{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-zinc-900 leading-tight">{testimonial.name}</span>
                    <span className="text-xs text-zinc-500 font-medium">{testimonial.role}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-transparent relative z-20 border-t border-zinc-200/50">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Card className="w-full border-zinc-200 shadow-sm rounded-3xl bg-zinc-50/50 p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1f2937] mb-6 tracking-tight relative z-10">Unleash Your Creativity Today</h2>
            <p className="text-zinc-500 text-lg mb-10 max-w-lg mx-auto font-medium">Join a growing community of artists, designers, and dreamers using YumeLens to redefine visual storytelling.</p>

            <Button size="lg" className="px-8 py-6 rounded-full text-[15px] font-bold bg-gradient-to-r from-[#ffff80] to-[#ffed4a] text-zinc-900 shadow-sm border border-yellow-200/50">
              Start Creating Now
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 bg-transparent border-t border-zinc-200/50 relative z-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2.5 mb-4 md:mb-0 text-zinc-400">
            <span className="text-[20px] font-bold text-zinc-900 tracking-tight" style={{ fontFamily: "serif" }}>YumeLens</span>
            <span className="font-light text-zinc-500">© 2026. All rights reserved.</span>
          </div>
          <div className="flex gap-8 text-[15px] font-light text-zinc-500">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
