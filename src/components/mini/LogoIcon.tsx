import Image from "next/image";

export default function LogoIcon() {
  return (
    <div>
      <Image
        src="/icons/logo-nobg.png"
        alt="SwiftKart"
        width={100}  // Set the width of the icon
        height={80} // Set the height of the icon
        className="w-[100px] h-[80px]"
      />
    </div>
  )
}