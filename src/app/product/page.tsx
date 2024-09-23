"use client";
import Image from "next/image";
import productData from "@/app/data/productImages.json";
import DragScroll from 'react-dragscroll';
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { FaCaretDown, FaCaretUp, FaIndianRupeeSign } from "react-icons/fa6";
import { productDiscountPercentage } from "@/utils";
import DiscountBox from "@/components/mini/DiscountBox";
import { useState } from "react";


export default function Product(): JSX.Element {
  const [readMoreDesc, setReadMoreDesc] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // For managing fade animation

  // Handle image selection with transition
  const handleImageSelect = (index: number) => {
    if (index !== selectedImageIndex) {
      setIsFading(true); // Trigger fade-out first
      setTimeout(() => {
        setSelectedImageIndex(index); // Change the image after fade-out completes
        setIsFading(false); // Fade-in the new image
      }, 300); // Duration of fade-out
    }
  };

  return (
    <div className="mx-5 mt-40 sm:mx-24 md:mx-20 xl:mx-80 lg:bg-background p-3">
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
                      <Image src={productImage.url} alt={productImage.url} onClick={() => handleImageSelect(index)} width={100} height={133} draggable={false} />
                    </div>
                  );
                })
              }
            </div>
          </DragScroll>
          {/* Show Selected Image with Buy Button */}
          <div>
            <div className="light-shadow">
              <img className={`w-[370px] h-auto transition-all duration-300 ${!isFading ? 'opacity-100' : 'opacity-0'}`} src={productData.images[selectedImageIndex].url} alt={productData.productName} draggable={false} />
            </div>
            <div className="flex justify-around my-5 lg:my-10">
              <Button className="bg-yellow-600 rounded-sm text-sm text-center w-28 sm:w-32 cursor-pointer hover:bg-yellow-700"><ShoppingCart className="mr-1" />Add to Cart</Button>
              <Button className="bg-orange-600 rounded-sm text-sm text-center w-28 sm:w-32 cursor-pointer hover:bg-orange-700">Buy Now</Button>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-[100%] lg:w-[50%] bg-background p-3 lg:bg-none mt-2 lg:mt-0">
          {/* Product Name */}
          <div className="my-5">
            <h1 className="text-xl font-semibold text-slate-700">{productData.productName}</h1>
            <p className="mt-2 capitalize text-slate-400">{productData.productCategory}</p>
          </div>
          {/* Product Price */}
          <div className="flex gap-3 items-center">
            <span className="flex text-xl font-semibold text-slate-700 items-center"><FaIndianRupeeSign /> {productData.sellingPrice}</span>
            <span className="flex text-sm text-slate-500 items-center line-through"><FaIndianRupeeSign /> {productData.sellingPrice}</span>
            <span className="flex text-sm font-semibold text-green-600 items-center">
              {
                (productData.sellingPrice < productData.maximumRetailPrice) ? (
                  `(${productDiscountPercentage(productData.maximumRetailPrice, productData.sellingPrice)}% off)`
                ) : (
                  ``
                )
              }
            </span>
          </div>
          {/* Product Offers */}
          <DiscountBox />
          {/* Product Color */}
          <div></div>
          {/* Product Size */}
          <div></div>
          {/* Product Description */}
          <div className="mt-10 text-slate-600 text-sm text-justify w-[100%] md:w-[80%]">
            <div className="mb-3 text-lg font-semibold">Description</div>
            <div>
              {
                (productData?.productDescription?.length > 300 && !readMoreDesc) ? (
                  <>
                    <p>
                      {productData.productDescription.slice(0, 300)}...
                    </p>
                    <button className="mt-2 cursor-pointer font-sans text-center flex items-center gap-1" onClick={()=> setReadMoreDesc(!readMoreDesc)}>
                      Read More <FaCaretDown />
                    </button>
                  </>
                ) : (
                  <>
                    <p>
                      {productData.productDescription}
                    </p>
                    {(productData?.productDescription?.length > 300) ? (
                      <button className="mt-2 cursor-pointer font-sans text-center flex items-center gap-1" onClick={()=> setReadMoreDesc(!readMoreDesc)}>
                        Read Less <FaCaretUp />
                      </button>
                    ) : (<></>)}
                  </>
                )
              }
            </div>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div id="similar-products" className="">

      </div>
    </div>
  );
}
