'use client'
 

    import * as React from "react"
 
    import Image from 'next/image';  
    import Link from 'next/link'
 
    import LoadingComponent from '@/components/LoadingComponent';

    import { Card, CardContent } from "@/components/ui/card"
    import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
    } from "@/components/ui/carousel"

    import Autoplay from "embla-carousel-autoplay"
     

    
import { useContext,useEffect,useRef,useState } from 'react';
import { TitleContext } from '@/components/TitleContext';

 

export default function Home() {

const myPictureArray = ['/images/portfolio/JPEG/beingyou.jpg','/images/portfolio/JPEG/Z&S.jpg','/images/portfolio/JPEG/Netwaiter.jpg','/images/portfolio/JPEG/AITR.jpg','/images/portfolio/JPEG/AITR-2.jpg','/images/portfolio/JPEG/PhotoStudio.jpg','/images/portfolio/JPEG/SS.jpg','/images/portfolio/JPEG/freightway.jpg','/images/portfolio/JPEG/freightway-2.jpg','/images/portfolio/JPEG/wellpeople.jpg','/images/portfolio/JPEG/casalogy.jpg','/images/portfolio/JPEG/grander.jpg'];


function replaceImagePaths(originalArray) {
  return originalArray.map((picturePath) => {
    const newPath = picturePath.replace('/images/portfolio/JPEG/', '/images/portfolio/mobile/JPEG/');
    return newPath;
  });
}

const myPictureMobileArray = replaceImagePaths(myPictureArray);
 



const myContentArray=['Being You App','Zachary and Sons Homes','Netwaiter','Art in the Raw','Art in the Raw','The Photography Studio','Symphonic Soul','Freightway','Freightway','Well People','Casalogy','Grander Foods'];


const myLinksArray=['https://beingyouapp.com/','https://zacharyandsons.com/','https://netwaiter.net/','https://artintheraw.net/','https://artintheraw.net/','https://thephotostudio.com/','https://symphonicsoul.net/','https://freightway.co/','https://freightway.co/','https://wellpeople.com','https://casalogy.com/','https://granderfoods.com/'];

  const { setTitle } = useContext(TitleContext);


  const isTitleUpdated = useRef(false); // Track title updates
  setTitle('Portfolio');

  useEffect(() => {



      if (!isTitleUpdated.current) {
          isTitleUpdated.current = true;
          const menuMobileTitleElement = document.querySelector('.menuMobileTitle');
          if (menuMobileTitleElement) {
              menuMobileTitleElement.classList.add('animate__animated', 'animate__fadeIn'); // Adapt animation classes as needed
          }
      }
  }, []);
 
  const [isLoading, setIsLoading] = useState(0);

  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isLargeScreenStart, setIsLargeScreenStart] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >=700){
        setIsLargeScreen(true);    
      }else if(window.innerWidth <700){
        setIsLargeScreen(false);    
      }
     
      setIsLargeScreenStart(true);
      setTimeout(  ()=>{setIsLoading(1);}, 2000) ;  
      setTimeout(  ()=>{setIsLoading(2);}, 3000) ; 
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially on component mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);
 

      
      return (

        
        <main className="CarouselMain flex flex-col items-center justify-center h-screen gap-5">   
        <LoadingComponent loading={isLoading} />
        
 
 <div className="flex flex-wrap -mx-4 "> 
<h2 className="pageTitle CarouselTitle">My Work</h2>
</div>

<div className="container CarouselContainer mx-auto">

<div className="mainDivInner    row-span-3 md:row-span-1"> 

        {isLargeScreenStart ? (
     
    <Carousel className="CarouseComponent   animate__fadeIn "  >
      <CarouselContent className="CarouselPortComponentOuter -ml-1">
        {myPictureArray.map((regularImageUrl, index) => (
          
          <CarouselItem key={index} className="CarouselItemComponent pl-1 sm:basis-1/1 md:basis-1/1 lg:basis-1/1">
            <div className="p-1">
            <div className="mainDivInner  row-span-3 md:row-span-1"> <h3 className="CarouselSubtitle">{myContentArray[index]}</h3>  </div>
   
  
          { myLinksArray[index].indexOf('http') >-1 ? (
   
<a class="removeStyles" href={myLinksArray[index]} target="_blank"  > 

{isLargeScreen ? ( 

  <Card> 
  <CardContent className="CarouselItemComponent  flex   items-center justify-center p-8">
      <Image className="CarouselItemImg" src={regularImageUrl} alt={`Image ${index + 1}`} width={1500} height={800}   loading="eager"  />    


  </CardContent> 
</Card>
 
  
):(

  <Card> 
  <CardContent className="  CarouselPortComponent  flex   items-center justify-center p-8">
      <Image className="CarouselItemImg" src={myPictureMobileArray[index]} alt={`Image ${index + 1}`} width={1024} height={600}   loading="eager"  />    


  </CardContent> 
</Card>

)}


              </a>

    ) : (
      <Link key={index} href={myLinksArray[index]}>

<Card> 
                <CardContent className="CarouselPortComponent  flex   items-center justify-center p-8">
                    <Image className="CarouselItemImg" src={regularImageUrl} alt={`Image ${index + 1}`} width={400} height={300}   />    


                </CardContent> 
              </Card>


          </Link>
    )
   
  }

                    
  
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        ):( <></>  ) }
      </div> 
        </div> 
        </main>
      )
    }