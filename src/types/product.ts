export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderInfo {
  name: string;
  email: string;
  phone: string;
  items: CartItem[];
  total: number;
  orderId: string;
  orderDate: string;
}
