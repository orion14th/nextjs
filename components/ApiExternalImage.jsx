import React, { useState, useEffect } from 'react';
    import Image from 'next/image';  
 
    import { Card, CardContent } from "@/components/ui/card"
    import {
      Carousel,
      CarouselContent,
      CarouselItem,
      CarouselNext,
      CarouselPrevious,
    } from "@/components/ui/carousel"

  
    import useEmblaCarousel from 'embla-carousel-react'
 
    import LoadingComponent from '@/components/LoadingComponent';


 
 
    const ImageSlider = (props) => {


 
      const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });




      const [images, setImages] = useState([]);
   

      const [isLoading, setIsLoading] = useState(0);

      const [isImagesLoading, setImageLoading] = useState(0);


      // Fetch images using Next.js's fetch with revalidation
    
      const unsplashAccessKey = 'W4oBf7UVziIqyfjv9Qm6cLJH9Trzbec20B1DXUdfIDE'; // Replace with your Unsplash access key
      const numberOfImages = props.numberOfImages; // Default to 5 imag
      const numbersToPreload = props.numbersToPreload; // Default to 3 imag

 
       
 

function handleLoadedImages(){

  setTimeout(  ()=>{setIsLoading(1);}, 2000) ;  
  setTimeout(  ()=>{   setIsLoading(2);}, 3000) ; 
 
}

      const handleImageLoad=()=>{

        setImageLoading(isImagesLoading+1);

console.log(`loading number ${isImagesLoading}`);

        if(isImagesLoading==numbersToPreload){
   
          handleLoadedImages();

        }

      }
    
    useEffect(() => {
    
     
     const lastFetchTime = localStorage.getItem('lastFetchTime');
      const shouldFetch = lastFetchTime === null || Date.now() - Number(lastFetchTime) >= 60 * 1000;
    
    console.log(`shouldFetch ${shouldFetch}`);
    
      // Fetch images from API if not already in local storage
      if (!localStorage.getItem('images') || shouldFetch) {
        fetch(`https://api.unsplash.com/photos/random?count=${numberOfImages}&client_id=${unsplashAccessKey}`, {
          next: {
            revalidate: 60, // Revalidate every 3600 hour
          },
        })
          .then(async (response) => {

            

            const fetchedImages = await response.json();

      

            setImages(fetchedImages.map((image) => image.urls.regular));
            localStorage.setItem('images', JSON.stringify(fetchedImages)); // Store in local storage
            localStorage.setItem('lastFetchTime', Date.now());

// Set Loading to 1 to fade after 1 second, and 2 to hide after 2 seconds
const lastFetchTime = localStorage.getItem('lastFetchTime');
 

console.log(`shouldFetchxxxx ${lastFetchTime}`);
 


          })
          .catch((error) => console.error('Error fetching images:', error));
      } else {

console.log('images already in local storage');

        const storedImages = JSON.parse(localStorage.getItem('images'));
        setImages(storedImages.map((image) => image.urls.regular));
        
// Set Loading to 1 to fade after 1 second, and 2 to hide after 2 seconds
setTimeout(  ()=>{setIsLoading(1);}, 2000) ;  
setTimeout(  ()=>{setIsLoading(2);}, 3000) ; 
  
      }
    }, []);
    
      // ... rest of your component code (handleResize, swiperParams)



 


      return (

      <>
      
      <LoadingComponent loading={isLoading} />
     
      <div className="mainDivInner  row-span-3 md:row-span-1 w-full py-2"> 
<h2 className="pageTitle CarouselTitle">Unsplash Api</h2>           <p className="quoted">Client Side Rendering</p>
</div>
        <div className="mainDivInner  row-span-3 md:row-span-1"> 
 
 
        {images.length > 0 && (



        <Carousel  ref={emblaRef} className="CarouseComponent   animate__animated animate__fadeIn " >
          <CarouselContent className="CarouselContentComponent -ml-1">


          {images.map((regularImageUrl, index) => (
 
              <CarouselItem key={index} className="CarouselItemComponent pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="CardContentComponent flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">   <Image onLoad={handleImageLoad} className="CarouselItemImg" src={regularImageUrl} alt={`Image ${index + 1}`} width={400} height={300}    />    </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
         ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        )}



        
        </div>


        </>

   
      )
    }

export default ImageSlider;