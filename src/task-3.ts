const product: Product = {
  id: 1,
  description: "Compact and fast",
};

interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

console.log(`Product: ${JSON.stringify(product)}`);
