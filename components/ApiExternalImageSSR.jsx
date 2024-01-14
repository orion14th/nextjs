'use client';
import Image from 'next/image'; // Import Image component for optimized image handling
 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const ImageSlider = ({ images }) => {
    return (
      <>

<div className="mainDivInner  row-span-3 md:row-span-1 w-full py-2"> 
<h2 className="pageTitle">Unsplash Api</h2>
</div>
        <div className="mainDivInner  row-span-3 md:row-span-1"> 
 
<Carousel   className="CarouseComponent   animate__animated animate__fadeIn " >
          <CarouselContent className="CarouselContentComponent -ml-1">


    
     

        {images.map((image, index) => (
          

          <CarouselItem key={index} className="CarouselItemComponent pl-1 md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card>
              <CardContent className="CardContentComponent flex aspect-square items-center justify-center p-6">
                <span className="text-2xl font-semibold">   <Image  className="CarouselItemImg"   key={index}      src={image.urls.regular} alt={`Image ${index + 1}`} width={400} height={300} priority  />    </span>
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
      </>
    );
  };
  
  export default ImageSlider;