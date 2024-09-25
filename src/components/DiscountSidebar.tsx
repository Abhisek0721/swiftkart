import { XIcon } from "lucide-react";
import DiscountBox from "./mini/DiscountBox";

export default function DiscountSidebar({toggleOfferSideBar, setToggleOfferSideBar}: {
    toggleOfferSideBar: boolean;
    setToggleOfferSideBar: Function;
}) {
    function repeatComponent() {
        const index:number[] = [];
        for(let i=0; i<4; i++) {
            index.push(i);
        }
        return index;
    }

    return (
        <div>
            {/* Darken Background */}
            <div className={`top-0 left-0 ${(toggleOfferSideBar)?'fixed':'hidden'} z-50 bg-black bg-opacity-60 w-[100%] h-[100%]`}></div>
            <div className={`discount-sidebar z-50 overflow-hidden transition-all duration-300 ${(toggleOfferSideBar)?'w-10/12 sm:w-8/12 lg:w-3/12 p-3':'w-0'}`}>
                <div className="flex justify-between">
                    <div>Offers</div>
                    <XIcon className="cursor-pointer" onClick={()=> setToggleOfferSideBar(false)}></XIcon>
                </div>
                <hr className="my-3"/>
                <div className="">
                    {
                        repeatComponent().map((index) => {
                            return (
                                <div className="" key={index}>
                                    <DiscountBox aling='center' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}