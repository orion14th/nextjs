'use client';
import { useRef,useContext } from 'react';
import Link from 'next/link'
import { Separator } from "@/components/ui/separator"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

 
 

import {TitleContext}from '@/components/TitleContext';


 

export default function Hamburger() {
 
 

  const sheetRef = useRef(null);


  const handleCloseLinkClick = () => {

    if (sheetRef.current) {
      sheetRef.current.close();
    }


    

  };

 

   

  return (

    <>
 
    <div className="menu-main grid grid-cols-1 lg:grid-cols-3 gap-4 hidden md:grid fixed top-0 w-full">
 

    <div className="flex items-center justify-center p-4">
      <Link className="menuLink" href="./"  onClick={handleCloseLinkClick} >Home</Link>
      </div>
      <div className="flex items-center justify-center p-4">
        <Link className="menuLink" href="./portfolio"  onClick={handleCloseLinkClick} >Portfolio</Link>
      </div>
      <div className="flex items-center justify-center p-4">
        <Link className="menuLink" href="./react"  onClick={handleCloseLinkClick} >React</Link>
      </div> 
      
      
      
      
       </div>

      

    <div className="menu-mobile container mx-auto p-6">


  <div className=" menu-mobile-title grid grid-cols-1 fixed text-center w-full">

    <div  className="menuMobileTitle text-center py-2">{useContext(TitleContext).title}</div>
   
  </div>
 

    <div className=' menu-mobile-main flex justify-start'>
 
    <div id="backBtnDiv1" className="backBtnDiv flex items-center justify-center p-4">
        <Link className="backBtn" href="/"  onClick={handleCloseLinkClick} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
</svg>
</Link>
      </div> 


    <Sheet  ref={sheetRef}>
      <SheetTrigger asChild>
        <Button variant="outline"   ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"  viewBox="0 0 24 24">
<path d="M 0 2 L 0 4 L 24 4 L 24 2 Z M 0 11 L 0 13 L 24 13 L 24 11 Z M 0 20 L 0 22 L 24 22 L 24 20 Z"></path>
</svg> </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>    <SheetClose asChild>
        <Link className="backBtn" href="#"  onClick={handleCloseLinkClick} >  <SheetTitle> Menu</SheetTitle> </Link>
        </SheetClose >
        </SheetHeader>


    <div className="mobile-menu-items-div flex flex-col items-center h-screen gap-5">   
 
    <Separator />


        <div className="flex items-center justify-center p-4">
        <SheetClose asChild><Link className="menuLinkMobile" href="./"   onClick={handleCloseLinkClick}  >Home</Link> 
        </SheetClose></div>      
          <div className="flex items-center justify-center p-4">
        <SheetClose asChild><Link className="menuLinkMobile" href="./portfolio"  onClick={handleCloseLinkClick}  >Portfolio</Link> 
        </SheetClose></div>
        <div className="flex items-center justify-center p-4">
        <SheetClose asChild><Link className="menuLinkMobile" href="./react"   onClick={handleCloseLinkClick}   >React</Link> 
        </SheetClose></div>



</div>





  <div className="animate__animated animate__fadeIn  animate__delay-1s menu-footer  fixed bottom-0      gap-4   ">

  <SheetTitle>Newsletter</SheetTitle>
          <SheetDescription>
          <div className="h2_sub"> Join Our Mailing List! </div>
          </SheetDescription>
   
        <div className="grid gap-4 py-4">
          
        <Separator />
     <div className="footer-spacer"> &nbsp; </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>



          <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Submit</Button>
          </SheetClose>
      
        </SheetFooter>
        </div>  
        
        
        
          </div>
       
      </SheetContent>
    </Sheet>


    </div>
    </div>
 
    </>
  )
}
