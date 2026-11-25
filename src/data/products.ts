export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  { id: 1, name: "Chuột không dây WLMouse Akitsu", price: 4180000, image: "/images/products/mice/akitsu/1.webp", category: "Chuột", stock: 14 },
  { id: 2, name: "Chuột Finalmouse ULX Pro (Limited)", price: 5390000, image: "/images/products/mice/finalmouse-ulx/1.webp", category: "Chuột", stock: 0 },
  { id: 3, name: "Bàn phím cơ Wooting 60HE Analog (Layout 60%)", price: 6710000, image: "/images/products/keyboard/wooting/1.webp", category: "Bàn phím", stock: 25 },
  { id: 4, name: "Bàn phím cơ AKKO Centauri", price: 2490000, image: "/images/products/keyboard/centauri/1.webp", category: "Bàn phím", stock: 40 },
  { id: 5, name: "Lót chuột Yuki Aim Oni (Limited)", price: 1320000, image: "/images/products/mousepad/yuki-aim-oni/1.webp", category: "Lót chuột", stock: 10 },
  { id: 6, name: "Grip chuột Pulsar Supergrip", price: 258000, image: "/images/products/accessory/pulsar-supergrip/1.webp", category: "Phụ kiện", stock: 50 },
];
