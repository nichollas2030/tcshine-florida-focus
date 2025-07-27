import React from 'react';
import cleanSupplies from '@/assets/cleaning-supplies.jpg';

const Advantages = () => {
  const advantages = [
    {
      icon: "🛡️",
      title: "Profissionais Verificados e Segurados",
      description: "Equipe com background check completo e seguro de responsabilidade civil"
    },
    {
      icon: "🌿", 
      title: "Produtos Eco-Friendly Certificados",
      description: "Produtos biodegradáveis que protegem sua família e o meio ambiente"
    },
    {
      icon: "⏰",
      title: "Flexibilidade Total de Horários", 
      description: "Atendemos sua agenda, incluindo fins de semana e feriados"
    },
    {
      icon: "💬",
      title: "Resposta em Até 24 Horas",
      description: "Orçamentos rápidos e agendamento imediato via WhatsApp"
    },
    {
      icon: "🎯",
      title: "Garantia de Satisfação 100%",
      description: "Se não ficar satisfeito, voltamos para refazer sem custo adicional"
    },
    {
      icon: "📱",
      title: "Tecnologia e Comunicação",
      description: "Updates em tempo real e fotos antes/depois de cada serviço"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-8">
              Por que Escolher a <span className="text-secondary">TC Shine</span>?
            </h2>
            
            <p className="font-opensans text-xl text-muted-foreground mb-12 leading-relaxed">
              Mais de <strong className="text-primary">500 famílias</strong> na Flórida já confiam na qualidade 
              e profissionalismo da TC Shine Cleaning Services.
            </p>
            
            <div className="space-y-8">
              {advantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-2xl">
                    {advantage.icon}
                  </div>
                  
                  <div>
                    <h3 className="font-montserrat font-bold text-lg text-primary mb-2">
                      {advantage.title}
                    </h3>
                    <p className="font-opensans text-muted-foreground leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-card rounded-2xl border border-secondary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
                <span className="font-montserrat font-bold text-primary">Destaque Especial</span>
              </div>
              <p className="font-opensans text-muted-foreground">
                <strong>Primeira limpeza com 20% de desconto</strong> para novos clientes que 
                agendarem via WhatsApp até o final do mês!
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="animate-slide-up lg:order-2">
            <div className="relative">
              <img 
                src={cleanSupplies}
                alt="Produtos de limpeza eco-friendly TC Shine"
                className="w-full h-[600px] object-cover rounded-3xl shadow-premium"
                loading="lazy"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -left-6 bg-card p-6 rounded-2xl shadow-lg border-l-4 border-secondary">
                <div className="text-3xl font-montserrat font-bold text-primary">500+</div>
                <div className="font-opensans text-sm text-muted-foreground">Famílias Atendidas</div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-2xl shadow-lg border-l-4 border-accent">
                <div className="text-3xl font-montserrat font-bold text-primary">98%</div>
                <div className="font-opensans text-sm text-muted-foreground">Satisfação Garantida</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Advantages;