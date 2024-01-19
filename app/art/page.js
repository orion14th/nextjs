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

const myPictureArray = ['/images/art/passion.jpg','/images/art/nightmare_1024x1024@2x copy.jpg','/images/art/apprentice.jpg','/images/art/artisticintegrity.jpg','/images/art/carosel.jpg','/images/art/Colorful Dreams 1.jpg','/images/art/cycles.jpg','/images/art/Deepthought.png','/images/art/Manwithamusicalsoul.png','/images/art/pic0k.jpg','/images/art/Moviefiend.png','/images/art/warready.jpg','/images/art/pic27.jpg','/images/art/red.jpg','/images/art/raw.jpg','/images/art/pic6.jpg','/images/art/Queenpuffysnow.jpg','/images/art/Elanor_shynosisinGminor.png','/images/art/pm3.jpg'];

  const { setTitle } = useContext(TitleContext);


  const isTitleUpdated = useRef(false); // Track title updates
  setTitle('Art');

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
 <div className="mainDivInner hideOnMobile  row-span-3 md:row-span-1"> 
<h2 className="pageTitle  ">My Artwork</h2>
</div>
 

        <div className="mainDivInner  row-span-3 md:row-span-1"> 

        <Carousel className="CarouseComponent   animate__fadeIn "  plugins={[
        Autoplay({
          delay: 7000,
        }),
      ]}>
          <CarouselContent className="CarouselPortComponent -ml-1">
            {myPictureArray.map((regularImageUrl, index) => (
              <CarouselItem key={index} className="CarouselItemComponent pl-1 sm:basis-1/1 md:basis-1/1 lg:basis-1/2">
                <div className="p-1">
                  <Card>
                    <CardContent className="CarouselPortComponent  flex   items-center justify-center p-8">
                        <Image className="CarouselItemImg" src={regularImageUrl} alt={`Image ${index + 1}`} width={1500} height={800}      />    
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