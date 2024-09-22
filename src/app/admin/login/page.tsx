import LogoIcon from "@/components/mini/LogoIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminLogin() {
    return (
        <div className={`w-[95%] sm:w-8/12 lg:w-4/12 fixed inset-0 mx-auto flex flex-col justify-center`}>
            <div >
                <div className="fixed top-0 left-0 -z-10 bg-black bg-opacity-60 w-[100%] h-[100%]"></div>
                <div className="bg-white p-10 z-10 rounded-md relative px-5">
                    {/*header of dialog */}
                    <header className="">
                        <div className="flex justify-center">
                            <Link href={"/"}> <LogoIcon /> </Link>
                        </div>
                        <div className="font-semibold text-base text-center">Login as Admin</div>
                        <p className="text-slate-500 text-xs my-3 text-center">
                            Get Exciting Dashboard & Track Order.
                        </p>
                    </header>

                    {/* main content of dialog */}
                    <div className="mt-10 flex flex-col items-center">
                        <input type="email" placeholder="Email" className="text-sm px-3 py-2 outline-none rounded-sm border-[1px] border-color w-72 mb-2" required />
                        <input type="password" placeholder="Password" className="text-sm px-3 py-2 outline-none rounded-sm border-[1px] border-color w-72" required />
                    </div>

                    {/* footer of dialog */}
                    <footer className="my-10 flex flex-col items-center">
                        <div className="sm:mx-auto w-72">
                            <div>
                                <Button type="submit" className="w-[100%] mx-auto text-sm px-3 py-2 rounded-sm">
                                    Login
                                </Button>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}