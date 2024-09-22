import { toast } from "react-hot-toast";

export function productDiscountPercentage(
  maximumRetailPrice: number,
  sellingPrice: number
) {
  return Math.round(
    ((maximumRetailPrice - sellingPrice) / maximumRetailPrice) * 100
  );
}

export function handleCopy(text:string) {
  navigator.clipboard.writeText(text);
  toast.success(`Coupon code copied: ${text}`);
}