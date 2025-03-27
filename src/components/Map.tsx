
import React from "react";
import { MapPin, Clock, Phone } from "lucide-react";

const Map: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Nossa Localização</h2>
          <p className="section-subheading">
            Conheça nossa loja ou peça para entrega em sua casa
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            <iframe
              title="Localização da loja"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.955388829574!2d-38.47629230484299!3d-12.990219847078522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7163688f99f6b71%3A0x94e1bd45fd652d!2sSalvador%2C%20BA!5e0!3m2!1sen!2sbr!4v1692701580740!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-acai-purple" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Endereço</h4>
                  <p className="text-gray-600 mt-1">
                    Av. Brigadeiro Alberto Costa Matos, 123<br />
                    Bairro Centro, Salvador - BA
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-acai-purple" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Telefone</h4>
                  <p className="text-gray-600 mt-1">
                    <a 
                      href="https://wa.me/5575991662591" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-acai-purple transition-colors"
                    >
                      (75) 99166-2591
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-acai-purple" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">Horário de Funcionamento</h4>
                  <div className="text-gray-600 mt-1 space-y-1">
                    <p>Segunda à Sexta: 10h às 22h</p>
                    <p>Sábados e Domingos: 12h às 23h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <a
                href="https://wa.me/5575991662591" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-acai-green text-white font-medium py-3 px-6 rounded-xl
                  hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M17 15.5C16.86 15.56 16.44 15.97 15.4 16.44C14.36 16.91 13.44 17.15 12.94 17.25C12.45 17.34 12.04 17.34 11.7 17.13C11.36 16.92 11.09 16.5 10.86 16.08C10.63 15.67 10.35 15 10.09 14.47C9.83 13.93 9.5 13.14 9.22 12.59C8.95 12.04 8.5 11.3 7.97 10.56C7.43 9.83 6.95 9.33 6.5 8.87C6.06 8.4 5.69 8 5.35 7.65C5.05 7.35 4.37 6.66 3.82 6.12C3.28 5.59 3.07 5.39 3 5.29C2.93 5.19 3.16 4.85 3.5 4.58C3.83 4.31 4.35 3.87 4.86 3.45C5.38 3.03 5.65 2.68 5.89 2.45C6.13 2.21 6.87 1.67 7.31 1.44C7.75 1.21 7.93 1.5 8.08 1.79C8.23 2.08 8.97 3.76 9.08 4.11C9.19 4.45 9.22 4.89 9.11 5.3C9 5.71 8.42 6.55 8.17 6.94C7.93 7.33 7.97 7.68 8.14 7.84C8.31 8 9.12 9.11 9.54 9.77C9.95 10.43 10.54 11.12 10.91 11.58C11.28 12.04 11.42 12.15 11.69 12.13C11.97 12.1 12.68 11.53 12.89 11.32C13.1 11.11 13.39 11.18 13.63 11.31C13.87 11.44 15.4 12.38 15.79 12.62C16.18 12.86 16.34 13.1 16.41 13.23C16.5 13.37 16.5 13.9 16.34 14.36C16.18 14.82 15.95 15.21 17 15.5Z" />
                </svg>
                Fale Conosco no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
