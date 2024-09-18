import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogFooter, DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";

export default function Login({ toggleLoginModal, setToggleLoginModal }: {
  toggleLoginModal: boolean,
  setToggleLoginModal: Function
}) {
  return (
    <div className="w-4/12 fixed inset-0 mx-auto top-32">
      <Dialog open={toggleLoginModal} onOpenChange={() => setToggleLoginModal(!toggleLoginModal)} >
        {
          toggleLoginModal &&
          <div className="fixed top-0 left-0 -z-10 bg-black bg-opacity-60 w-[100%] h-[100%]"></div>
        }
        <DialogContent className="bg-white px-5 py-10 z-10">
          {/*header of dialog */}
          <DialogHeader>
            <Button className="w-40 mx-auto outline-none" onClick={() => setToggleLoginModal(!toggleLoginModal)}>
              Close
            </Button>
            <DialogTitle>Invite people to this workspace</DialogTitle>
            {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
          </DialogHeader>

          {/* main content of dialog */}


          {/* footer of dialog */}
          <DialogFooter>
            <Button type="submit" className="w-40 mx-auto outline-none">
              Login
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
