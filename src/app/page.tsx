import ProductCard from "@/components/ProductCard";
import product from "@/app/data/products.json";
import categories from "@/app/data/categories.json";
import banners from "@/app/data/banners.json"
import Image from "next/image";
import CarouselBanner from "@/components/CarouselBanner";

export default function Home() {
  return (
    <div className="">

      {/* Categories */}
      <div id="categories" className="bg-background w-[95%] sm:w-[80%] h-32 mx-auto rounded-sm hidden lg:flex justify-center items-center">
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
      <div id="banner" className="w-[80%] -z-10 h-72 mx-auto rounded-sm mt-5 hidden lg:flex items-center light-shadow relative">
        <CarouselBanner banners={banners} />
      </div>

      {/* Products */}
      <div id="products" className="w-[85%] sm:w-[80%] mx-auto my-32 flex flex-wrap justify-between">
        {
          product.map((product, index) => <ProductCard data={product} key={index} />)
        }
      </div>
    </div>
  );
}
