'use client';
import Image from 'next/image'; // Import Image component for optimized image handling
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import LoadingComponent from '@/components/LoadingComponent';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"


const ImageSlider = ({ images }) => {

  const [isLoading, setIsLoading] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {

    setTimeout(  ()=>{setIsLoading(1);}, 2000) ;  
    setTimeout(  ()=>{setIsLoading(2);}, 3000) ; 

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >=1500); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially on component mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

    return (
      <>
<LoadingComponent loading={isLoading} />
<div className="mainDivInner  row-span-3 md:row-span-1 w-full py-2"> 
<h2 className="pageTitle CarouselTitle">Unsplash Api</h2>
<p className="quoted">Server Side Rendering</p>
</div>
        <div className="mainDivInner  row-span-3 md:row-span-1"> 
 

   

<Carousel   className="CarouseComponent   animate__animated animate__fadeIn " >
          <CarouselContent className="CarouselContentComponent -ml-1">


    


        {images.map((image, index) => (
          

          <CarouselItem key={index} className="CarouselItemComponent pl-1 md:basis-1/2 lg:basis-1/3">
     
     
  
     
          <div className="p-1">
          {isLargeScreen ? (
          <Dialog>
          <DialogTrigger> 

            <Card>
              <CardContent className="CardContentComponent flex aspect-square items-center justify-center p-6">
                <span className="text-2xl font-semibold">   <Image  className="CarouselItemImg"   key={index}      src={image.urls.regular} alt={`Image ${index + 1}`} width={400} height={300} priority  />    </span>
              </CardContent>
            </Card>


            </DialogTrigger>
          <DialogContent className="dialogImgContent">
            <DialogHeader>
              
              <DialogDescription>  <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl">
              <Image  className="CarouselDialogItemImg"   key={index}      src={image.urls.regular} alt={`Image ${index + 1}`} width={400} height={300} priority  />  
              </div>
    </div>   </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>



        ) : (

          <Card>
              <CardContent className="CardContentComponent flex aspect-square items-center justify-center p-6">
                <span className="text-2xl font-semibold">   <Image  className="CarouselItemImg"   key={index}      src={image.urls.regular} alt={`Image ${index + 1}`} width={400} height={300} priority  />    </span>
              </CardContent>
            </Card>

          )}

          </div>
        </CarouselItem>


        ))}


</CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
</div>
      </>
    );
  };
  
  export default ImageSlider;