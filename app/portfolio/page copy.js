 
 import LocalExternalImageSSR from "@/components/LocalExternalImageSSR"
 

 async function getData() {

  const myPictureArray = ['/images/portfolio/JPEG/beingyou.jpg','/images/portfolio/JPEG/Z&S.jpg','/images/portfolio/JPEG/Netwaiter.jpg','/images/portfolio/JPEG/AITR.jpg','/images/portfolio/JPEG/AITR-2.jpg','/images/portfolio/JPEG/PhotoStudio.jpg','/images/portfolio/JPEG/SS.jpg','/images/portfolio/JPEG/freightway.jpg','/images/portfolio/JPEG/freightway-2.jpg','/images/portfolio/JPEG/wellpeople.jpg','/images/portfolio/JPEG/casalogy.jpg','/images/portfolio/JPEG/grander.jpg'];

 
 
const imageList=myPictureArray;
 
   return imageList;
 
 
 }
 
 




 
 export default async function Home() {
 
 

  const images = await getData()
 
 
      return (


   
        <main className="scrollOnMobile flex flex-col items-center justify-center h-screen gap-5">   
 
 

      
        <div className="container mx-auto">
  <div className="flex flex-wrap -mx-4 ">
  

 <LocalExternalImageSSR images={images}   />
 
 
 </div>
 

</div>

 </main>

      )
    }