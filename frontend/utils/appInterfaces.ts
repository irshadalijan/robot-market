export interface productsProps {
  item: {
    name: string;
    price: string;
    material: string;
    stock: number;
    image: string;
    createdAt: string;
  };
  products: productsProps["item"][];
}
