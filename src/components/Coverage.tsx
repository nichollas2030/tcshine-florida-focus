import React from 'react';

const Coverage = () => {
  const cities = [
    { name: "Miami", highlight: true },
    { name: "Fort Lauderdale", highlight: true },
    { name: "West Palm Beach", highlight: true },
    { name: "Boca Raton", highlight: false },
    { name: "Delray Beach", highlight: false },
    { name: "Boynton Beach", highlight: false },
    { name: "Pompano Beach", highlight: false },
    { name: "Deerfield Beach", highlight: false },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
            Área de <span className="text-secondary">Cobertura</span>
          </h2>
          <p className="font-opensans text-xl text-muted-foreground max-w-3xl mx-auto">
            Atendemos todo o sul da Flórida com a mesma qualidade e dedicação em cada cidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Map Visual */}
          <div className="animate-slide-up">
            <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-3xl border-2 border-primary/10">
              
              {/* Stylized Florida Map */}
              <div className="relative h-96 mx-auto max-w-sm">
                
                {/* Map Background */}
                <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-12"></div>
                
                {/* Service Route Line */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 300">
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: 'hsl(var(--secondary))', stopOpacity: 0.8}} />
                      <stop offset="100%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 0.8}} />
                    </linearGradient>
                  </defs>
                  
                  <path 
                    d="M100 50 Q120 100 100 150 Q80 200 100 250" 
                    stroke="url(#routeGradient)" 
                    strokeWidth="6" 
                    fill="none"
                    strokeDasharray="10,5"
                    className="animate-pulse"
                  />
                </svg>
                
                {/* City Pins */}
                {[
                  { name: "West Palm Beach", x: 100, y: 60, size: "large" },
                  { name: "Boca Raton", x: 85, y: 120, size: "medium" },
                  { name: "Fort Lauderdale", x: 110, y: 180, size: "large" },
                  { name: "Miami", x: 95, y: 240, size: "large" }
                ].map((city, index) => (
                  <div
                    key={city.name}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 animate-bounce`}
                    style={{ 
                      left: `${city.x}%`, 
                      top: `${city.y}%`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <div className={`
                      ${city.size === 'large' ? 'w-6 h-6' : 'w-4 h-4'} 
                      bg-secondary rounded-full border-4 border-white shadow-lg
                      relative z-10
                    `}>
                      <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-75"></div>
                    </div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded text-xs font-semibold text-primary shadow-md whitespace-nowrap">
                      {city.name}
                    </div>
                  </div>
                ))}
                
              </div>
              
              {/* Coverage Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-montserrat font-bold text-secondary">100km</div>
                  <div className="font-opensans text-sm text-muted-foreground">Raio de Cobertura</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-2xl font-montserrat font-bold text-accent">30min</div>
                  <div className="font-opensans text-sm text-muted-foreground">Tempo Médio</div>
                </div>
              </div>
            </div>
          </div>

          {/* Cities List */}
          <div className="animate-fade-in space-y-6">
            <h3 className="font-montserrat font-bold text-2xl text-primary mb-8">
              Cidades Atendidas
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cities.map((city, index) => (
                <div
                  key={city.name}
                  className={`
                    flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105
                    ${city.highlight 
                      ? 'bg-secondary/10 border-2 border-secondary/30' 
                      : 'bg-card border border-border'
                    }
                  `}
                >
                  <div className={`
                    w-3 h-3 rounded-full
                    ${city.highlight ? 'bg-secondary' : 'bg-accent'}
                  `}></div>
                  
                  <div className="flex-1">
                    <div className="font-montserrat font-semibold text-primary">
                      {city.name}
                    </div>
                    {city.highlight && (
                      <div className="font-opensans text-xs text-secondary font-medium">
                        Área Principal
                      </div>
                    )}
                  </div>
                  
                  <div className="text-accent">
                    ✓
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/20">
              <h4 className="font-montserrat font-bold text-lg text-primary mb-3">
                📍 Sua cidade não está na lista?
              </h4>
              <p className="font-opensans text-muted-foreground mb-4">
                Estamos sempre expandindo nossa área de cobertura. Entre em contato e verificaremos 
                a possibilidade de atendimento na sua região.
              </p>
              <button 
                onClick={() => window.open('https://wa.me/15615231300?text=Gostaria de verificar se vocês atendem minha região', '_blank')}
                className="btn-primary"
              >
                Verificar Disponibilidade
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Coverage;