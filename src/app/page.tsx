import ProductCard from "@/components/ProductCard";
import product from "@/app/data/products.json";
import categories from "@/app/data/categories.json";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      {/* Categories */}
      <div id="categories" className="bg-background w-[80%] h-32 mx-auto rounded-sm flex justify-center items-center">
        {
          categories.map((category, index) => {
            return (
              <div className="cursor-pointer mx-10 select-none" key={index}>
                <Image className="cursor-pointer mx-auto" src={category.path} alt={category.name} width={78} height={78} />
                <p className="text-center">{category.name}</p>
              </div>
            )
          })
        }
      </div>

      {/* Banner */}
      <div id="banner" className="bg-background w-[80%] h-72 mx-auto rounded-sm mt-5">

      </div>

      {/* Products */}
      <div id="products" className="w-[80%] mx-auto my-32 flex flex-wrap justify-between">
        {
          product.map((product, index) => <ProductCard key={index} />)
        }
      </div>
    </div>
  );
}
