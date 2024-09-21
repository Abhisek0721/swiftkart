"use client";
import Image from "next/image";
import productData from "@/app/data/productImages.json";
import DragScroll from 'react-dragscroll';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";


export default function Product():JSX.Element {
  return (
    <div className="mx-5 mt-40 sm:mx-24 lg:mx-40 xl::mx-80 lg:bg-background p-3">
        {/* Buy Product */}
        <div id="buy-product" className="flex flex-col lg:flex-row lg:justify-between">
          {/* Product Images */}
          <div className="flex bg-background p-1 lg:bg-none lg:p-0 select-none w-[100%] lg:w-[50%]">
            {/* List of Images */}
            <DragScroll>
              <div className="hidden md:flex flex-col mr-2 h-[550px] overflow-auto">
                {
                  productData && productData?.images?.map((productImage, index) => {
                    return (
                      <div className="mt-1" key={index}>
                        <Image src={productImage.url} alt={productImage.url} width={100} height={133} draggable={false} />
                      </div>
                    );
                  })
                }
              </div>
            </DragScroll>
            {/* Show Selected Image with Buy Button */}
            <div>
              <div className="light-shadow">
                <img className="w-[370px] h-auto" src={productData.images[0].url} alt={productData.productName} draggable={false} />
              </div>
              <div className="flex justify-around my-5 lg:my-10">
                <Button className="bg-yellow-600 rounded-sm text-sm text-center w-28 sm:w-32 cursor-pointer hover:bg-yellow-700"><ShoppingCart className="mr-1" />Add to Cart</Button>
                <Button className="bg-orange-600 rounded-sm text-sm text-center w-28 sm:w-32 cursor-pointer hover:bg-orange-700">Buy Now</Button>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="w-[100%] lg:w-[50%]">
            <div>
              <h1>{productData.productName}</h1>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div id="similar-products" className="">
          
        </div>
    </div>
  );
}
