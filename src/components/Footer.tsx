import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/15615231300?text=Olá! Gostaria de saber mais sobre os serviços da TC Shine.', '_blank');
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              TC Shine <span className="text-secondary">Cleaning Services</span>
            </h3>
            <p className="font-opensans text-white/80 mb-6 leading-relaxed">
              Serviço de limpeza residencial premium no sul da Flórida. 
              Confiança, eficiência e atenção aos detalhes em cada projeto.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-secondary">📱</span>
                <span className="font-opensans">(561) 523-1300</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-secondary">📧</span>
                <span className="font-opensans">contato@tcshine.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-secondary">📍</span>
                <span className="font-opensans">Miami até West Palm Beach, FL</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 font-opensans text-white/80">
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Limpeza Regular
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Limpeza Profunda
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Pós-Obra
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-secondary transition-colors">
                  Airbnb Cleaning
                </a>
              </li>
              <li>
                <a href="#contact-form" className="hover:text-secondary transition-colors">
                  Orçamento Personalizado
                </a>
              </li>
            </ul>
          </div>
          
          {/* Coverage Areas */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-4">Área de Cobertura</h4>
            <ul className="space-y-2 font-opensans text-white/80">
              <li>Miami</li>
              <li>Fort Lauderdale</li>
              <li>West Palm Beach</li>
              <li>Boca Raton</li>
              <li>Delray Beach</li>
              <li>Boynton Beach</li>
              <li>Pompano Beach</li>
              <li>
                <button 
                  onClick={handleWhatsAppClick}
                  className="hover:text-secondary transition-colors text-left"
                >
                  + Outras cidades
                </button>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Operating Hours */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div>
              <h4 className="font-montserrat font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-secondary">🕐</span>
                Horário de Funcionamento
              </h4>
              <div className="space-y-2 font-opensans text-white/80">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="text-secondary font-semibold">7h às 19h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-secondary font-semibold">8h às 16h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-white/60">Sob consulta</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-secondary">✨</span>
                Diferenciais
              </h4>
              <ul className="space-y-2 font-opensans text-white/80 text-sm">
                <li>✓ Profissionais verificados</li>
                <li>✓ Produtos eco-friendly</li>
                <li>✓ Seguro de responsabilidade</li>
                <li>✓ Garantia de satisfação</li>
                <li>✓ Resposta em 24h</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-secondary">📱</span>
                Contato Rápido
              </h4>
              <button 
                onClick={handleWhatsAppClick}
                className="w-full bg-secondary text-white p-4 rounded-xl font-opensans font-semibold hover:bg-secondary/90 transition-colors flex items-center justify-center gap-2"
              >
                <span>💬</span>
                Agendar via WhatsApp
              </button>
            </div>
            
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div className="font-opensans text-white/60 text-sm">
              © {currentYear} TC Shine Cleaning Services. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center gap-6 text-sm font-opensans text-white/60">
              <a href="#" className="hover:text-secondary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                Termos de Serviço
              </a>
              <span>|</span>
              <span>Licenciado e Segurado na Flórida</span>
            </div>
            
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 rounded-full border border-white/10">
              <span className="text-secondary">🏆</span>
              <span className="font-opensans text-sm text-white/80">
                Empresa premiada em satisfação do cliente 2024
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;