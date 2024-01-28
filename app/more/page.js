'use client'

import Layout from "@/components/Layout"



import { useContext,useEffect,useRef } from 'react';
import { TitleContext } from '@/components/TitleContext';
import TabsForm from '@/components/TabsForm';
 
 

export default function Home() {

  const { setTitle } = useContext(TitleContext);
  setTitle('More');
 


  

  return (
    <Layout>
    <main className="flex flex-col items-center justify-center h-screen gap-10 ">   

 

   <div className="mainDivInner row-span-3 md:row-span-1"> 
  
  
 <TabsForm />
 
 
  </div>

   
 
<div>

  
      <div className="smallHeight footer-notes footer-notes1 row-span-3 md:row-span-1 p-3"><h4>josh@symphonicsoul.net</h4> </div>
      <div className="smallHeight footer-notes footer-notes2 row-span-3 md:row-span-1"> <h3>505.690.5781</h3> </div>
      </div>
   
</main>

</Layout>
     

  )
}
