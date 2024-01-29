'use client'
 

    import * as React from "react"
    import { useSearchParams  } from 'next/navigation';
 
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


    import LoadingComponent from '@/components/LoadingComponent';
    import Autoplay from "embla-carousel-autoplay"
     

    
import { useContext,useEffect,useRef,useState } from 'react';
import { TitleContext } from '@/components/TitleContext';

 

export default function Home() {

const myPictureArray = ['/images/art/JPEG/IMG_0300.jpg','','/images/art/ai-cat-3.jpg','','','/images/portfolio/JPEG/Z&S.jpg'];
//const myContentArray=['Artwork','Real-Time Drawing','Real-Time Drawing','Fun With Words','AI + Education','Rough Drafts','Content Creation','New Photos','Upcoming Shows','Collaborations','test2','test2','test2','test2','test2','test2','test2','test2','test2','test9'];

const myContentArray=['Artwork','Fun With Words','AI + Art','Real-Time Drawing','Real-Time Drawing','Website Revamp'];

const myDescriptionArray = ['I recently uploaded a photo of a fine art piece I created in a few AI tools that change the photo with various themes. Here is the output!','Let your group use their phones to add words to the master screen, and see translations in various font styles, colors, animations and languages. As AI a question or sugar coat your negative thoughts in any language you would like.','Let your group draw together to a master screen using their phones! In this example, a fullscreen photo of Santa Fe, New Mexico to draw within the skis of the land of enchantment.','Latest collection of the best artwork over the past years.','Let your group draw together to a master screen using their phones! Utilizing a black background, imagine a projection with the lights off as users draw from their phones, illuminating the projected area.','Latest portoflio website of Zachary and Sons Homes, luxury home builder. Improved design, hi-resultion images and video!'];

const myLinksArray=['./art','https://www.youtube.com/watch?v=3C35wsHrabg','https://www.instagram.com/reel/C2QVZXtPNxH/','https://www.youtube.com/watch?v=H3xQ5hfMD-w','https://www.youtube.com/watch?v=SZjz8t_d_gc','https://zacharyandsons.com/'];




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







  const { setTitle } = useContext(TitleContext);


  const isTitleUpdated = useRef(false); // Track title updates
  setTitle('Latest');

 

  const [isLoading, setIsLoading] = useState(0);

  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const [isLargeScreenStart, setIsLargeScreenStart] = useState(false);

  const [slideStart, setSlideStart] = useState(0);


  const searchParams = useSearchParams()
 
 
  const slideStartNum = searchParams.get('slideStart');
 
  const parsedId = parseInt(slideStartNum, 10); 


  useEffect(() => {

    if(slideStartNum){
    if(slideStartNum!=null){
    setSlideStart(parsedId);
  }else if(slideStartNum==null){
    setSlideStart(0);
  }
}

    const handleResize = () => {
      if(window.innerWidth >=700){
      setIsLargeScreen(true); // Adjust the breakpoint as needed
      }else if(window.innerWidth <700){
        setIsLargeScreen(false); // Adjust the breakpoint as needed
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call initially on component mount
    setIsLargeScreenStart(true);
    setTimeout(  ()=>{setIsLoading(1);}, 2000) ;  
    setTimeout(  ()=>{setIsLoading(2);}, 3000) ; 

  

    return () => window.removeEventListener('resize', handleResize);
  }, []);
 
      



  return (

    

 
    <main className="CarouselMain   scrollOnMobile flex flex-col items-center justify-center h-screen gap-5">  

 

<LoadingComponent loading={isLoading} />
 
{isLargeScreen ? (

<div className="mainDivInner hideOnMobile  row-span-3 md:row-span-1"> 
        <h2 className="pageTitle  ">Latest</h2>
        </div>

):( <></>   )  }

<div className="container CarouselContainer mx-auto">


<div className="mainDivInner    row-span-3 md:row-span-1"> 


{isLargeScreenStart ? (
 
    <Carousel className="CarouseComponent   animate__fadeIn "  plugins={!isLargeScreen ? ( [
        Autoplay({
          delay: 7000,
        }),
      ]):([]) }    opts={{
        startIndex: slideStart,
      
      }}  >

      
      <CarouselContent className="CarouselMixedSingleComponentOuter -ml-1">


        {myPictureArray.map((regularImageUrl, index) => (
          
          <CarouselItem key={index} className="CarouselItemComponent pl-1 sm:basis-1/1 md:basis-1/1 lg:basis-1/1">
            <div className="p-1">
            <div className="mainDivInner  row-span-3 md:row-span-1"> <h3 className="CarouselSubtitle">{myContentArray[index]}</h3>  </div>
   
  
          { myLinksArray[index].indexOf('http') >-1 ? (
   

   <Card> 

{ myLinksArray[index].indexOf('youtube') >-1 ? (

<CardContent className="CarouselMixedSingleComponent  flex   items-center justify-center p-8">
  
{isLargeScreen ? (


       
           
         
                    <iframe class="youTubeCarousel" width="400" height="300" src={`https://www.youtube.com/embed/${newArray2[index]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

             
          
     ):(    
      
  
 

      <a class="removeStyles" href={myLinksArray[index]} target="_blank"  >   <Image className="CarouselItemImg" src={newArray[index]} alt={`Image ${index + 1}`} width={1500} height={800}   priority   />     </a>
 
    
  )}  

</CardContent> 

):(
 
  <CardContent className="CarouselMixedSingleComponent  flex   items-center justify-center p-8">
  <a class="removeStyles" href={myLinksArray[index]} target="_blank"  >   <Image className="CarouselItemImg" src={regularImageUrl} alt={`Image ${index + 1}`} width={1500} height={800}   priority   />     </a>


  </CardContent> 

  )
  
  }
</Card>

              

    ) : (
      <Link key={index} href={myLinksArray[index]}>

<Card> 
                <CardContent className="CarouselMixedSingleComponent  flex   items-center justify-center p-8">
                    <Image className="CarouselItemImg" src={regularImageUrl} alt={`Image ${index + 1}`} width={400} height={300}  priority />    


                </CardContent> 
              </Card>


          </Link>
    )
   
  }

                    
<div className="CarouselLowerDiv row-span-3 md:row-span-1"    > 
    <p className="CarouselLowerP">{myDescriptionArray[index]}</p>
    </div>
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