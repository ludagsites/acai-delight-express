
export type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: 'flavor' | 'size' | 'topping';
};

export type Size = {
  id: string;
  name: string;
  description: string;
  price: number;
  ml: number;
};

export type CartItem = {
  id: string;
  flavor: Product;
  size: Size;
  toppings: Product[];
  quantity: number;
  totalPrice: number;
};

export type Testimonial = {
  id: string;
  name: string;
  image: string;
  comment: string;
  rating: number;
};

export type Avaliação = {
  id: string;
  name: string;
  image: string;
  comment: string;
  rating: number;
};

export type Promotion = {
  id: string;
  title: string;
  description: string;
  image: string;
  discount: string;
  code: string;
  expiryDate: string;
};
