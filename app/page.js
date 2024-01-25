'use client'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
 

import { useContext,useEffect,useRef } from 'react';
import { TitleContext } from '@/components/TitleContext';

 

export default function Home() {

  const { setTitle } = useContext(TitleContext);
  setTitle('Home');

  const isTitleUpdated = useRef(false); // Track title updates

  useEffect(() => {

 

      if (!isTitleUpdated.current) {
          isTitleUpdated.current = true;
          const menuMobileTitleElement = document.querySelector('.menuMobileTitle');
          if (menuMobileTitleElement) {
              menuMobileTitleElement.classList.add('animate__animated', 'animate__fadeIn'); // Adapt animation classes as needed
          }
      }
  }, []);
 


  
  return (
 
   
 

    <main className="scrollOnMobile gapProfile1 flex flex-col items-center justify-center h-screen gap-10 ">   

<div className="mainDivInner w-full"> 
<h2 className="pageTitle">Josh Gallegos<br />Playground</h2>  
</div>

   <div className="mainDivInner w-full"> 

   <p className="quoted"><span className="smallHeight">Welcome!<br /></span>
Made With React JS</p>
  </div>

 



      <div className="container mx-auto text-center">
     <Link href="./portfolio"> <Button variant="custom" className="bg-black text-white min-w-44">Client History</Button>
      </Link></div>
      <div className="container mx-auto  text-center"> <Link href="./react"> <Button  variant="custom" className="min-w-44 bg-black text-white">React JS</Button>
      </Link></div>
   
      <div className="container mx-auto  text-center"> <Link href="./latest"> <Button  variant="custom" className="min-w-44 bg-black text-white">Latest</Button>
      </Link></div>



      <div className="container mx-auto text-center"> <Link href="https://symphonicsoul.net"> <Button   variant="outline" >Services</Button>   </Link> </div>
    
  
</main>

     

  )
}
