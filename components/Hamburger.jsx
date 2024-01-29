'use client';
import { useRouter } from 'next/navigation';
import { useRef,useContext,useState } from 'react';
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

 
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
 

import {TitleContext}from '@/components/TitleContext';

 
 
function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button className="backBtn iiii" onClick={handleBack}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path fill-rule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
  </svg></button>
  );
}


 

export default function Hamburger() {
 
  


 
  const [isLoading, setIsLoading] = useState(2);

const [formData, setFormData] = useState({
    name: "",
    email: "",
});





  const sheetRef = useRef(null);


  const handleCloseLinkClick = () => {

    if (sheetRef.current) {
      sheetRef.current.close();
    }


    

  };

 

  const handleFormChange = (e) => {



    setFormData({
        ...formData,
        [e.target.id]: e.target.value,
    })
    
console.log(formData);

}


const handleFormSubmit = async () => {
  
  setIsLoading(0);


    try {
      const response = await fetch('/api/submitNewsletterForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setTimeout(  ()=>{setIsLoading(1);}, 1000) ;  
        setTimeout(  ()=>{setIsLoading(3);}, 3000) ; 
        
      } else {
        console.error('Error submitting form:', response.status);
        setTimeout(  ()=>{setIsLoading(1);}, 1000) ;  
        setTimeout(  ()=>{setIsLoading(3);}, 3000) ; 
       
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };





 

  return (

    <>
 
    <div className="menu-main grid grid-cols-1 lg:grid-cols-3 gap-4 hidden md:grid fixed top-0 w-full">
 

    <div className="flex items-center justify-center p-4">
      <Link className="menuLink buttonAnimate2" href="./"  onClick={handleCloseLinkClick} >Software</Link>
      </div>
      <div className="flex items-center justify-center p-4">
        <Link className="menuLink buttonAnimate2" href="./more"  onClick={handleCloseLinkClick} >Collaborate</Link>
      </div>
      <div className="flex items-center justify-center p-4">
        <Link className="menuLink buttonAnimate2" href="./art"  onClick={handleCloseLinkClick} >Art</Link>
      </div> 
      
      
      
      
       </div>

      

    <div className="menu-mobile container mx-auto p-6">


  <div className=" menu-mobile-title grid grid-cols-1 fixed text-center w-full">

    <div  className="menuMobileTitle text-center py-2">{useContext(TitleContext).title}</div>
   
  </div>
 

    <div className=' menu-mobile-main flex justify-start'>
 
    <div id="backBtnDiv1" className="backBtnDiv flex items-center justify-center p-4">

    <BackButton />

       
      </div> 


    <Sheet  ref={sheetRef}>
      <SheetTrigger asChild>
        <Button variant="outline"  ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6"  >
<path d="M 0 2 L 0 4 L 24 4 L 24 2 Z M 0 11 L 0 13 L 24 13 L 24 11 Z M 0 20 L 0 22 L 24 22 L 24 20 Z"></path>
</svg> </Button>
      </SheetTrigger>
      <SheetContent side={'left'}>
        <SheetHeader>    <SheetClose asChild>
        <Link className="backBtn" href="#"  onClick={handleCloseLinkClick} >  <SheetTitle> Menu</SheetTitle> </Link>
        </SheetClose >
        </SheetHeader>


    <div className="mobile-menu-items-div flex flex-col items-center h-screen gap-5">   
 
 <br />


        <div className="flex items-center justify-center p-4">
        <SheetClose asChild><Link className="menuLinkMobile" href="./"   onClick={handleCloseLinkClick}  >Software</Link> 
        </SheetClose></div>      
          <div className="flex items-center justify-center p-4">
        <SheetClose asChild><Link className="menuLinkMobile" href="./more"  onClick={handleCloseLinkClick}  >Collaborate</Link> 
        </SheetClose></div>
        <div className="flex items-center justify-center p-4">
        <SheetClose asChild><Link className="menuLinkMobile" href="./art"   onClick={handleCloseLinkClick}   >Art</Link> 
        </SheetClose></div>

      


</div>





  <div className="animate__animated animate__fadeIn  animate__delay-1s menu-footer  fixed bottom-0      gap-4   ">

  


 
          {isLoading<2 && (



<div className="flex flex-col items-center justify-center  gap-5 ">   

<div className="mainDivInner row-span-3 md:row-span-1"> 

  

</div>
</div>

)}



<Dialog>

{isLoading==2 && (
<>
<SheetTitle>Newsletter</SheetTitle>
<SheetDescription>
<div className="h2_sub h2_newsletter"> Join Our Mailing List! </div>
</SheetDescription>

<div className="grid gap-4 py-4">

<Separator />
<div className="footer-spacer"> &nbsp; </div>


          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name"  placeholder='your name' tabIndex="-1"  value={formData.name} onChange={handleFormChange} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" placeholder='email@mgmail.com' tabIndex="-1"   value={formData.email} onChange={handleFormChange}  className="col-span-3" />
          </div>

<SheetFooter>
<SheetClose asChild>
     <DialogTrigger asChild>
  <Button type="submit" onClick={handleFormSubmit} >Submit</Button>
  </DialogTrigger>
</SheetClose>

</SheetFooter>
     
</div>  
        
</>
       

     )}



{isLoading==3 && (
 
<SheetFooter>
 
 
</SheetFooter>
 
       

     )}

   
    
  
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Thank You!</DialogTitle>
          <DialogDescription>
          You wil be included in our next additon of Newsletters.
          </DialogDescription>
        </DialogHeader>
    
      
      </DialogContent>
    </Dialog>




 

 
</div>
    
       
      </SheetContent>
    </Sheet>


    </div>
    </div>
 
    </>
  )
}
