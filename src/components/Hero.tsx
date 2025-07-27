import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-cleaning-team.jpg';

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/15615231300?text=Olá! Gostaria de agendar um serviço de limpeza.', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Equipe profissional TC Shine Cleaning Services"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-primary/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Seu Lar <span className="text-secondary">Brilhante</span><br />
            com a Confiança da <span className="text-secondary">Flórida</span>
          </h1>
          
          <p className="font-opensans text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Limpeza residencial premium para famílias e Airbnbs<br />
            <span className="text-secondary font-semibold">de Miami a West Palm Beach</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={handleWhatsAppClick}
              className="btn-whatsapp text-xl px-10 py-5 min-w-[280px]"
              aria-label="Agendar serviço via WhatsApp"
            >
              📱 Agende via WhatsApp
            </Button>
            
            <Button 
              variant="outline" 
              className="btn-primary text-lg px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Serviços
            </Button>
          </div>
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-opensans">
            <div className="trust-badge bg-white/20 text-white">
              ✓ Profissionais Verificados
            </div>
            <div className="trust-badge bg-white/20 text-white">
              ✓ Produtos Eco-Friendly
            </div>
            <div className="trust-badge bg-white/20 text-white">
              ✓ Resposta em 24h
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;