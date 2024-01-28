 
 import LocalExternalImageSSR from "@/components/LocalExternalImageSSR"


 async function getData() {

  const myPictureArray = ['/images/portfolio/JPEG/beingyou.jpg','/images/portfolio/JPEG/Z&S.jpg','/images/portfolio/JPEG/Netwaiter.jpg','/images/portfolio/JPEG/AITR.jpg','/images/portfolio/JPEG/AITR-2.jpg','/images/portfolio/JPEG/PhotoStudio.jpg','/images/portfolio/JPEG/SS.jpg','/images/portfolio/JPEG/freightway.jpg','/images/portfolio/JPEG/freightway-2.jpg','/images/portfolio/JPEG/wellpeople.jpg','/images/portfolio/JPEG/casalogy.jpg','/images/portfolio/JPEG/grander.jpg'];

 
 
const imageList=myPictureArray;
 
   return imageList;
 
 
 }
 
 




 
 export default async function Home() {
 
 

  const images = await getData()
 
const myTitle='Portfolio';

  function replaceImagePaths(originalArray) {
    return originalArray.map((picturePath) => {
      const newPath = picturePath.replace('/images/portfolio/JPEG/', '/images/portfolio/mobile/JPEG/');
      return newPath;
    });
  }
  
  const myPictureMobileArray = replaceImagePaths(images);
   

  
  const myContentArray=['Being You App','Zachary and Sons Homes','Netwaiter','Art in the Raw','Art in the Raw','The Photography Studio','Symphonic Soul','Freightway','Freightway','Well People','Casalogy','Grander Foods'];
  const myDescriptionArray=['ReactJS App + Wordpress Backend.','Luxury Homebuilder Portfolio Website, Social Media and YouTube','Web Design & SEO Optimization','Podcast Content Directory','Podcast Content Directory','Local Photographer Portfolio Website','Information Website','Ride Share + Cargo Delivery','Ride Share + Cargo Delivery','Web Desgin and E-Commerce','Smart Home Platform Web App','Online Natural Food Directory Web App'];
  
  const myLinksArray=['https://beingyouapp.com/','https://zacharyandsons.com/','https://netwaiter.net/','https://artintheraw.net/','https://artintheraw.net/','https://thephotostudio.com/','https://symphonicsoul.net/','https://freightway.co/','https://freightway.co/','https://wellpeople.com','https://casalogy.com/','https://granderfoods.com/'];
  


      return (


  
         

<main className="scrollOnMobile CarouselMain flex flex-col items-center justify-center h-screen gap-5"> 
        
  

 <LocalExternalImageSSR myTitle={myTitle} myPictureArray={images}  myPictureMobileArray={myPictureMobileArray} myContentArray={myContentArray} myLinksArray={myLinksArray} myDescriptionArray={myDescriptionArray} />
 
 

 </main>
 
      )
    }