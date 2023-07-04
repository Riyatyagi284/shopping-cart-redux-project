import React from "react";
import { products } from "../data";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[80%] mx-auto overflow-hidden sm:flex-row sm:flex-wrap sm:w-screen sm:justify-center md:w-screen md:flex-row md:flex-wrap md:justify-center md:gap-2 md:items-start  lg:flex-wrap lg:justify-center lg:w-11/12 h-full lg:gap-1 bg-white pt-5">
      {products.map((post) => (
        <ProductCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;
