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
 
   
 

    <main className="gapProfile1 flex flex-col items-center justify-center h-screen gap-10 ">   

<div className="mainDivInner w-full"> 
<h2 className="pageTitle">Josh Gallegos<br />Playground</h2>  
</div>

   <div className="mainDivInner w-full"> 

   <p className="quoted"><span className="smallHeight">Welcome!<br /></span>
Made With React JS</p>
  </div>

 



      <div className="container mx-auto text-center">
     <Link href="./portfolio"> <Button variant="custom" className="bg-black text-white min-w-44">Portfolio</Button>
      </Link></div>
      <div className="container mx-auto  text-center"> <Link href="./react"> <Button  variant="custom" className="min-w-44 bg-black text-white">React JS</Button>
      </Link></div>
   
      <div className="container mx-auto  text-center"> <Link href="https://symphonicsoul.net"> <Button  variant="custom" className="min-w-44 bg-black text-white">Services</Button>
      </Link></div>



      <div className="container mx-auto text-center"> <Link href="./more"> <Button   variant="outline" >Ask a Question</Button>   </Link> </div>
    
  
</main>

     

  )
}
