import Image from "next/image";
import Link from "next/link";

const ProductCard = (
    {data}:{
        data: {
            productName: string,
            productCategory: string,
            productPrice: number,
            productDescription: string,
            url: string
        }
    }
):JSX.Element => {
    return (
        <div className="bg-background w-[100%] sm:w-80 h-auto mx-auto rounded-sm mt-10 select-none">
            <Link href={"/product"}>
                <img src={data.url} alt={data.productName} className="w-[100%] h-[80%] p-3 mx-auto" />
                <div className="mx-5">
                    <div>
                    {
                        (data.productName.length<=35)?(data.productName):(`${data.productName.slice(0,35)}...`)
                    }
                    </div>
                    <p className="text-slate-500 text-xs capitalize">{data.productCategory}</p>
                    <div className="mt-3 text-sm">{`Rs. ${data.productPrice.toString()}`}</div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCard;