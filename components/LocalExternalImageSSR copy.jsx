'use client'
 

    import * as React from "react"
    import { useSearchParams  } from 'next/navigation';

   
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

    import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogHeader,
      DialogTrigger,
    } from "@/components/ui/dialog"
    
    
import { useContext,useEffect,useRef,useState } from 'react';
import { TitleContext } from '@/components/TitleContext';

 


const ImageSlider = ({ myTitle,myPictureArray,myPictureMobileArray,myContentArray,myLinksArray,myDescriptionArray }) => {



  const { setTitle } = useContext(TitleContext);

  const isTitleUpdated = useRef(false); // Track title updates
  setTitle(myTitle);

  const [isLoading, setIsLoading] = useState(0);




  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isLargeScreenStart, setIsLargeScreenStart] = useState(false);

 
  const [slideStart, setSlideStart] = useState(0);



  // Function to extract YouTube ID from YouTube URL
  const extractYouTubeIdFromUrl = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
    return match ? match[1] : null;
  };

  // Function to generate YouTube thumbnail URL from ID
  const generateThumbnailUrl = (youtubeId) => {
    return `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;
  };

 
  // Modify URLs in myLinksArray to be YouTube thumbnail URLs
  const newArray = myLinksArray.map((originalUrl) => {
    const youtubeId = extractYouTubeIdFromUrl(originalUrl);
    if (youtubeId) {
      // Replace URL with YouTube thumbnail URL
      return generateThumbnailUrl(youtubeId);
    }
    // Return unchanged URL for non-YouTube entries
    return originalUrl;
  });


  const newArray2 = myLinksArray.map((originalUrl) => {
    const youtubeId = extractYouTubeIdFromUrl(originalUrl);
    if (youtubeId) {
      // Replace URL with YouTube thumbnail URL
      return youtubeId;
    }
    // Return unchanged URL for non-YouTube entries
    return originalUrl;
  });


  // Display the modified array
  console.log(newArray);
  console.log(newArray2);


  useEffect(() => {

   
    if(slideStartNum!=null){
      setSlideStart(parsedId);
    }else if(slideStartNum==null){
      setSlideStart(0);
    }

 
    const handleResize = () => {
      if(window.innerWidth >=700){
        setIsLargeScreen(true);    
      }else if(window.innerWidth <700){
        if(window.innerHeight<950){
        setIsLargeScreen(false);    
      }else if(window.innerHeight>950){
        setIsLargeScreen(true);    
      }
      console.log('2222222');
    }

  
    
      setIsLargeScreenStart(true);
      setTimeout(  ()=>{setIsLoading(1);}, 2000) ;  
      setTimeout(  ()=>{setIsLoading(2);}, 3000) ; 
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially on component mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
 
  const searchParams = useSearchParams()
 
 
  const slideStartNum = searchParams.get('slideStart');
  const parsedId = parseInt(slideStartNum, 10); 

 

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

<Carousel className="CarouseComponent   animate__fadeIn "  opts={{
    startIndex: slideStart,
  
  }}  >
<CarouselContent className="CarouselPortComponentOuter -ml-1">
{myPictureArray.map((regularImageUrl, index) => (
  
  <CarouselItem key={index} className="CarouselItemComponent pl-1 sm:basis-1/1 md:basis-1/1 lg:basis-1/1">
    <div className="p-1">
    <div className="mainDivInner  row-span-3 md:row-span-1"> <h3 className="CarouselSubtitle">{myContentArray[index]}</h3>  </div>
    { myLinksArray.length > 1 ? (
<>
  { myLinksArray[index].indexOf('http') >-1 ? (







<Card> 

{ myLinksArray[index].indexOf('youtube') >-1 ? (

<CardContent className="CarouselMixedSingleComponent  flex   items-center justify-center p-8">
  
{isLargeScreen ? (


       
           
         
                    <iframe class="youTubeCarousel" width="400" height="300" src={`https://www.youtube.com/embed/${newArray2[index]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

             
          
     ):(    
      
  
 

      <a class="removeStyles" href={myLinksArray[index]} target="_blank"  >   <Image className="CarouselItemImg dfd" src={newArray[index]} alt={`Image ${index + 1}`} width={1500} height={800}   priority   />     </a>
 
    
  )}  



</CardContent> 

):(




 

<>

{isLargeScreen ? ( 
         
<Card> 
<CardContent className="CarouselPortComponent  flex   items-center justify-center p-8">
<Image className="CarouselItemImg ddsddsd" src={regularImageUrl} alt={`Image ${index + 1}`}  width={1500} height={1500}   priority  />    


</CardContent> 
</Card>


):(
  <Dialog>  <DialogTrigger>       


<Card> 
<CardContent className="CarouselPortComponent  flex   items-center justify-center p-8">
<Image className="CarouselItemImg sssss" src={myPictureMobileArray[index]} alt={`Image ${index + 1}`} width={1500} height={1500}  priority  />    


</CardContent> 
</Card>



</DialogTrigger>
  <DialogContent className="dialogImgContent">
    <DialogHeader>
      
      <DialogDescription>  <div className="min-h-screen flex items-center justify-center">
      <div className="CarouselLowerDiv row-span-3 md:row-span-1"    > 
    <p className="CarouselLowerP">{myDescriptionArray[index]}</p>
    <a class="removeStyles" href={myLinksArray[index]} target="_blank"  > View</a>
    </div>

</div>   </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

 






)}


      </>

)}  </Card>

) : (


<Card> 
        <CardContent className="CarouselPortComponent  flex   items-center justify-center p-8">
            <Image className="CarouselItemImg fff" src={regularImageUrl} alt={`Image ${index + 1}`} width={1500} height={1500} priority  />    


        </CardContent> 
      </Card>

 




)

}
</>
) : (         


 
  <Card> 
        <CardContent className="CarouselPortComponent  flex   items-center justify-center p-8">
            <Image className="CarouselItemImg ddd" src={regularImageUrl} alt={`Image ${index + 1}`} width={1500} height={1500} priority  />    


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