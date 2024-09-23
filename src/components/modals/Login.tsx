import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { DialogFooter, DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";
import { XIcon } from "lucide-react";
import { SiGoogle } from 'react-icons/si';

export default function Login({ toggleLoginModal, setToggleLoginModal }: {
  toggleLoginModal: boolean,
  setToggleLoginModal: Function,
}) {
  return (
    <div className={`w-[95%] sm:w-8/12 lg:w-4/12 fixed inset-0 mx-auto flex flex-col ${(toggleLoginModal)?('flix'):('hidden')} justify-center`}>
      <Dialog open={toggleLoginModal} onOpenChange={() => setToggleLoginModal(!toggleLoginModal)} >
        {
          toggleLoginModal &&
          // Darken Background
          <div className="fixed top-0 left-0 -z-10 bg-black bg-opacity-60 w-[100%] h-[100%]"></div>
        }
        <DialogContent className="bg-white p-10 z-10 rounded-md relative px-5">
          {/*header of dialog */}
          <DialogHeader className="">

            <DialogClose className="absolute right-1 top-1 p-1">
              <XIcon></XIcon>
            </DialogClose>

            <DialogTitle className="font-semibold text-base text-center">Login to SwiftKart</DialogTitle>
            <DialogDescription className="text-slate-500 text-xs my-3 text-center">
              Get Exciting Offers & Track Order.
            </DialogDescription>
          </DialogHeader>

          {/* main content of dialog */}
          <div className="mt-8 flex flex-col items-center">
            <input type="email" placeholder="Email" className="text-sm px-3 py-2 outline-none rounded-sm border-[1px] border-color w-72 mb-2" required />
            <input type="password" placeholder="Password" className="text-sm px-3 py-2 outline-none rounded-sm border-[1px] border-color w-72" required />
          </div>

          {/* footer of dialog */}
          <DialogFooter className="mt-5 flex flex-col items-center">
            <div className="sm:mx-auto w-72">
              <div>
                <Button type="submit" className="w-[100%] mx-auto text-sm px-3 py-2 rounded-sm">
                  Login
                </Button>
              </div>
              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>
              <div>
                <Button
                  variant="outline"
                  className="w-[100%] mx-auto text-sm px-3 py-2 rounded-sm mb-5"
                >
                  Login with <SiGoogle className="ml-2" />oogle
                </Button>
              </div>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
