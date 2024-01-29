'use client';
 
import Link from "next/link";

 

  
  import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

  import MyDrawer from "@/components/MyDrawer"

export default function FooterMain() {


 

return(
<ToggleGroup type="single"  >

   
<div className="footer     grid grid-cols-3 md:grid-cols-3 gap-4 w-full">
  <div className="flex items-center justify-center p-4"> 
  
 
  
    <Link href="./latest" class="footerButtons buttonAnimate1"> <ToggleGroupItem   value="option1"   >  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
  <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z" />
</svg><div className="footBtnOuter">
<span className="footerTxt">Latest</span></div></ToggleGroupItem> </Link> 

 


  </div>
  <div className="flex items-center justify-center p-4">
    
 
    
    
    <Link href="./" class="footerButtons buttonAnimate1"><ToggleGroupItem value="b"  >  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
  <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
</svg>
   <div className="footBtnOuter">
<span className="footerTxt">Hme</span></div></ToggleGroupItem> </Link> 

 


 </div>
  <div className="flex items-center justify-center p-4">   <ToggleGroupItem value="c"  >
 </ToggleGroupItem> 

<MyDrawer />
</div>
 

</div>


<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path fill="#ffffff" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>

</ToggleGroup>
)
}