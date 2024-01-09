'use client'

 



import { useContext,useEffect,useRef } from 'react';
import { TitleContext } from '@/components/TitleContext';
import TabsForm from '@/components/TabsForm';

 

export default function Home() {

  const { setTitle } = useContext(TitleContext);


  const isTitleUpdated = useRef(false); // Track title updates

  useEffect(() => {

    setTitle('More');

      if (!isTitleUpdated.current) {
          isTitleUpdated.current = true;
          const menuMobileTitleElement = document.querySelector('.menuMobileTitle');
          if (menuMobileTitleElement) {
              menuMobileTitleElement.classList.add('animate__animated', 'animate__fadeIn'); // Adapt animation classes as needed
          }
      }
  }, []);
 

  return (

    <main className="flex flex-col items-center justify-center h-screen gap-10 ">   

 

   <div className="mainDivInner row-span-3 md:row-span-1"> 
  
  
 <TabsForm />
 
 
  </div>

   
 
<div>

  
      <div className="smallHeight footer-notes footer-notes1 row-span-3 md:row-span-1 p-3"><h4>josh@symphonicsoul.net</h4> </div>
      <div className="smallHeight footer-notes footer-notes2 row-span-3 md:row-span-1"> <h3>505.690.5781</h3> </div>
      </div>
   
</main>


     

  )
}
