 
 import LocalExternalImageSSR from "@/components/LocalExternalImageSSR"
 

 async function getData() {

  const myPictureArray = ['/images/art/passion.jpg','/images/art/nightmare_1024x1024@2x copy.jpg','/images/art/apprentice.jpg','/images/art/artisticintegrity.jpg','/images/art/carosel.jpg','/images/art/Colorful Dreams 1.jpg','/images/art/cycles.jpg','/images/art/Deepthought.png','/images/art/Manwithamusicalsoul.png','/images/art/pic0k.jpg','/images/art/Moviefiend.png','/images/art/warready.jpg','/images/art/pic27.jpg','/images/art/red.jpg','/images/art/raw.jpg','/images/art/pic6.jpg','/images/art/Queenpuffysnow.jpg','/images/art/Elanor_shynosisinGminor.png'];



  
 
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
  
  const myLinksArray='';
//  const myLinksArray=['#','#','#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#', '#'];
  


      return (


   
        <main className="CarouselMain flex flex-col items-center justify-center h-screen gap-5">  

 
        
  

 <LocalExternalImageSSR myTitle={myTitle} myPictureArray={images}  myPictureMobileArray={myPictureMobileArray} myContentArray={myContentArray} myLinksArray={myLinksArray} />
 
 

 </main>

      )
    }