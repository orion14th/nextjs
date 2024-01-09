'use client'
 

    import * as React from "react"
 
  
 
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
    
      const { setTitle } = useContext(TitleContext);
      setTitle('Latest');
    
      const isTitleUpdated = useRef(false); // Track title updates
    
   

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
 <div className="mainDivInner  row-span-3 md:row-span-1"> 
<h2 className="pageTitle">Latest</h2>
</div>
 

        <div className="mainDivInner  row-span-3 md:row-span-1"> 

        <Carousel className="CarouseComponent   animate__fadeIn "  plugins={[
        Autoplay({
          delay:5000,
        }),
      ]}>
          <CarouselContent className="CarouselContentComponent -ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="CarouselItemComponent pl-1 md:basis-1/1 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="CardContentComponent flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">{index + 1}</span>
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