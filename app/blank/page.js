'use client'
 

    import * as React from "react"
    import Link from 'next/link'
  
   

    import { useContext,useEffect,useRef } from 'react';
    import { TitleContext } from '@/components/TitleContext';
    
     
    
    export default function Home() {
    
      const { setTitle } = useContext(TitleContext);
      setTitle('Blank');
    
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

        <main className="flex flex-col items-center justify-center h-screen gap-5">   
 <div className="mainDivInner  row-span-3 md:row-span-1"> 
<h2 className="pageTitle">Blank</h2>
</div>
 
  
        </main>
      )
    }