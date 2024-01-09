'use client'
 

    import * as React from "react"
 import WordPressApiRadio from "@/components/WordPressApiRadio"
   


 import { useContext,useEffect,useRef } from 'react';
 import { TitleContext } from '@/components/TitleContext';
 
  
 
 export default function Home() {
 
   const { setTitle } = useContext(TitleContext);
   setTitle('Wordpress Api');
 
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

        <main className="scrollOnMobile flex flex-col items-center justify-center h-screen ">   
 <div className="mainDivInner  row-span-3 md:row-span-1"> 
<h2 className="pageTitle">WordPress Rest Api</h2>
</div>
 

      
        <div className="container mx-auto">
  <div className="flex flex-wrap -mx-4 ">

  <WordPressApiRadio />

  </div>
</div>  
        </main>
      )
    }