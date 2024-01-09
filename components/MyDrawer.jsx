

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

import Link from "next/link";


export default function FooterMain() {

    return(
<Drawer>
  <DrawerTrigger> <div><span className="footerSpItem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z" clipRule="evenodd" />
</svg></span> <span className="footerSpItem footerTxt">Contact</span></div></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
 


      <div className="drawerDiv grid grid-cols-1  w-full">
      <h3>Josh Gallegos</h3>
      </div>  


      <DrawerDescription>

      <div className=" grid grid-cols-1  gap-4      w-full">
  <div className="flex items-center justify-center p-4">
  <h4>josh@symphonicsoul.net</h4> 
  </div> 
        
  <div className="flex items-center justify-center ">
  <h4>505.690.5781</h4>
        </div> 

       </div>  
   </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Link variant="custom" className="networkBtn bg-white  text-white p-2 rounded-full-outline" href="./more" onClick={() => document.getElementById('closeDrawer').click()}>Message</Link>
      <DrawerClose id="closeDrawer" variant="custom" className="bg-black text-white p-2 rounded-full">Done</DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

)
}