import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Por favor, insira seu email",
        variant: "destructive"
      });
      return;
    }
    setIsSubmitting(true);

    // Open email client
    window.location.href = `mailto:bruno@jumperstudio.com?subject=Quero me libertar do trabalho repetitivo&body=Olá, gostaria de conversar sobre automação para meu negócio. Meu email é: ${email}`;
    
    setTimeout(() => {
      toast({
        title: "Obrigado pelo interesse!",
        description: "Entraremos em contato em breve."
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  const handleDirectContact = () => {
    window.location.href = "mailto:bruno@jumperstudio.com?subject=Quero me libertar do trabalho repetitivo";
  };

  return (
    <section id="contato" className="bg-white py-16 md:py-24">
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="jumper-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-jumper-500 text-white mr-2">05</span>
              <span>Contato</span>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-haffer font-normal tracking-tight leading-tight mb-6" style={{ letterSpacing: "-0.02em" }}>
            Pronto para se <span className="text-jumper-500">Libertar</span>?
          </h2>
          <p className="text-xl font-haffer font-normal leading-relaxed text-gray-700 mb-12 max-w-3xl mx-auto">
            Vamos conversar sobre como podemos automatizar seus processos e multiplicar seus resultados.
          </p>
          
          <div className="mb-8">
            <p className="text-lg text-gray-600 mb-4">Entre em contato diretamente:</p>
            <a 
              href="mailto:bruno@jumperstudio.com" 
              className="text-xl font-semibold text-jumper-500 hover:text-jumper-600 transition-colors"
            >
              bruno@jumperstudio.com
            </a>
          </div>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Seu melhor email" 
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-jumper-500 text-gray-700" 
                required 
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-jumper-500 to-jumper-600 text-white font-medium py-4 px-8 rounded-full hover:from-jumper-600 hover:to-jumper-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? "Enviando..." : "Começar Agora"}
              </button>
            </form>
            
            <div className="mt-6">
              <button 
                onClick={handleDirectContact}
                className="text-jumper-500 hover:text-jumper-600 font-medium transition-colors"
              >
                Ou clique aqui para enviar email diretamente
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;