type ProductItemType = {
  id: number;
  image: string;
  category: string;
  price: number;
  rating: { rate: number; count: number };
  description: string;
  title: string;
  quantity: number;
};

export { type ProductItemType };
