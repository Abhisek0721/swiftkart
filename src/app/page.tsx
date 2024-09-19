import ProductCard from "@/components/ProductCard";
import product from "@/app/data/products.json";
import categories from "@/app/data/categories.json";
import banners from "@/app/data/banners.json"
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

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
      <div id="banner" className="w-[80%] h-72 mx-auto rounded-sm mt-5 flex items-center light-shadow relative">
        <div className="absolute left-0 bg-white w-10 h-32 flex items-center justify-center cursor-pointer">
          <FiChevronLeft className="text-3xl" />
        </div>
        <div className="cursor-pointer select-none">
          <img className="cursor-pointer mx-auto w-[100%] h-[100%] rounded-sm" src={banners[0].path} alt={banners[0].path} />
        </div>
        <div className="absolute right-0 bg-white w-10 h-32 flex items-center justify-center cursor-pointer">
          <FiChevronRight className="text-3xl" />
        </div>
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
