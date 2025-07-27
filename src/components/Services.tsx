import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: "🏠",
      title: "Limpeza Regular",
      description: "Manutenção semanal/quinzenal personalizada para manter sua casa sempre impecável",
      features: ["Cronograma flexível", "Produtos premium", "Equipe fixa"]
    },
    {
      icon: "✨", 
      title: "Limpeza Profunda",
      description: "Detalhamento completo trimestral que alcança cada canto da sua residência",
      features: ["Limpeza detalhada", "Áreas negligenciadas", "Sanitização completa"]
    },
    {
      icon: "🔨",
      title: "Pós-Obra",
      description: "Remoção especializada de resíduos e poeira após construção ou reforma",
      features: ["Equipamento especializado", "Segurança garantida", "Resultado profissional"]
    },
    {
      icon: "🏨",
      title: "Airbnbs",
      description: "Limpeza express entre hóspedes para manter suas avaliações sempre 5 estrelas",
      features: ["Turnaround rápido", "Check-list rigoroso", "Disponibilidade 7 dias"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
            Nossos Serviços <span className="text-secondary">Premium</span>
          </h2>
          <p className="font-opensans text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções de limpeza sob medida para cada necessidade da sua família na Flórida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="font-montserrat font-bold text-xl text-primary mb-3">
                  {service.title}
                </h3>
                
                <p className="font-opensans text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center justify-center gap-2 text-sm text-accent font-medium">
                      <span className="text-secondary">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-secondary/20 rounded-full">
                    <div className="h-full bg-secondary rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="font-opensans text-lg text-muted-foreground mb-6">
            Não encontrou o que procura? 
          </p>
          <button 
            onClick={() => window.open('https://wa.me/15615231300?text=Gostaria de um orçamento personalizado', '_blank')}
            className="btn-primary"
          >
            Solicitar Orçamento Personalizado
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;