'use client';
import { useRef } from 'react';
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

import { TitleContext } from '@/components/TitleContext'  // Import the hook;
 
 

export default function Hamburger() {

  const { pageTitle } = useContext(TitleContext);
 


  function getFileName(str) {
    const parts = str.split("/"); // Split by slashes
    return parts.length > 1 ? parts[parts.length - 1] : str; // Return last part or original string
  }


  function formatString(str) {
    
    if(str=="") { const formatted="Home"; 
  
    return formatted;
  
  
  }else if(str!=""){



    const formatted = str
      .replace(/-/g, " ") // Replace dashes with spaces
      .split(" ") // Split into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join back into a string

    return formatted;
  }

  }
  
 


    const fileName1 = getFileName(pageTitle);
    const formattedString = formatString(fileName1);

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
        <Link className="menuLink" href="./more"  onClick={handleCloseLinkClick} >More</Link>
      </div>  </div>



    <div className="menu-mobile container mx-auto p-6">


  <div className=" menu-mobile-title grid grid-cols-1 fixed text-center w-full">

    <div id="menuMobileTitle" className="text-center py-2">{formattedString}</div>
   
  </div>
 

    <div className='menu-mobile-main flex justify-start'>
 
 


    <Sheet  ref={sheetRef}>
      <SheetTrigger asChild>
        <Button variant="outline"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"  viewBox="0 0 24 24">
<path d="M 0 2 L 0 4 L 24 4 L 24 2 Z M 0 11 L 0 13 L 24 13 L 24 11 Z M 0 20 L 0 22 L 24 22 L 24 20 Z"></path>
</svg> </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
   
        </SheetHeader>


    <div className="mobile-menu-items-div flex flex-col items-center h-screen gap-5">   
 
    <Separator />


        <div className="flex items-center justify-center p-4">
        <SheetClose asChild><Link className="menuLinkMobile" href="./"   onClick={() => handlePageChange('Home') }  >Home</Link> 
        </SheetClose></div>      
          <div className="flex items-center justify-center p-4">
        <SheetClose asChild><Link className="menuLinkMobile" href="./portfolio"   onClick={() => handlePageChange('Portfolio') }  >Portfolio</Link> 
        </SheetClose></div>
        <div className="flex items-center justify-center p-4">
        <SheetClose asChild><Link className="menuLinkMobile" href="./more"   onClick={() => handlePageChange('More') }   >More</Link> 
        </SheetClose></div>



</div>





  <div className="menu-footer  fixed bottom-0      gap-4   ">

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
