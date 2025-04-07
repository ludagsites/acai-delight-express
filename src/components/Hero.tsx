
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 pb-16 flex items-center bg-gradient-to-b from-white to-purple-50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-100 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute top-1/3 -left-20 w-64 h-64 bg-green-100 rounded-full opacity-70 blur-3xl"></div>
      
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-1.5 bg-purple-100 text-acai-purple rounded-full font-medium text-sm mb-6">
              Naturalmente Delicioso
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              Açaí Premium <br />
              <span className="text-acai-purple">Entregue na sua porta</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Descubra o verdadeiro sabor do açaí da amazônia com nossas combinações exclusivas de frutas frescas e complementos crocantes.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#menu"
                className="btn-primary"
              >
                Ver Cardápio
              </a>
              <a
                href="https://wa.me/5575991662591"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M17 15.5C16.86 15.56 16.44 15.97 15.4 16.44C14.36 16.91 13.44 17.15 12.94 17.25C12.45 17.34 12.04 17.34 11.7 17.13C11.36 16.92 11.09 16.5 10.86 16.08C10.63 15.67 10.35 15 10.09 14.47C9.83 13.93 9.5 13.14 9.22 12.59C8.95 12.04 8.5 11.3 7.97 10.56C7.43 9.83 6.95 9.33 6.5 8.87C6.06 8.4 5.69 8 5.35 7.65C5.05 7.35 4.37 6.66 3.82 6.12C3.28 5.59 3.07 5.39 3 5.29C2.93 5.19 3.16 4.85 3.5 4.58C3.83 4.31 4.35 3.87 4.86 3.45C5.38 3.03 5.65 2.68 5.89 2.45C6.13 2.21 6.87 1.67 7.31 1.44C7.75 1.21 7.93 1.5 8.08 1.79C8.23 2.08 8.97 3.76 9.08 4.11C9.19 4.45 9.22 4.89 9.11 5.3C9 5.71 8.42 6.55 8.17 6.94C7.93 7.33 7.97 7.68 8.14 7.84C8.31 8 9.12 9.11 9.54 9.77C9.95 10.43 10.54 11.12 10.91 11.58C11.28 12.04 11.42 12.15 11.69 12.13C11.97 12.1 12.68 11.53 12.89 11.32C13.1 11.11 13.39 11.18 13.63 11.31C13.87 11.44 15.4 12.38 15.79 12.62C16.18 12.86 16.34 13.1 16.41 13.23C16.5 13.37 16.5 13.9 16.34 14.36C16.18 14.82 15.95 15.21 17 15.5Z" />
                </svg>
                Pedir no WhatsApp
              </a>
            </div>
            
            {/* Features */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-acai-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">100% Natural</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-acai-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">Entrega Rápida</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-acai-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-600">Qualidade Premium</span>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative md:pl-12 animate-fade-in animation-delay-300">
            <div className="relative z-10 animate-float">
              <img 
                src="https://media.discordapp.net/attachments/1313849091335393380/1358872077901496470/Sem_titulo-12.png?ex=67f56bbd&is=67f41a3d&hm=a96133f132273a9d97731cb0fa575989597a6c04b17238924cdabf127681d563&=&format=webp&quality=lossless&width=1104&height=746&auto=format&fit=crop&w=600&q=80" 
                alt="Açaí" 
                className="w-full h-auto rounded-3xl shadow-2xl"
              />
              
              {/* Floating decoration elements */}
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center animate-float animation-delay-200">
                <img 
                  src="https://images.unsplash.com/photo-1610301130167-f0e777bec8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" 
                  alt="Fruta fresca" 
                  className="w-14 h-14 object-cover rounded-lg"
                />
                <span className="text-xs font-medium mt-2 text-acai-purple">Frutas Frescas</span>
              </div>
              
              <div className="absolute -top-6 -right-6 md:top-5 md:right-5 w-28 h-28 bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center animate-float animation-delay-400">
                <img 
                  src="https://images.unsplash.com/photo-1576097449818-aae45f387cf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=120&q=80" 
                  alt="Granola crocante" 
                  className="w-14 h-14 object-cover rounded-lg"
                />
                <span className="text-xs font-medium mt-2 text-acai-purple">Granola Premium</span>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
