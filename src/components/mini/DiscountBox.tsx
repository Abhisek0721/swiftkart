import { handleCopy } from "@/utils"

const DiscountBox = ({aling}: {aling: "start"|"center"|"end"}): JSX.Element => {
    return (
        <div className={`my-5 flex justify-${aling}`} >
            <div className="w-[100%] sm:w-[80%] xl:w-[80%]  flex items-center justify-between bg-green-100 rounded-md light-shadow p-3 sm:p-5">
                <div className="flex items-center">
                    <div>
                        <img src="/discount.png" alt="discount-icon" />
                    </div>
                    <div className="ml-3">
                        <div className="text-[12px] sm:text-xs lg:text-sm text-green-700">FLAT ₹100 OFF</div>
                        <div className="text-[10px] sm:text-xs lg:text-[10px] text-slate-500">On ₹999 and above</div>
                    </div>
                </div>
                <div className="flex items-center cursor-pointer" onClick={() => handleCopy("BEYOUNG100")}>
                    <div className="text-slate-400 text-lg sm:text-xl mr-3">|</div>
                    <div>
                        <div className="text-xs text-green-700">Copy Coupon</div>
                        <div className="font-semibold text-xs lg:text-sm">BEYOUNG100</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiscountBox;