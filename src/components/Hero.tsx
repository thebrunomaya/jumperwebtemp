
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import headerBackground from "@/assets/header-background.jpg";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);
  
  return (
    <section 
      className="overflow-hidden relative bg-cover" 
      id="hero" 
      style={{
        backgroundImage: `url(${headerBackground})`,
        backgroundPosition: 'center 30%', 
        padding: isMobile ? '100px 12px 40px' : '120px 20px 60px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-gradient-to-br from-jumper-500/20 to-purple-600/20 opacity-30 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <div 
              className="jumper-chip mb-3 sm:mb-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.1s" }}
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-jumper-500 text-white mr-2">01</span>
              <span>Automação</span>
            </div>
            
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-haffer font-light leading-tight tracking-tight opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.3s", letterSpacing: "-0.02em" }}
            >
              Liberte seu negócio<br className="hidden sm:inline" />do trabalho repetitivo
            </h1>
            
            <p 
              style={{ animationDelay: "0.5s" }} 
              className="section-subtitle mt-3 sm:mt-6 mb-4 sm:mb-8 leading-relaxed opacity-0 animate-fade-in text-gray-950 font-normal text-base sm:text-lg text-left"
            >
              Acreditamos que quando proprietários de negócios são liberados do trabalho repetitivo, eles podem gerar mais impacto na sociedade - e os libertamos através de automação inteligente e sistemas.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.7s" }}
            >
              <a 
                href="#contato" 
                className="flex items-center justify-center group w-full sm:w-auto text-center bg-jumper-gradient hover:opacity-90 text-white font-haffer font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Quero Me Libertar
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#sobre" 
                className="flex items-center justify-center group w-full sm:w-auto text-center border-2 border-gray-300 hover:border-jumper-500 text-gray-800 hover:text-jumper-500 font-haffer font-medium py-4 px-8 rounded-full transition-all duration-300 hover:bg-jumper-gradient-soft"
              >
                Nosso Manifesto
              </a>
            </div>
            
            {/* Stats Section */}
            <div 
              className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 opacity-0 animate-fade-in" 
              style={{ animationDelay: "0.9s" }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-haffer font-bold text-jumper-500 mb-1">3x</div>
                <div className="text-sm font-haffer text-gray-600">Mais leads</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-haffer font-bold text-purple-600 mb-1">67%</div>
                <div className="text-sm font-haffer text-gray-600">Menos tempo manual</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-haffer font-bold text-jumper-500 mb-1">40+</div>
                <div className="text-sm font-haffer text-gray-600">PMEs transformadas</div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative mt-6 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-jumper-500/20 to-purple-600/20 rounded-2xl sm:rounded-3xl -z-10 shadow-xl"></div>
            <div className="relative transition-all duration-500 ease-out overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl animate-fade-in bg-gradient-to-br from-jumper-500 to-purple-600 p-8 sm:p-12" style={{ animationDelay: "0.9s" }}>
              <div className="space-y-6">
                {/* Abstract automation visualization */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-3 bg-white/30 rounded-full animate-pulse"></div>
                  <div className="h-3 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="h-3 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
                <div className="text-white text-center py-8">
                  <div className="text-2xl font-haffer font-semibold mb-2">Automação Inteligente</div>
                  <div className="text-white/80 font-haffer">Sistemas que trabalham para você</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="text-white font-haffer font-medium">CRM</div>
                  </div>
                  <div className="h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="text-white font-haffer font-medium">Email</div>
                  </div>
                  <div className="h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="text-white font-haffer font-medium">Analytics</div>
                  </div>
                  <div className="h-16 bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="text-white font-haffer font-medium">Social</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-jumper-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
