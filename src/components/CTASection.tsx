import React from 'react';
import { Button } from '@/components/ui/button';
import cleanLivingRoom from '@/assets/clean-living-room.jpg';

const CTASection = () => {
  const handleWhatsAppClick = () => {
    const message = "Não quero mais perder tempo com limpeza! Gostaria de agendar uma avaliação gratuita.";
    window.open(`https://wa.me/15615231300?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleQuoteClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      
      {/* Background with Image */}
      <div className="absolute inset-0">
        <img 
          src={cleanLivingRoom}
          alt="Casa limpa e organizada"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-white animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl md:text-6xl mb-6 leading-tight">
              Não Perca Tempo com <span className="text-secondary">Limpeza!</span>
            </h2>
            
            <p className="font-opensans text-xl md:text-2xl mb-8 leading-relaxed">
              Nossa equipe certificada resolve em <strong className="text-secondary">50% menos tempo</strong> que a concorrência
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-2xl">
                  ⚡
                </div>
                <div>
                  <div className="font-montserrat font-bold">Eficiência</div>
                  <div className="font-opensans text-sm opacity-90">Serviço 2x mais rápido</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-2xl">
                  🎯
                </div>
                <div>
                  <div className="font-montserrat font-bold">Precisão</div>
                  <div className="font-opensans text-sm opacity-90">Atenção aos detalhes</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-2xl">
                  🛡️
                </div>
                <div>
                  <div className="font-montserrat font-bold">Confiança</div>
                  <div className="font-opensans text-sm opacity-90">Equipe verificada</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-2xl">
                  🌿
                </div>
                <div>
                  <div className="font-montserrat font-bold">Sustentável</div>
                  <div className="font-opensans text-sm opacity-90">Produtos eco-friendly</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsAppClick}
                className="btn-whatsapp text-lg px-8 py-4"
              >
                📱 Falar com Especialista
              </Button>
              
              <Button 
                onClick={handleQuoteClick}
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                Orçamento Gratuito
              </Button>
            </div>
          </div>
          
          {/* Stats/Benefits */}
          <div className="animate-slide-up">
            <div className="grid grid-cols-2 gap-6">
              
              {/* Stat Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center text-white">
                <div className="text-4xl font-montserrat font-bold text-secondary mb-2">
                  500+
                </div>
                <div className="font-opensans text-sm">
                  Famílias Atendidas
                </div>
                <div className="w-full h-1 bg-white/20 rounded-full mt-3">
                  <div className="h-full bg-secondary rounded-full w-full"></div>
                </div>
              </div>
              
              {/* Stat Card 2 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center text-white">
                <div className="text-4xl font-montserrat font-bold text-secondary mb-2">
                  98%
                </div>
                <div className="font-opensans text-sm">
                  Satisfação Garantida
                </div>
                <div className="w-full h-1 bg-white/20 rounded-full mt-3">
                  <div className="h-full bg-secondary rounded-full w-[98%]"></div>
                </div>
              </div>
              
              {/* Stat Card 3 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center text-white">
                <div className="text-4xl font-montserrat font-bold text-secondary mb-2">
                  24h
                </div>
                <div className="font-opensans text-sm">
                  Tempo de Resposta
                </div>
                <div className="w-full h-1 bg-white/20 rounded-full mt-3">
                  <div className="h-full bg-secondary rounded-full w-full"></div>
                </div>
              </div>
              
              {/* Stat Card 4 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 text-center text-white">
                <div className="text-4xl font-montserrat font-bold text-secondary mb-2">
                  50%
                </div>
                <div className="font-opensans text-sm">
                  Mais Rápido
                </div>
                <div className="w-full h-1 bg-white/20 rounded-full mt-3">
                  <div className="h-full bg-secondary rounded-full w-1/2"></div>
                </div>
              </div>
              
            </div>
            
            {/* Special Offer */}
            <div className="mt-8 bg-secondary/20 backdrop-blur-sm p-6 rounded-2xl border border-secondary/30 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-3xl">🎉</div>
                <div className="font-montserrat font-bold text-xl">
                  Oferta Especial
                </div>
              </div>
              <p className="font-opensans text-sm mb-4">
                <strong>20% de desconto</strong> na primeira limpeza para novos clientes que 
                agendarem via WhatsApp até o final do mês!
              </p>
              <div className="text-xs opacity-75">
                *Válido apenas para novos clientes. Não cumulativo com outras promoções.
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
      
    </section>
  );
};

export default CTASection;