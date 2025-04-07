
// Data
const flavors = [
  {
    id: "flavor-1",
    name: "Açaí Tradicional",
    description: "Açaí puro da Amazônia com sabor autêntico",
    image: "https://images.unsplash.com/photo-1676515841519-7bb498597c73?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 0, // Base price is in the size
    category: "flavor",
  },
  {
    id: "flavor-2",
    name: "Açaí com Banana",
    description: "Açaí misturado com banana para um sabor mais suave",
    image: "https://images.unsplash.com/photo-1676515841519-7bb498597c73?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2, // Additional charge for the banana mix
    category: "flavor",
  },
  {
    id: "flavor-3",
    name: "Açaí com Morango",
    description: "Açaí misturado com morango para um sabor mais frutado",
    image: "https://images.unsplash.com/photo-1676515841519-7bb498597c73?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 3, // Additional charge for the strawberry mix
    category: "flavor",
  },
];

const sizes = [
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

const toppings = [
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
    name: "Castanha de Caju",
    description: "Castanhas de Caju picadas",
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9901ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80",
    price: 4,
    category: "topping",
  },
];

const testimonials = [
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

const promotions = [
  {
    id: "1",
    title: "Combo Família",
    description: "4 açaís médios com até 3 complementos cada por apenas R$59,90",
    image: "https://media.discordapp.net/attachments/1313849091335393380/1358881005557121155/Imagem_do_WhatsApp_de_2025-04-07_as_16.00.36_db84af19.jpg?ex=67f5740e&is=67f4228e&hm=fc3f1391561d52f78bd4a4c285f31e41337f44b116ed15c2a08a40508d46e8e1&=&format=webp&width=663&height=626&auto=format&fit=crop&w=300&q=80",
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
    image: "https://images.unsplash.com/photo-1676515841519-7bb498597c73?q=80&w=1935&auto=format&fit=crop&w=300&q=80",
    discount: "20% OFF",
    code: "SEMANA20",
    expiryDate: "30/09/2023",
  },
];

// Cart State
let cart = [];
let selectedFlavor = null;
let selectedSize = null;
let selectedToppings = [];
let currentStep = "flavor";

// DOM Elements
const header = document.querySelector(".header");
const mobileMenuButton = document.querySelector(".mobile-menu-button");
const mobileNav = document.querySelector(".mobile-nav");
const flavorList = document.querySelector(".flavor-list");
const sizeList = document.querySelector(".size-list");
const toppingsList = document.querySelector(".toppings-list");
const totalPriceElement = document.getElementById("total-price");
const addToCartBtn = document.getElementById("add-to-cart-btn");
const cartCountElement = document.getElementById("cart-count");
const cartButton = document.querySelector(".cart-button");
const cart_overlay = document.getElementById("cart-overlay");
const cartElement = document.getElementById("cart");
const cartCloseBtn = document.getElementById("cart-close");
const cartContent = document.getElementById("cart-content");
const cartFooter = document.getElementById("cart-footer");
const cartSubtotal = document.getElementById("cart-subtotal");
const cartTotal = document.getElementById("cart-total");
const whatsappCheckout = document.getElementById("whatsapp-checkout");
const continueShoppingBtn = document.getElementById("continue-shopping");
const continueShoppingFooterBtn = document.getElementById("continue-shopping-footer");
const promotionsGrid = document.querySelector(".promotions-grid");
const testimonialsSlider = document.getElementById("testimonials-slider");
const testimonialsDots = document.getElementById("testimonials-dots");
const currentYearElement = document.getElementById("current-year");
const flavorCard = document.getElementById("flavor-card");
const sizeCard = document.getElementById("size-card");
const toppingsCard = document.getElementById("toppings-card");

// Helper Functions
function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function calculateTotal() {
  let total = 0;
  if (selectedFlavor) total += selectedFlavor.price;
  if (selectedSize) total += selectedSize.price;
  selectedToppings.forEach((topping) => (total += topping.price));
  return total;
}

function updateTotalPrice() {
  const total = calculateTotal();
  totalPriceElement.textContent = formatCurrency(total);
}

function updateCartCount() {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartCountElement.textContent = totalItems;
  
  if (totalItems > 0) {
    cartCountElement.classList.remove("hidden");
  } else {
    cartCountElement.classList.add("hidden");
  }
}

function updateCartSummary() {
  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const total = subtotal + 5; // Adding a fixed delivery fee of R$ 5,00
  
  cartSubtotal.textContent = formatCurrency(subtotal);
  cartTotal.textContent = formatCurrency(total);
  
  if (cart.length > 0) {
    cartFooter.classList.add("active");
    
    // Update WhatsApp checkout link
    const message = generateWhatsAppMessage();
    whatsappCheckout.href = `https://wa.me/5575991662591?text=${message}`;
  } else {
    cartFooter.classList.remove("active");
  }
}

function generateWhatsAppMessage() {
  if (cart.length === 0) return "";
  
  let message = "*Pedido de Açaí* 🍇\n\n";
  
  cart.forEach((item, index) => {
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
  
  const subtotal = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  const total = subtotal + 5; // Adding a fixed delivery fee of R$ 5,00
  
  message += `*Subtotal:* ${formatCurrency(subtotal)}\n`;
  message += `*Taxa de Entrega:* ${formatCurrency(5)}\n`;
  message += `*Total:* ${formatCurrency(total)}\n\n`;
  message += "Obrigado pela preferência! 😊";
  
  return encodeURIComponent(message);
}

function renderFlavors() {
  flavorList.innerHTML = "";
  
  flavors.forEach((flavor) => {
    const flavorItem = document.createElement("div");
    flavorItem.classList.add("flavor-item");
    flavorItem.dataset.id = flavor.id;
    
    if (selectedFlavor && selectedFlavor.id === flavor.id) {
      flavorItem.classList.add("selected");
    }
    
    flavorItem.innerHTML = `
      <div class="flavor-content">
        <div class="flavor-image">
          <img src="${flavor.image}" alt="${flavor.name}">
        </div>
        <div class="flavor-info">
          <h4>${flavor.name}</h4>
          <p>${flavor.description}</p>
          ${flavor.price > 0 ? `<div class="flavor-price">+${formatCurrency(flavor.price)}</div>` : ""}
        </div>
      </div>
    `;
    
    flavorItem.addEventListener("click", () => {
      handleFlavorSelect(flavor);
    });
    
    flavorList.appendChild(flavorItem);
  });
}

function renderSizes() {
  sizeList.innerHTML = "";
  
  sizes.forEach((size) => {
    const sizeItem = document.createElement("div");
    sizeItem.classList.add("size-item");
    sizeItem.dataset.id = size.id;
    
    if (selectedSize && selectedSize.id === size.id) {
      sizeItem.classList.add("selected");
    }
    
    if (currentStep === "flavor") {
      sizeItem.classList.add("disabled");
    }
    
    sizeItem.innerHTML = `
      <div class="size-header">
        <h4>${size.name} (${size.ml}ml)</h4>
        <span class="size-price">${formatCurrency(size.price)}</span>
      </div>
      <p class="size-description">${size.description}</p>
    `;
    
    sizeItem.addEventListener("click", () => {
      if (currentStep !== "flavor") {
        handleSizeSelect(size);
      }
    });
    
    sizeList.appendChild(sizeItem);
  });
}

function renderToppings() {
  toppingsList.innerHTML = "";
  
  toppings.forEach((topping) => {
    const toppingItem = document.createElement("div");
    toppingItem.classList.add("topping-item");
    toppingItem.dataset.id = topping.id;
    
    if (selectedToppings.some(item => item.id === topping.id)) {
      toppingItem.classList.add("selected");
    }
    
    if (currentStep !== "toppings") {
      toppingItem.classList.add("disabled");
    }
    
    toppingItem.innerHTML = `
      <div class="topping-image">
        <img src="${topping.image}" alt="${topping.name}">
      </div>
      <div class="topping-info">
        <h4>${topping.name}</h4>
        <p>${topping.description}</p>
      </div>
      <span class="topping-price">${formatCurrency(topping.price)}</span>
    `;
    
    toppingItem.addEventListener("click", () => {
      if (currentStep === "toppings") {
        toggleTopping(topping);
      }
    });
    
    toppingsList.appendChild(toppingItem);
  });
}

function renderPromotions() {
  promotionsGrid.innerHTML = "";
  
  promotions.forEach((promo) => {
    const promoCard = document.createElement("div");
    promoCard.classList.add("promotion-card");
    
    promoCard.innerHTML = `
      <div class="promotion-image">
        <img src="${promo.image}" alt="${promo.title}">
        <div class="promotion-badge">${promo.discount}</div>
      </div>
      <div class="promotion-content">
        <h3>${promo.title}</h3>
        <p>${promo.description}</p>
        <div class="promotion-footer">
          <div class="promotion-code">Código: ${promo.code}</div>
          <a href="https://wa.me/5575991662591?text=Olá! Gostaria de aproveitar a promoção: ${promo.title} (código: ${promo.code})" target="_blank" class="promotion-link">Pedir agora</a>
        </div>
      </div>
    `;
    
    promotionsGrid.appendChild(promoCard);
  });
}

function renderTestimonials() {
  testimonialsSlider.innerHTML = "";
  testimonialsDots.innerHTML = "";
  
  testimonials.forEach((testimonial, index) => {
    const testimonialCard = document.createElement("div");
    testimonialCard.classList.add("testimonial-card");
    if (index === 0) testimonialCard.classList.add("active");
    
    // Generate stars based on rating
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
      if (i <= testimonial.rating) {
        starsHTML += '<span class="star filled">★</span>';
      } else {
        starsHTML += '<span class="star">★</span>';
      }
    }
    
    testimonialCard.innerHTML = `
      <div class="testimonial-header">
        <div class="testimonial-avatar">
          <img src="${testimonial.image}" alt="${testimonial.name}">
        </div>
        <div class="testimonial-info">
          <h4>${testimonial.name}</h4>
          <div class="testimonial-stars">${starsHTML}</div>
        </div>
      </div>
      <p class="testimonial-content">"${testimonial.comment}"</p>
    `;
    
    testimonialsSlider.appendChild(testimonialCard);
    
    // Create dots for navigation
    const dot = document.createElement("button");
    dot.classList.add("testimonial-dot");
    if (index === 0) dot.classList.add("active");
    dot.setAttribute("aria-label", `Go to testimonial ${index + 1}`);
    
    dot.addEventListener("click", () => {
      moveToTestimonial(index);
    });
    
    testimonialsDots.appendChild(dot);
  });
}

function renderCart() {
  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
          </svg>
        </div>
        <p>Seu carrinho está vazio</p>
        <button class="continue-shopping" id="continue-shopping">Continuar Comprando</button>
      </div>
    `;
    
    document.getElementById("continue-shopping").addEventListener("click", closeCart);
  } else {
    cartContent.innerHTML = `
      <div class="cart-items"></div>
      <button class="continue-shopping" id="clear-cart">Limpar Carrinho</button>
    `;
    
    const cartItemsContainer = cartContent.querySelector(".cart-items");
    
    cart.forEach(item => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      
      let toppingsHTML = '';
      if (item.toppings.length > 0) {
        toppingsHTML = `
          <div class="cart-item-toppings">
            <p class="cart-item-toppings-label">Complementos:</p>
            <div class="cart-item-toppings-list">
              ${item.toppings.map(topping => `<span class="cart-item-topping">${topping.name}</span>`).join('')}
            </div>
          </div>
        `;
      }
      
      cartItem.innerHTML = `
        <button class="cart-item-remove" data-id="${item.id}" aria-label="Remover item">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>
        <h3 class="cart-item-title">${item.flavor.name}</h3>
        <p class="cart-item-size">${item.size.name} (${item.size.ml}ml)</p>
        ${toppingsHTML}
        <div class="cart-item-bottom">
          <div class="cart-item-quantity">
            <button class="quantity-btn ${item.quantity <= 1 ? 'disabled' : ''}" data-id="${item.id}" data-action="decrease">-</button>
            <span class="quantity-value">${item.quantity}</span>
            <button class="quantity-btn" data-id="${item.id}" data-action="increase">+</button>
          </div>
          <span class="cart-item-price">${formatCurrency(item.totalPrice)}</span>
        </div>
      `;
      
      cartItemsContainer.appendChild(cartItem);
    });
    
    // Add event listeners for cart item actions
    document.getElementById("clear-cart").addEventListener("click", clearCart);
    
    document.querySelectorAll(".cart-item-remove").forEach(button => {
      button.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        removeCartItem(id);
      });
    });
    
    document.querySelectorAll(".quantity-btn").forEach(button => {
      button.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        const action = e.currentTarget.dataset.action;
        
        if (action === "increase") {
          updateCartItemQuantity(id, 1);
        } else if (action === "decrease") {
          updateCartItemQuantity(id, -1);
        }
      });
    });
  }
}

// Event Handlers
function handleFlavorSelect(flavor) {
  selectedFlavor = flavor;
  currentStep = "size";
  
  flavorCard.classList.remove("active");
  sizeCard.classList.add("active");
  
  renderFlavors();
  renderSizes();
  updateTotalPrice();
  updateAddToCartButton();
}

function handleSizeSelect(size) {
  selectedSize = size;
  currentStep = "toppings";
  
  sizeCard.classList.remove("active");
  toppingsCard.classList.add("active");
  
  renderSizes();
  renderToppings();
  updateTotalPrice();
  updateAddToCartButton();
}

function toggleTopping(topping) {
  const index = selectedToppings.findIndex(item => item.id === topping.id);
  
  if (index !== -1) {
    selectedToppings.splice(index, 1);
  } else {
    selectedToppings.push(topping);
  }
  
  renderToppings();
  updateTotalPrice();
}

function updateAddToCartButton() {
  if (selectedFlavor && selectedSize) {
    addToCartBtn.disabled = false;
  } else {
    addToCartBtn.disabled = true;
  }
}

function addToCart() {
  if (!selectedFlavor || !selectedSize) return;
  
  const newItem = {
    id: generateUniqueId(),
    flavor: selectedFlavor,
    size: selectedSize,
    toppings: [...selectedToppings],
    quantity: 1,
    totalPrice: calculateTotal(),
  };
  
  cart.push(newItem);
  
  // Reset selections
  selectedFlavor = null;
  selectedSize = null;
  selectedToppings = [];
  currentStep = "flavor";
  
  flavorCard.classList.add("active");
  sizeCard.classList.remove("active");
  toppingsCard.classList.remove("active");
  
  renderFlavors();
  renderSizes();
  renderToppings();
  updateTotalPrice();
  updateAddToCartButton();
  updateCartCount();
  
  // Show success message
  alert("Item adicionado ao carrinho!");
}

function removeCartItem(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartCount();
  updateCartSummary();
  renderCart();
}

function updateCartItemQuantity(id, change) {
  const index = cart.findIndex(item => item.id === id);
  
  if (index !== -1) {
    const newQuantity = cart[index].quantity + change;
    
    if (newQuantity > 0) {
      cart[index].quantity = newQuantity;
      cart[index].totalPrice = (cart[index].flavor.price + cart[index].size.price + 
        cart[index].toppings.reduce((acc, topping) => acc + topping.price, 0)) * newQuantity;
      
      updateCartCount();
      updateCartSummary();
      renderCart();
    }
  }
}

function clearCart() {
  cart = [];
  updateCartCount();
  updateCartSummary();
  renderCart();
}

function openCart() {
  cart_overlay.classList.add("active");
  cartElement.classList.add("active");
  document.body.style.overflow = "hidden";
  
  renderCart();
  updateCartSummary();
}

function closeCart() {
  cart_overlay.classList.remove("active");
  cartElement.classList.remove("active");
  document.body.style.overflow = "";
}

function toggleMobileMenu() {
  mobileNav.classList.toggle("active");
}

// Testimonials Slider
let activeTestimonialIndex = 0;
let testimonialInterval;

function moveToTestimonial(index) {
  // Update active testimonial
  activeTestimonialIndex = index;
  
  // Update testimonial cards
  const testimonialCards = testimonialsSlider.querySelectorAll(".testimonial-card");
  testimonialCards.forEach((card, i) => {
    if (i === activeTestimonialIndex) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
  
  // Update dots
  const dots = testimonialsDots.querySelectorAll(".testimonial-dot");
  dots.forEach((dot, i) => {
    if (i === activeTestimonialIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
  
  // Scroll to active testimonial
  const cardWidth = testimonialCards[0].offsetWidth;
  testimonialsSlider.scrollTo({
    left: activeTestimonialIndex * (cardWidth + 16), // 16px is the margin-right
    behavior: "smooth",
  });
  
  // Reset the interval
  clearInterval(testimonialInterval);
  startTestimonialInterval();
}

function startTestimonialInterval() {
  testimonialInterval = setInterval(() => {
    const nextIndex = (activeTestimonialIndex + 1) % testimonials.length;
    moveToTestimonial(nextIndex);
  }, 5000);
}

// Scroll Handler
function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// Initialize
function init() {
  // Render components
  renderFlavors();
  renderSizes();
  renderToppings();
  renderPromotions();
  renderTestimonials();
  updateTotalPrice();
  updateAddToCartButton();
  
  // Set current year in footer
  currentYearElement.textContent = new Date().getFullYear();
  
  // Highlight active step
  flavorCard.classList.add("active");
  
  // Activate first testimonial
  startTestimonialInterval();
  
  // Add event listeners
  window.addEventListener("scroll", handleScroll);
  mobileMenuButton.addEventListener("click", toggleMobileMenu);
  addToCartBtn.addEventListener("click", addToCart);
  cartButton.addEventListener("click", openCart);
  cartCloseBtn.addEventListener("click", closeCart);
  cart_overlay.addEventListener("click", closeCart);
  continueShoppingBtn.addEventListener("click", closeCart);
  continueShoppingFooterBtn.addEventListener("click", closeCart);
  
  // Handle mobile nav links closing menu
  document.querySelectorAll(".mobile-nav a").forEach(link => {
    link.addEventListener("click", toggleMobileMenu);
  });
  
  // Initial scroll check
  handleScroll();
}

// Initialize on DOM content loaded
document.addEventListener("DOMContentLoaded", init);
