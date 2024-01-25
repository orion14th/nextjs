 
 import LocalExternalImageSSR from "@/components/LocalExternalImageSSR"
 

 async function getData() {

  const myPictureArray = ['/images/art/JPEG/passion.jpg','/images/art/JPEG/nightmare.jpg','/images/art/JPEG/apprentice.jpg','/images/art/JPEG/artisticintegrity.jpg','/images/art/JPEG/carosel.jpg','/images/art/JPEG/Colorful Dreams 1.jpg','/images/art/JPEG/cycles.jpg','/images/art/JPEG/Deepthought.jpg','/images/art/JPEG/Manwithamusicalsoul.jpg','/images/art/JPEG/pic0k.jpg','/images/art/JPEG/Moviefiend.jpg','/images/art/JPEG/warready.jpg','/images/art/JPEG/pic27.jpg','/images/art/JPEG/red.jpg','/images/art/JPEG/raw.jpg','/images/art/JPEG/pic6.jpg','/images/art/JPEG/Queenpuffysnow.jpg','/images/art/JPEG/Elanor_shynosisinGminor.jpg',''];



  
 
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

  const myContentArray=['Tyranny of Passion','Nightmare','Apprentice','Artistic Integrity','Love Carosuel','Colorful Dreams','Cycles in Psychology','Deep Thought','Man With the Musical Soul','Dancing in the Rain','Movie Fiend','War Ready','Untitled','Night of the Red Vase','Raw Power','The Cellist','The Queen of Puffy Snow', 'Elanors Hynosis in G Minor','Interactive Art'];
  
  const myDescriptionArray=['Oil on Canvas','Acrylic on Canvas','Acrylic on Canvas','Oil on Canvas','Charcoal on Paper','Pastel on Paper','Oil on Canvas','Oil on Canvas','Oil on Canvas','Oil on Canvas','Acrylic on Canvas','Acrylic on Canvas','Oil on Canvas','Oil on Canvas','Charcoal on Paper','Pastel on Paper','Charcoal on Paper','Charcoal on Paper','Let your group use their phones to add words to the master screen, and see translations in various font styles, colors, animations and languages. As AI a question or sugar coat your negative thoughts in any language you would like.'];
  
  const myLinksArray=['https://shop.symphonicsoul.net/collections/art','https://shop.symphonicsoul.net/collections/art','https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art', 'https://shop.symphonicsoul.net/collections/art','https://www.youtube.com/watch?v=3C35wsHrabg'];
  


      return (


   
        <main className="scrollOnMobile CarouselMain flex flex-col items-center justify-center h-screen gap-5">  

 
        
  

 <LocalExternalImageSSR myTitle={myTitle} myPictureArray={images}  myPictureMobileArray={myPictureMobileArray} myContentArray={myContentArray} myLinksArray={myLinksArray} myDescriptionArray={myDescriptionArray} />
 
 

 </main>

      )
    }