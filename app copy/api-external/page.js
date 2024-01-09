'use client'
 

    import * as React from "react"
 import ApiExternalImage from "@/components/ApiExternalImage"
   
 import { useContext,useEffect,useRef } from 'react';
 import { TitleContext } from '@/components/TitleContext';
 import { Button } from "@/components/ui/button"
import Link from 'next/link'
  
 
 export default function Home() {
 
   const { setTitle } = useContext(TitleContext);
 
 
   const isTitleUpdated = useRef(false); // Track title updates
 
   useEffect(() => {
 
     setTitle('3rd Party Api');
 
       if (!isTitleUpdated.current) {
           isTitleUpdated.current = true;
           const menuMobileTitleElement = document.querySelector('.menuMobileTitle');
           if (menuMobileTitleElement) {
               menuMobileTitleElement.classList.add('animate__animated', 'animate__fadeIn'); // Adapt animation classes as needed
           }
       }
   }, []);
  
 
      return (

        <main className="scrollOnMobile flex flex-col items-center justify-center h-screen gap-5">   
 
 

      
        <div className="container mx-auto">
  <div className="flex flex-wrap -mx-4 ">

  <ApiExternalImage />

  </div>
</div>  




        </main>
      )
    }