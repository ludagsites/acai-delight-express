
import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="text-acai-purple font-montserrat font-bold text-2xl md:text-3xl tracking-tight flex items-center"
        >
          <span className="text-acai-green">Açaí</span>
          <span className="ml-1">Delícia</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#home" 
            className="text-gray-800 hover:text-acai-purple transition-colors duration-200"
          >
            Início
          </a>
          <a 
            href="#menu" 
            className="text-gray-800 hover:text-acai-purple transition-colors duration-200"
          >
            Cardápio
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-800 hover:text-acai-purple transition-colors duration-200"
          >
            Depoimentos
          </a>
          <a 
            href="#location" 
            className="text-gray-800 hover:text-acai-purple transition-colors duration-200"
          >
            Localização
          </a>
        </nav>

        {/* Cart and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            className="relative p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
          >
            <ShoppingCart className="h-6 w-6 text-acai-purple" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-acai-green text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-acai-purple" />
            ) : (
              <Menu className="h-6 w-6 text-acai-purple" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-gray-800 hover:text-acai-purple transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Início
            </a>
            <a 
              href="#menu" 
              className="text-gray-800 hover:text-acai-purple transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Cardápio
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-800 hover:text-acai-purple transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#location" 
              className="text-gray-800 hover:text-acai-purple transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Localização
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
