
import React, { useState } from "react";
import { Product, Size } from "@/types";
import { useCart } from "@/context/CartContext";

// Mock data
const flavors: Product[] = [
  {
    id: "flavor-1",
    name: "Açaí Tradicional",
    description: "Açaí puro da Amazônia com sabor autêntico",
    image: "https://images.unsplash.com/photo-1676515841519-7bb498597c73?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0,
    category: "flavor",
  },
  {
    id: "flavor-2",
    name: "Açaí com Banana",
    description: "Açaí misturado com banana para um sabor mais suave",
    image: "https://images.unsplash.com/photo-1676515841519-7bb498597c73?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2,
    category: "flavor",
  },
  {
    id: "flavor-3",
    name: "Açaí com Morango",
    description: "Açaí misturado com morango para um sabor mais frutado",
    image: "https://images.unsplash.com/photo-1676515841519-7bb498597c73?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3,
    category: "flavor",
  },
];

const sizes: Size[] = [
  {
    id: "size-1",
    name: "Pequeno",
    description: "Ideal para um lanche rápido",
    price: 12,
    ml: 300,
  },
  {
    id: "size-2",
    name: "Médio",
    description: "Perfeito para satisfazer a fome",
    price: 18,
    ml: 500,
  },
  {
    id: "size-3",
    name: "Grande",
    description: "Para os verdadeiros amantes de açaí",
    price: 24,
    ml: 700,
  },
];

const toppings: Product[] = [
  {
    id: "topping-1",
    name: "Granola",
    description: "Granola crocante premium",
    image: "https://images.unsplash.com/photo-1576097449818-aae45f387cf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    price: 2,
    category: "topping",
  },
  {
    id: "topping-2",
    name: "Banana",
    description: "Banana fresca em fatias",
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    price: 2,
    category: "topping",
  },
  {
    id: "topping-3",
    name: "Morango",
    description: "Morangos frescos em pedaços",
    image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    price: 3,
    category: "topping",
  },
  {
    id: "topping-4",
    name: "Leite Condensado",
    description: "Leite condensado cremoso",
    image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    price: 2,
    category: "topping",
  },
  {
    id: "topping-5",
    name: "Kiwi",
    description: "Kiwi fresco em fatias",
    image: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    price: 3,
    category: "topping",
  },
  {
    id: "topping-6",
    name: "Castanha do Pará",
    description: "Castanhas do Pará picadas",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9901ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    price: 4,
    category: "topping",
  },
];

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const Menu: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedFlavor, setSelectedFlavor] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [selectedToppings, setSelectedToppings] = useState<Product[]>([]);
  const [currentStep, setCurrentStep] = useState<'flavor' | 'size' | 'toppings'>('flavor');

  const calculateTotal = () => {
    let total = 0;
    if (selectedFlavor) total += selectedFlavor.price;
    if (selectedSize) total += selectedSize.price;
    selectedToppings.forEach(topping => total += topping.price);
    return total;
  };

  const toggleTopping = (topping: Product) => {
    setSelectedToppings(prev => {
      const isAlreadySelected = prev.some(item => item.id === topping.id);
      
      if (isAlreadySelected) {
        return prev.filter(item => item.id !== topping.id);
      } else {
        return [...prev, topping];
      }
    });
  };

  const handleFlavorSelect = (flavor: Product) => {
    setSelectedFlavor(flavor);
    setCurrentStep('size');
  };

  const handleSizeSelect = (size: Size) => {
    setSelectedSize(size);
    setCurrentStep('toppings');
  };

  const handleAddToCart = () => {
    if (selectedFlavor && selectedSize) {
      addToCart(selectedFlavor, selectedSize, selectedToppings);
      setSelectedFlavor(null);
      setSelectedSize(null);
      setSelectedToppings([]);
      setCurrentStep('flavor');
    }
  };

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading">Monte seu Açaí</h2>
          <p className="section-subheading">
            Escolha seu sabor, tamanho e complementos para criar o açaí perfeito para você
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`card p-6 ${currentStep === 'flavor' ? 'ring-2 ring-acai-purple' : ''}`}>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-acai-purple text-white flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="ml-3 font-semibold text-xl">Escolha o Sabor</h3>
            </div>
            
            <div className="space-y-4">
              {flavors.map((flavor) => (
                <div 
                  key={flavor.id}
                  className={`relative rounded-xl overflow-hidden transition-all cursor-pointer hover:shadow-md ${
                    selectedFlavor?.id === flavor.id ? 'ring-2 ring-acai-purple' : 'hover:scale-[1.02]'
                  }`}
                  onClick={() => handleFlavorSelect(flavor)}
                >
                  <div className="flex items-center p-3">
                    <img 
                      src={flavor.image} 
                      alt={flavor.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="ml-3">
                      <h4 className="font-medium">{flavor.name}</h4>
                      <p className="text-sm text-gray-500">{flavor.description}</p>
                      {flavor.price > 0 && (
                        <p className="text-acai-purple font-semibold text-sm mt-1">
                          +{formatCurrency(flavor.price)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`card p-6 ${currentStep === 'size' ? 'ring-2 ring-acai-purple' : ''}`}>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-acai-purple text-white flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="ml-3 font-semibold text-xl">Escolha o Tamanho</h3>
            </div>
            
            <div className="space-y-4">
              {sizes.map((size) => (
                <div 
                  key={size.id}
                  className={`relative rounded-xl overflow-hidden transition-all 
                    ${currentStep === 'flavor' ? 'opacity-50 pointer-events-none' : 'cursor-pointer hover:shadow-md'} 
                    ${selectedSize?.id === size.id ? 'ring-2 ring-acai-purple' : 'hover:scale-[1.02]'}`}
                  onClick={() => currentStep !== 'flavor' && handleSizeSelect(size)}
                >
                  <div className="p-3">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium">{size.name} ({size.ml}ml)</h4>
                      <span className="font-semibold text-acai-purple">{formatCurrency(size.price)}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{size.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`card p-6 ${currentStep === 'toppings' ? 'ring-2 ring-acai-purple' : ''}`}>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-full bg-acai-purple text-white flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="ml-3 font-semibold text-xl">Escolha os Complementos</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              {toppings.map((topping) => (
                <div 
                  key={topping.id}
                  className={`relative rounded-xl overflow-hidden transition-all 
                    ${currentStep !== 'toppings' ? 'opacity-50 pointer-events-none' : 'cursor-pointer hover:shadow-md'} 
                    ${selectedToppings.some(item => item.id === topping.id) ? 'ring-2 ring-acai-purple' : 'hover:scale-[1.02]'}`}
                  onClick={() => currentStep === 'toppings' && toggleTopping(topping)}
                >
                  <div className="flex items-center p-3">
                    <img 
                      src={topping.image} 
                      alt={topping.name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                    <div className="ml-3 flex-1">
                      <h4 className="font-medium">{topping.name}</h4>
                      <p className="text-sm text-gray-500">{topping.description}</p>
                    </div>
                    <span className="font-semibold text-acai-purple">{formatCurrency(topping.price)}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-auto">
              <div className="border-t pt-4 mb-4">
                <div className="flex justify-between items-center font-semibold">
                  <span>Total</span>
                  <span className="text-xl text-acai-purple">{formatCurrency(calculateTotal())}</span>
                </div>
              </div>
              
              <button
                onClick={handleAddToCart}
                disabled={!selectedFlavor || !selectedSize}
                className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300
                  ${!selectedFlavor || !selectedSize
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-acai-purple text-white hover:bg-acai-purple-dark transform hover:-translate-y-0.5 active:translate-y-0'
                  }`}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
