'use client'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
 

import { useContext,useEffect,useRef } from 'react';
import { TitleContext } from '@/components/TitleContext';

 

export default function Home() {

  const { setTitle } = useContext(TitleContext);


  const isTitleUpdated = useRef(false); // Track title updates
  setTitle('React');

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
 
   
    

    <main className="scrollOnMobile flex flex-col items-center justify-center h-screen gap-10">   

<div className="mainDivInner w-full"> 
<h3 class=" ">React</h3>
<h2 className="pageTitle medHeight">Playground</h2>  

</div>

   <div className="mainDivInner w-full"> 

   <p className="quoted"><a href="https://nextjs.org/" target="_blank">Next.JS</a><br />+<br />
   <a href="https://ui.shadcn.com/" target="_blank">ShadCN UI</a></p>
  </div>

 



      <div className="container mx-auto text-center">
     <Link href="./api-wordpress"> <Button variant="custom" className="min-w-44  bg-black text-white">Client Side Api</Button>
      </Link></div>
      <div className="container mx-auto  text-center"> <Link href="./api-external-ssr"> <Button variant="custom" className="min-w-44 bg-black text-white">Server Side Api</Button>
      </Link></div>
     
 





    
</main>    

     

  )
}
