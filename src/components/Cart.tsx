
import React from "react";
import { useCart } from "@/context/CartContext";
import { X, Minus, Plus, ShoppingCart } from "lucide-react";

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const Cart: React.FC = () => {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    subtotal, 
    totalPrice,
    isCartOpen, 
    setIsCartOpen 
  } = useCart();

  const generateWhatsAppMessage = () => {
    if (!items.length) return "";
    
    let message = "*Pedido de Açaí* 🍇\n\n";
    
    items.forEach((item, index) => {
      message += `*Item ${index + 1}*\n`;
      message += `*Sabor:* ${item.flavor.name}\n`;
      message += `*Tamanho:* ${item.size.name} (${item.size.ml}ml)\n`;
      
      if (item.toppings.length > 0) {
        message += "*Complementos:* ";
        message += item.toppings.map(topping => topping.name).join(", ");
        message += "\n";
      } else {
        message += "*Complementos:* Nenhum\n";
      }
      
      message += `*Quantidade:* ${item.quantity}\n`;
      message += `*Subtotal:* ${formatCurrency(item.totalPrice)}\n\n`;
    });
    
    message += `*Total:* ${formatCurrency(totalPrice)}\n\n`;
    message += "Obrigado pela preferência! 😊";
    
    return encodeURIComponent(message);
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsCartOpen(false)}
        />
      )}
      
      {/* Cart Drawer */}
      <div 
        className={`fixed top-0 right-0 w-full md:w-96 h-full bg-white z-50 shadow-xl 
          transform transition-transform duration-300 ease-in-out 
          ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ShoppingCart className="h-5 w-5 text-acai-purple mr-2" />
                <h2 className="text-lg font-semibold">Seu Carrinho</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close cart"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <ShoppingCart className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-gray-500 mb-4">Seu carrinho está vazio</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-acai-purple hover:text-acai-purple-dark font-medium transition-colors"
                >
                  Continuar Comprando
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="border rounded-xl p-3 relative">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Remove item"
                    >
                      <X className="h-4 w-4 text-gray-500" />
                    </button>
                    
                    <div className="mb-3">
                      <h3 className="font-medium">{item.flavor.name}</h3>
                      <p className="text-sm text-gray-500">{item.size.name} ({item.size.ml}ml)</p>
                    </div>
                    
                    {item.toppings.length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs text-gray-500 mb-1">Complementos:</p>
                        <div className="flex flex-wrap gap-1">
                          {item.toppings.map((topping) => (
                            <span 
                              key={topping.id} 
                              className="text-xs bg-purple-50 text-acai-purple rounded-full px-2 py-0.5"
                            >
                              {topping.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 hover:bg-gray-100 transition-colors"
                          aria-label="Decrease quantity"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4 text-gray-500" />
                        </button>
                        <span className="px-3 py-1 border-x">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 hover:bg-gray-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4 text-gray-500" />
                        </button>
                      </div>
                      <span className="font-medium text-acai-purple">
                        {formatCurrency(item.totalPrice)}
                      </span>
                    </div>
                  </div>
                ))}
                
                {items.length > 0 && (
                  <button 
                    onClick={clearCart}
                    className="w-full text-center text-sm text-gray-500 hover:text-acai-purple transition-colors py-2"
                  >
                    Limpar Carrinho
                  </button>
                )}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {items.length > 0 && (
            <div className="p-4 border-t">
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-500">Subtotal</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Taxa de Entrega</span>
                  <span>{formatCurrency(5)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span className="text-acai-purple">{formatCurrency(totalPrice)}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <a
                  href={`https://wa.me/5575991662591?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-acai-green text-white font-medium py-3 px-4 rounded-xl 
                    hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M17 15.5C16.86 15.56 16.44 15.97 15.4 16.44C14.36 16.91 13.44 17.15 12.94 17.25C12.45 17.34 12.04 17.34 11.7 17.13C11.36 16.92 11.09 16.5 10.86 16.08C10.63 15.67 10.35 15 10.09 14.47C9.83 13.93 9.5 13.14 9.22 12.59C8.95 12.04 8.5 11.3 7.97 10.56C7.43 9.83 6.95 9.33 6.5 8.87C6.06 8.4 5.69 8 5.35 7.65C5.05 7.35 4.37 6.66 3.82 6.12C3.28 5.59 3.07 5.39 3 5.29C2.93 5.19 3.16 4.85 3.5 4.58C3.83 4.31 4.35 3.87 4.86 3.45C5.38 3.03 5.65 2.68 5.89 2.45C6.13 2.21 6.87 1.67 7.31 1.44C7.75 1.21 7.93 1.5 8.08 1.79C8.23 2.08 8.97 3.76 9.08 4.11C9.19 4.45 9.22 4.89 9.11 5.3C9 5.71 8.42 6.55 8.17 6.94C7.93 7.33 7.97 7.68 8.14 7.84C8.31 8 9.12 9.11 9.54 9.77C9.95 10.43 10.54 11.12 10.91 11.58C11.28 12.04 11.42 12.15 11.69 12.13C11.97 12.1 12.68 11.53 12.89 11.32C13.1 11.11 13.39 11.18 13.63 11.31C13.87 11.44 15.4 12.38 15.79 12.62C16.18 12.86 16.34 13.1 16.41 13.23C16.5 13.37 16.5 13.9 16.34 14.36C16.18 14.82 15.95 15.21 17 15.5Z" />
                  </svg>
                  Finalizar Pedido no WhatsApp
                </a>
                
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-acai-purple hover:text-acai-purple-dark font-medium py-2 transition-colors"
                >
                  Continuar Comprando
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
