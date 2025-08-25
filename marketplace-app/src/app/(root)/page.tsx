import React from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/lib/schema";

const placeholderProducts: Product[] = [
  {
    id: 1,
    name: "Nike Air Force 1 Mid '07",
    description: "Men's shoe with classic comfort.",
    price: "98.30",
    category: "Men's Shoes",
    brand: "Nike",
    imageUrl: "/shoes/shoe-1.jpg",
    stock: 12,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "Nike Court Vision Low Next Nature",
    description: "Retro basketball style remixed for everyday wear.",
    price: "88.30",
    category: "Men's Shoes",
    brand: "Nike",
    imageUrl: "/shoes/shoe-3.webp",
    stock: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "Nike Dunk Low Retro",
    description: "Timeless hoops look with premium comfort.",
    price: "108.30",
    category: "Men's Shoes",
    brand: "Nike",
    imageUrl: "/shoes/shoe-6.avif",
    stock: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const Home = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <section aria-labelledby="latest-shoes-heading">
        <h2
          id="latest-shoes-heading"
          className="mb-6 text-[length:--text-heading-2] leading-[--text-heading-2--line-height] font-[--text-heading-2--font-weight] text-[--color-dark-900]"
        >
          Latest Shoes
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};
export default Home;
