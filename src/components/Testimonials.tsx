import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Ana Martinez",
      location: "Miami Beach, FL",
      service: "Airbnb Cleaning", 
      rating: 5,
      photo: "👩🏻‍💼",
      text: "Minha casa para Airbnb sempre impecável! Os hóspedes sempre elogiam a limpeza nos comentários. A TC Shine é essencial para manter minhas 5 estrelas.",
      highlight: "Airbnb sempre 5 estrelas"
    },
    {
      id: 2,
      name: "Carlos Silva", 
      location: "Boca Raton, FL",
      service: "Limpeza Regular",
      rating: 5,
      photo: "👨🏽‍💼",
      text: "Cuidam da casa da minha mãe idosa com carinho especial. A equipe é pontual, educada e extremamente cuidadosa com os pertences dela.",
      highlight: "Cuidado especial com idosos"
    },
    {
      id: 3,
      name: "Jennifer Parker",
      location: "Fort Lauderdale, FL", 
      service: "Limpeza Profunda",
      rating: 5,
      photo: "👩🏼‍💻",
      text: "Profissionais pontuais e detalhistas. Transformaram minha casa depois da reforma. Recomendo para qualquer família que valoriza qualidade!",
      highlight: "Excelente pós-obra"
    },
    {
      id: 4,
      name: "Roberto & Maria Santos",
      location: "Delray Beach, FL",
      service: "Limpeza Regular",
      rating: 5, 
      photo: "👫🏽",
      text: "Com dois filhos pequenos, não tínhamos tempo para limpeza profunda. A TC Shine nos devolveu os fins de semana! Equipe de confiança total.",
      highlight: "Perfeito para famílias"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
            O que Dizem Nossos <span className="text-secondary">Clientes</span>
          </h2>
          <p className="font-opensans text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 500 famílias na Flórida já confiam na TC Shine. Veja alguns depoimentos reais
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Main Testimonial */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="w-full flex-shrink-0 service-card">
                  <CardContent className="p-8 text-center">
                    
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-2xl text-yellow-400">⭐</span>
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="font-opensans text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    {/* Client Info */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="text-4xl">{testimonial.photo}</div>
                      <div className="text-left">
                        <div className="font-montserrat font-bold text-xl text-primary">
                          {testimonial.name}
                        </div>
                        <div className="font-opensans text-muted-foreground">
                          {testimonial.location}
                        </div>
                        <div className="font-opensans text-sm text-secondary font-medium">
                          {testimonial.service}
                        </div>
                      </div>
                    </div>
                    
                    {/* Highlight Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary rounded-full font-medium text-sm">
                      <span>✨</span>
                      {testimonial.highlight}
                    </div>
                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-border hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center"
            aria-label="Depoimento anterior"
          >
            ←
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg border border-border hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center"
            aria-label="Próximo depoimento"
          >
            →
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-secondary w-8' 
                    : 'bg-border hover:bg-secondary/50'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Thumbnails */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                index === currentIndex 
                  ? 'border-secondary bg-secondary/5' 
                  : 'border-border hover:border-secondary/50'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm">{testimonial.photo}</span>
                <span className="font-opensans font-semibold text-sm text-primary truncate">
                  {testimonial.name.split(' ')[0]}
                </span>
              </div>
              <div className="font-opensans text-xs text-muted-foreground">
                {testimonial.location}
              </div>
              <div className="font-opensans text-xs text-secondary font-medium">
                {testimonial.service}
              </div>
            </button>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <p className="font-opensans text-lg text-muted-foreground mb-6">
            Junte-se às centenas de famílias satisfeitas na Flórida
          </p>
          <button 
            onClick={() => window.open('https://wa.me/15615231300?text=Vi os depoimentos e gostaria de agendar um serviço', '_blank')}
            className="btn-whatsapp"
          >
            Quero Ser o Próximo Cliente Satisfeito
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;