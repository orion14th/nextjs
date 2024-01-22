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

  
    
import { useContext,useEffect,useRef,useState } from 'react';
import { TitleContext } from '@/components/TitleContext';

 


const ImageSlider = ({ myTitle,myPictureArray,myPictureMobileArray,myContentArray,myLinksArray }) => {


  const { setTitle } = useContext(TitleContext);

  const isTitleUpdated = useRef(false); // Track title updates
  setTitle(myTitle);

  const [isLoading, setIsLoading] = useState(0);

  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isLargeScreenStart, setIsLargeScreenStart] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >=700){
        setIsLargeScreen(true);    
      }else if(window.innerWidth <700){
        if(window.innerHeight<950){
        setIsLargeScreen(false);    
      }else if(window.innerHeight>950){
        setIsLargeScreen(true);    
      }
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
      <>


<LoadingComponent loading={isLoading} />
 
{isLargeScreen ? (

<div className="mainDivInner hideOnMobile  row-span-3 md:row-span-1"> 
        <h2 className="pageTitle  ">{myTitle}</h2>
        </div>

):( <></>   )  }

 
         
        <div className="container CarouselContainer mx-auto"> 
               
<div className="mainDivInner    row-span-3 md:row-span-1"> 

{isLargeScreenStart ? (

<Carousel className="CarouseComponent   animate__fadeIn "  >
<CarouselContent className="CarouselPortComponentOuter -ml-1">
{myPictureArray.map((regularImageUrl, index) => (
  
  <CarouselItem key={index} className="CarouselItemComponent pl-1 sm:basis-1/1 md:basis-1/1 lg:basis-1/1">
    <div className="p-1">
    <div className="mainDivInner  row-span-3 md:row-span-1"> <h3 className="CarouselSubtitle">{myContentArray[index]}</h3>  </div>
    { myLinksArray.length > 1 ? (
<>
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
</>
) : (         



  <Card> 
        <CardContent className="CarouselPortComponent  flex   items-center justify-center p-8">
            <Image className="CarouselItemImg" src={regularImageUrl} alt={`Image ${index + 1}`} width={400} height={300}   />    


        </CardContent> 
      </Card>


)   }

    </div>
  </CarouselItem>
))}
</CarouselContent>
<CarouselPrevious />
<CarouselNext />
</Carousel>
):( <></>  ) }
</div>  </div>
      </>
    );
  };
  
  export default ImageSlider;