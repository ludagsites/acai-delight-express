
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Map from "@/components/Map";
import Promotions from "@/components/Promotions";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import { CartProvider } from "@/context/CartContext";

const Index = () => {
  return (
    <CartProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Menu />
        <Promotions />
        <Testimonials />
        <Map />
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
};

export default Index;
