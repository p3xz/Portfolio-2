import { Github, Linkedin, Instagram, Globe, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-bold text-white">
              Namish<span className="text-[#e945f5]">.</span>
            </span>
            <p className="text-neutral-500 text-sm flex items-center gap-1">
              Made by Namish <Heart className="w-3 h-3 text-[#e945f5] fill-[#e945f5]" /> 2026
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="./contact" className="hover:text-white transition-colors">Contact</a>
            <a href="./privacy" className="hover:text-white transition-colors">Privacy</a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/p3xz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-[#e945f5]/20 border border-white/10 hover:border-[#e945f5]/50 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 text-neutral-400 hover:text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/namish-yadav-639769408" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-[#e945f5]/20 border border-white/10 hover:border-[#e945f5]/50 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-neutral-400 hover:text-white" />
            </a>
            <a 
              href="https://instagram.com/nam7sh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-[#e945f5]/20 border border-white/10 hover:border-[#e945f5]/50 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-neutral-400 hover:text-white" />
            </a>
            <a 
              href="https://namishhh.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-[#e945f5]/20 border border-white/10 hover:border-[#e945f5]/50 transition-all duration-300"
              aria-label="Portfolio"
            >
              <Globe className="w-4 h-4 text-neutral-400 hover:text-white" />
            </a>
            <a 
              href="mailto:nam4sh@gmail.com"
              className="p-2 rounded-full bg-white/5 hover:bg-[#e945f5]/20 border border-white/10 hover:border-[#e945f5]/50 transition-all duration-300"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 text-neutral-400 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
