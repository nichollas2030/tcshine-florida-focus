import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Anti-spam

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (honeypot) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // WhatsApp integration
      const message = `Nova solicitação de orçamento:
      
📋 *Dados do Cliente:*
Nome: ${formData.name}
Email: ${formData.email}
Serviço: ${formData.service}

💬 *Mensagem:*
${formData.message}`;

      const whatsappUrl = `https://wa.me/15615231300?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      // Reset form
      setFormData({ name: '', email: '', service: '', message: '' });
      
      toast({
        title: "Solicitação Enviada!",
        description: "Entraremos em contato via WhatsApp em até 24 horas.",
      });
      
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente ou entre em contato diretamente via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 section-gradient">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
            Solicite seu <span className="text-secondary">Orçamento Gratuito</span>
          </h2>
          <p className="font-opensans text-xl text-muted-foreground">
            Resposta garantida em até 24 horas via WhatsApp
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Form */}
          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Honeypot - Hidden field */}
              <input 
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block font-opensans font-semibold text-primary mb-2">
                    Nome Completo *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="input-premium"
                    placeholder="Seu nome completo"
                    required
                    minLength={2}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-opensans font-semibold text-primary mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="input-premium"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block font-opensans font-semibold text-primary mb-2">
                  Tipo de Serviço *
                </label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger className="input-premium">
                    <SelectValue placeholder="Selecione o tipo de serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="regular">Limpeza Regular</SelectItem>
                    <SelectItem value="deep">Limpeza Profunda</SelectItem>
                    <SelectItem value="post-construction">Pós-Obra</SelectItem>
                    <SelectItem value="airbnb">Airbnb</SelectItem>
                    <SelectItem value="custom">Personalizado</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block font-opensans font-semibold text-primary mb-2">
                  Detalhes do Projeto
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="input-premium min-h-[120px]"
                  placeholder="Descreva brevemente suas necessidades: tamanho da casa, frequência desejada, observações especiais..."
                  maxLength={500}
                />
                <div className="text-right text-sm text-muted-foreground mt-1">
                  {formData.message.length}/500 caracteres
                </div>
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting || !formData.name || !formData.email || !formData.service}
                className="btn-whatsapp w-full"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    Enviando...
                  </>
                ) : (
                  <>📱 Solicitar Orçamento Gratuito</>
                )}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Ao enviar, você concorda em receber contato via WhatsApp para orçamento personalizado
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in space-y-8">
            
            <div className="bg-card p-8 rounded-2xl shadow-premium border border-secondary/20">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-6">
                Contato Direto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-xl">
                    📱
                  </div>
                  <div>
                    <div className="font-opensans font-semibold text-primary">WhatsApp</div>
                    <div className="text-muted-foreground">(561) 523-1300</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-xl">
                    📧
                  </div>
                  <div>
                    <div className="font-opensans font-semibold text-primary">Email</div>
                    <div className="text-muted-foreground">contato@tcshine.com</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-xl">
                    📍
                  </div>
                  <div>
                    <div className="font-opensans font-semibold text-primary">Área de Atendimento</div>
                    <div className="text-muted-foreground">Miami até West Palm Beach</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-2xl border border-secondary/20">
              <h4 className="font-montserrat font-bold text-lg text-primary mb-4">
                🕐 Horário de Atendimento
              </h4>
              <div className="space-y-2 font-opensans text-muted-foreground">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="font-semibold">7h às 19h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="font-semibold">8h às 16h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="font-semibold">Sob consulta</span>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactForm;