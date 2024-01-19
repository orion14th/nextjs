'use client'
 

    import * as React from "react"
 
    import Image from 'next/image';  
 
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
          delay: 4000,
        }),
      ]}>
          <CarouselContent className="CarouselLargeComponent -ml-1">
            {myPictureArray.map((regularImageUrl, index) => (
              <CarouselItem key={index} className="CarouselItemComponent pl-1 sm:basis-1/1 md:basis-1/1 lg:basis-1/1">
                <div className="p-1">
                  <Card>
                    <CardContent className="CarouselLargeComponent  flex   items-center justify-center p-8">
                        <Image className="CarouselItemImg" src={regularImageUrl} alt={`Image ${index + 1}`} width={1500} height={700}    />    
                    </CardContent>
                  </Card>
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