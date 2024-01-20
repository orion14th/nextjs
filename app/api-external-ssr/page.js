 
 import ApiExternalImageSSR from "@/components/ApiExternalImageSSR"
 

 async function getData() {

      // Fetch images using Next.js's fetch with revalidation
    
      const unsplashAccessKey = 'W4oBf7UVziIqyfjv9Qm6cLJH9Trzbec20B1DXUdfIDE'; // Replace with your Unsplash access key
 

   const response = await fetch(`https://api.unsplash.com/photos/random?count=5&client_id=${unsplashAccessKey}`);
 
 

            

    const data = await response.json();

 
console.log(11111);
console.log(data);
console.log(222);
const imageList=data;
 
   return imageList;
 
 
 }
 
 




 
 export default async function Home() {
 
 

  const images = await getData()
 
 
      return (


   
        <main className="scrollOnMobile flex flex-col items-center justify-center h-screen gap-5">   
 
 

      
        <div className="container mx-auto">
  <div className="flex flex-wrap -mx-4 ">
  

 <ApiExternalImageSSR images={images}   />
 
 
 </div>
 

</div>

 </main>

      )
    }