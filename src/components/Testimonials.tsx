
import React, { useState, useEffect, useRef } from "react";
import { Testimonial } from "@/types";

// Mock data
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Maria Silva",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    comment: "O melhor açaí da cidade! Entrega rápida e os complementos são super frescos. Recomendo demais!",
    rating: 5,
  },
  {
    id: "2",
    name: "João Pereira",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    comment: "Ótimo custo-benefício e as opções de complementos são ótimas. Meu favorito é o açaí com morango!",
    rating: 4,
  },
  {
    id: "3",
    name: "Ana Carolina",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    comment: "Nunca provei um açaí tão cremoso e saboroso. A entrega é super rápida e o atendimento é excelente!",
    rating: 5,
  },
  {
    id: "4",
    name: "Carlos Eduardo",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    comment: "Peço toda semana! As porções são generosas e os preços são justos. Não troco por nada!",
    rating: 5,
  },
  {
    id: "5",
    name: "Juliana Costa",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    comment: "Adoro a variedade de complementos. O açaí é muito cremoso e saboroso. Definitivamente o melhor da região!",
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging]);

  // Scroll to active testimonial
  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const cardWidth = slider.querySelector(".testimonial-card")?.clientWidth || 0;
      const scrollPosition = activeIndex * (cardWidth + 16); // 16px is the gap
      
      slider.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    // Snap to closest testimonial
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const cardWidth = slider.querySelector(".testimonial-card")?.clientWidth || 0;
      const newIndex = Math.round(slider.scrollLeft / (cardWidth + 16));
      setActiveIndex(newIndex);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // Drag sensitivity
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-purple-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-heading">O que nossos clientes dizem</h2>
          <p className="section-subheading">
            Veja as experiências de quem já provou nosso açaí
          </p>
        </div>

        {/* Testimonials Slider */}
        <div 
          className="relative overflow-hidden px-4"
          onMouseLeave={handleMouseUp}
        >
          <div
            ref={sliderRef}
            className="flex space-x-4 overflow-x-hidden hide-scrollbar pb-6"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-card flex-shrink-0 w-full md:w-96 p-6 bg-white rounded-2xl shadow-md transition-transform duration-300 
                  ${activeIndex === index ? "scale-[1.02]" : ""}`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 
                  ${activeIndex === index ? "bg-acai-purple w-6" : "bg-gray-300"}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
