'use client'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Layout from "@/components/Layout"

import { useContext,useEffect,useRef } from 'react';
import { TitleContext } from '@/components/TitleContext';

 

export default function Home() {

  const { setTitle } = useContext(TitleContext);


 
  setTitle('React');

 
  
  return (
 
    <Layout>
    

    <main className="scrollOnMobile flex flex-col items-center justify-center h-screen gap-10">   

<div className="mainDivInner w-full"> 
<h2 class="pageTitle ">React<br />Playground</h2>  

</div>

   <div className="mainDivInner w-full"> 

   <p className="quoted"><a href="https://nextjs.org/" target="_blank">Next.JS</a>&nbsp;+&nbsp;<a href="https://ui.shadcn.com/" target="_blank">ShadCN UI</a><span class="smallHeight"> + <br />  
   <a href="https://tailwindui.com/components" target="_blank">Tailwind CSS</a></span></p>
  </div>

 



      <div className="container mx-auto text-center">
     <Link href="./api-wordpress"> <Button variant="custom" className="min-w-44  bg-black text-white buttonAnimate1">Client Side Api</Button>
      </Link></div>
      <div className="container mx-auto  text-center"> <Link href="./api-external-ssr"> <Button variant="custom" className="min-w-44 bg-black text-white buttonAnimate1">Server Side Api</Button>
      </Link></div>
     
 
      <div className="container mx-auto  text-center"> <Link href="./more"> <Button variant="custom" className="min-w-44 bg-black text-white buttonAnimate1">Forms</Button>
      </Link></div>
     


      <div className="container mx-auto text-center smallHeight"> <Link href="./more"> <Button   variant="outline" >Ask a Question</Button>   </Link> </div>
    
  


    
</main>    

     
</Layout>
  )
}
