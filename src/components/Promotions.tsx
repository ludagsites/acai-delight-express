
import React from "react";
import { Promotion } from "@/types";

// Mock data
const promotions: Promotion[] = [
  {
    id: "1",
    title: "Combo Família",
    description: "4 açaís médios com até 3 complementos cada por apenas R$59,90",
    image: "https://media.discordapp.net/attachments/1313849091335393380/1358881005557121155/Imagem_do_WhatsApp_de_2025-04-07_as_16.00.36_db84af19.jpg?ex=67f5740e&is=67f4228e&hm=fc3f1391561d52f78bd4a4c285f31e41337f44b116ed15c2a08a40508d46e8e1&=&format=webp&width=663&height=626=&format=webp&width=626&height=626&auto=format&fit=crop&w=300&q=80", // <- Aqui você muda a imagem da promoção
    discount: "30% OFF",
    code: "FAMILIA30",
    expiryDate: "30/09/2023",
  },
  {
    id: "2",
    title: "Combo Amigos",
    description: "2 açaís grandes com até 4 complementos cada por apenas R$39,90",
    image: "https://media.discordapp.net/attachments/1313849091335393380/1358881005179764827/Imagem_do_WhatsApp_de_2025-04-07_as_16.01.56_8d2f2a1d.jpg?ex=67f5740e&is=67f4228e&hm=083572fe5e461c5252cb736ee480fe77096c091a692fcdf76a09120b912efc1c&=&format=webp&width=657&height=626&auto=format&fit=crop&w=300&q=80",
    discount: "25% OFF",
    code: "AMIGOS25",
    expiryDate: "30/09/2023",
  },
  {
    id: "3",
    title: "Açaí da Semana",
    description: "Açaí médio com morango, banana e leite condensado por apenas R$14,90",
    image: "https://images.unsplash.com/photo-1676515841519-7bb498597c73?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    discount: "20% OFF",
    code: "SEMANA20",
    expiryDate: "30/09/2023",
  },
];

const Promotions: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Promoções Especiais</h2>
          <p className="section-subheading">
            Aproveite nossas ofertas exclusivas e economize em seus pedidos favoritos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div 
              key={promo.id}
              className="card group hover-scale overflow-hidden"
            >
              {/* Image and Discount Badge */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-acai-green text-white font-bold px-3 py-1 rounded-full text-sm">
                  {promo.discount}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="bg-purple-100 text-acai-purple rounded-md px-3 py-1.5 text-sm font-medium">
                    Código: {promo.code}
                  </div>
                  <a
                    href={`https://wa.me/5575991662591?text=Olá! Gostaria de aproveitar a promoção: ${promo.title} (código: ${promo.code})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-acai-purple font-medium hover:underline"
                  >
                    Pedir agora
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5575991662591"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Ver Todas as Promoções
          </a>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
