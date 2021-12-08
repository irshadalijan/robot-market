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

export interface contextProps {
  productsState: any;
  productsDispatch: any;
}

export interface iTypes {
  dispatch: ({
    type,
    payload,
  }: {
    type: string;
    payload?: number | string | any[];
  }) => void;
}
