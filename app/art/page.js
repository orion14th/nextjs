 
 import LocalExternalImageSSR from "@/components/LocalExternalImageSSR"
 

 async function getData() {

  const myPictureArray = ['/images/art/JPEG/passion.jpg','/images/art/JPEG/nightmare.jpg','/images/art/JPEG/apprentice.jpg','/images/art/JPEG/artisticintegrity.jpg','/images/art/JPEG/carosel.jpg','/images/art/JPEG/Colorful Dreams 1.jpg','/images/art/JPEG/cycles.jpg','/images/art/JPEG/Deepthought.jpg','/images/art/JPEG/Manwithamusicalsoul.jpg','/images/art/JPEG/pic0k.jpg','/images/art/JPEG/Moviefiend.jpg','/images/art/JPEG/warready.jpg','/images/art/JPEG/pic27.jpg','/images/art/JPEG/red.jpg','/images/art/JPEG/raw.jpg','/images/art/JPEG/pic6.jpg','/images/art/JPEG/Queenpuffysnow.jpg','/images/art/JPEG/Elanor_shynosisinGminor.jpg'];



  
 
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

  const myContentArray=['Tyranny of Passion','Nightmare','Apprentice','Artistic Integrity','Love Carosuel','Colorful Dreams','Cycles in Psychology','Deep Thought','Man With the Musical Soul','Dancing in the Rain','Movie Fiend','War Ready','Untitled','Night of the Red Vase','Raw Power','The Cellist','The Queen of Puffy Snow', 'Elanors Hynosis in G Minor'];
  
 
  const myLinksArray=['https://shop.symphonicsoul.net/collections/art','https://shop.symphonicsoul.net/collections/art','https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art'];
  


      return (


   
        <main className="CarouselMain flex flex-col items-center justify-center h-screen gap-5">  

 
        
  

 <LocalExternalImageSSR myTitle={myTitle} myPictureArray={images}  myPictureMobileArray={myPictureMobileArray} myContentArray={myContentArray} myLinksArray={myLinksArray} />
 
 

 </main>

      )
    }