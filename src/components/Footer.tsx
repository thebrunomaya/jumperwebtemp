
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-dark-900 text-white py-12">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Company Info */}
          <div className="space-y-2">
            <h3 className="text-2xl font-haffer font-medium tracking-tight leading-tight" style={{ letterSpacing: "-0.01em" }}>
              <span className="bg-jumper-gradient bg-clip-text text-transparent">
                Jumper Studio
              </span>
            </h3>
            <p className="text-gray-300 text-lg font-haffer font-normal leading-relaxed">
              Libertando empresários através de automação inteligente
            </p>
          </div>
          
          {/* Specialties */}
          <div className="space-y-2">
            <h4 className="text-lg font-haffer font-medium text-jumper-300">Especialidades</h4>
            <p className="text-gray-400 font-haffer">
              Ecommerce, Fitness & Saúde Digital
            </p>
          </div>
          
          {/* Contact */}
          <div className="space-y-2">
            <a 
              href="mailto:bruno@jumperstudio.com" 
              className="text-jumper-400 hover:text-jumper-300 transition-colors font-haffer font-medium"
            >
              bruno@jumperstudio.com
            </a>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-500 text-sm font-haffer">
              © 2025 Jumper Studio. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
