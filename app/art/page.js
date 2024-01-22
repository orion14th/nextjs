 
 import LocalExternalImageSSR from "@/components/LocalExternalImageSSR"
 

 async function getData() {

  const myPictureArray = ['/images/art/passion.jpg','/images/art/nightmare_1024x1024@2x copy.jpg','/images/art/apprentice.jpg','/images/art/artisticintegrity.jpg'];


 
 
const imageList=myPictureArray;
 
   return imageList;
 
 
 }
 
 




 
 export default async function Home() {
 
 

  const images = await getData()
 
const myTitle='Art';

 // function replaceImagePaths(originalArray) {
   // return originalArray.map((picturePath) => {
    //  const newPath = picturePath.replace('/images/portfolio/JPEG/', '/images//portfolio/mobile/JPEG/');
    //  return newPath;
   // });
  //}
  
  //const myPictureMobileArray = replaceImagePaths(images);
   
  const myPictureMobileArray = images;

  const myContentArray=['Being You App','Zachary and Sons Homes','Netwaiter','Art in the Raw','Art in the Raw'];
  
  
  const myLinksArray=['https://beingyouapp.com/','https://zacharyandsons.com/','https://netwaiter.net/','https://artintheraw.net/','https://artintheraw.net/'];
  


      return (


   
        <main className="CarouselMain flex flex-col items-center justify-center h-screen gap-5">  

 
        
  

 <LocalExternalImageSSR myTitle={myTitle} myPictureArray={images}  myPictureMobileArray={myPictureMobileArray} myContentArray={myContentArray} myLinksArray={myLinksArray} />
 
 

 </main>

      )
    }