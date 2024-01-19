'use client'
 

    import * as React from "react"
 
    import Image from 'next/image';  
    import Link from 'next/link'
 
    import { Card, CardContent } from "@/components/ui/card"
    import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
    } from "@/components/ui/carousel"

    import Autoplay from "embla-carousel-autoplay"
     

    
import { useContext,useEffect,useRef } from 'react';
import { TitleContext } from '@/components/TitleContext';

 

export default function Home() {

const myPictureArray = ['/images/portfolio/beingyou.png','/images/portfolio/freightway.png','/images/portfolio/freightway-2.png','/images/portfolio/Z&S.png','/images/portfolio/casalogy.png','/images/portfolio/netwaiter.png','/images/portfolio/grander.png','/images/portfolio/AITR.png','/images/portfolio/AITR-2.png','/images/portfolio/PhotoStudio.png','/images/portfolio/SS.png','/images/portfolio/wellpeople.png'];

const myContentArray=['Being You App','Freightway','Freightway','Zachary and Sons Homes','Casalogy','Netwaiter','Grander Foods','Art in the Raw','Art in the Raw','The Photography Studio','Symphonic Soul','Well People'];


const myLinksArray=['https://beingyouapp.com/','#','#','https://zacharyandsons.com/','https://casalogy.com/','https://netwaiter.net/','https://granderfoods.com/','https://artintheraw.net/','https://artintheraw.net/','https://thephotostudio.com/','https://symphonicsoul.net/','https://wellpeople.com'];

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
 


      
      return (

        <main className="flex flex-col items-center justify-center h-screen gap-5">   
 <div className="mainDivInner hideOnMobile row-span-3 md:row-span-1"> 
<h2 className="pageTitle">My Work</h2>
</div>
 

        <div className="mainDivInner  row-span-3 md:row-span-1"> 

      

    <Carousel className="CarouseComponent   animate__fadeIn "  plugins={[
    Autoplay({
      delay: 7000,
    }),
  ]}>
      <CarouselContent className="CarouselLargeComponent -ml-1">
        {myPictureArray.map((regularImageUrl, index) => (
          
          <CarouselItem key={index} className="CarouselItemComponent pl-1 sm:basis-1/1 md:basis-1/1 lg:basis-1/1">
            <div className="p-1">
            <div className="mainDivInner  row-span-3 md:row-span-1"> <h3 className="CarouselSubtitle">{myContentArray[index]}</h3>  </div>
   
  
          { myLinksArray[index].indexOf('http') >-1 ? (
   
<a class="removeStyles" href={myLinksArray[index]} target="_blank"  > 


{ myLinksArray[index].indexOf('youtube') >-1 ? (





        <Card> 
                <CardContent className="CarouselMixedSingleComponent  flex   items-center justify-center p-8">
         
                    <iframe class="youTubeCarousel" width="400" height="300" src={myLinksArray[index]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </CardContent> 
              </Card>


):(
  <Card> 
  <CardContent className="CarouselLargeComponent  flex   items-center justify-center p-8">
      <Image className="CarouselItemImg" src={regularImageUrl} alt={`Image ${index + 1}`} width={500} height={300}   />    


  </CardContent> 
</Card>
  )
  
  }


              </a>

    ) : (
      <Link key={index} href={myLinksArray[index]}>

<Card> 
                <CardContent className="CarouselLargeComponent  flex   items-center justify-center p-8">
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


        </div>
        </main>
      )
    }