'use client';



import {useState} from 'react';


import { Button } from "@/components/ui/button"
 

import DropFavArt from "@/components/DropFavArt"
import DropFavSoftware from "@/components/DropFavSoftware"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

 
const TabsForm = () => {



const [formData, setFormData] = useState({
    nameSoftware: "",
    emailSoftware: "",
    messageSoftware: "",
    nameArt: "",
    emailArt: "",
    messageArt: "",
});

const handleFormChange = (e) => {

    setFormData({
        ...formData,
        [e.target.id]: e.target.value,
    })
    
console.log(formData);

}


const handleFormSubmit = async () => {
    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
      } else {
        console.error('Error submitting form:', response.status);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };


    return(
<><Tabs defaultValue="software" className="w-[400px]">
<TabsList className="grid w-full grid-cols-2">
  <TabsTrigger value="software">Software</TabsTrigger>
  <TabsTrigger value="art">Art</TabsTrigger>
</TabsList>
<TabsContent value="software">
  <Card>
    <CardHeader>
    <span className="smallHeight">  <CardTitle className="p-2">Software</CardTitle> </span>
         <CardDescription>
      <span className="smallHeight">Interested in Learning More About Software Interests?  Please Provide Your Content and Interest      </span> </CardDescription>
     </CardHeader> 
    <CardContent className="space-y-2">
      <div className="space-y-1">
        <Label htmlFor="nameSoftware">Name</Label>
        <Input onChange={handleFormChange}  id="nameSoftware" defaultValue={formData.nameSoftware} value={formData.nameSoftware} />
      </div>
      <div className="space-y-1">
        <Label htmlFor="emailSoftware">Email</Label>
        <Input onChange={handleFormChange}  id="emailSoftware"  defaultValue={formData.emailSoftware} value={formData.emailSoftware} />
 
      </div>



      <div className="space-y-1">
      <Label htmlFor="topicSoftware">Topic</Label>

 
      <DropFavSoftware  />
        
      </div>

      <div className="space-y-1">
        <Label htmlFor="messageSoftware">Message</Label>
        <Input onChange={handleFormChange}  id="messageSoftware"  defaultValue={formData.messageSoftware} value={formData.messageSoftware} />
 
      </div>


    </CardContent>
    <CardFooter>      <div className="container mx-auto text-center">
      <Button className="min-w-44"  onClick={handleFormSubmit} >Send Message</Button></div>
    </CardFooter>
  </Card>
</TabsContent>
<TabsContent value="art">
  <Card>
    <CardHeader>
    <span className="smallHeight">   <CardTitle>Art</CardTitle>    </span> 
      <CardDescription>
      <span className="smallHeight"> Interested in Learning More About Software Interests?  Please Provide Your Content and Interest
    </span>  </CardDescription>
    </CardHeader>
    <CardContent className="space-y-2">
      <div className="space-y-1">
        <Label htmlFor="nameArt">Name</Label>
        <Input onChange={handleFormChange}  id="nameArt"   defaultValue={formData.nameArt} value={formData.messagnameArteSoftware}  />
      </div>
      <div className="space-y-1">
        <Label htmlFor="emailArt">Email</Label>
        <Input onChange={handleFormChange}  id="emailArt"   defaultValue={formData.emailArt} value={formData.emailArt} />
      </div>

     

      <div className="space-y-1">
      <Label htmlFor="topicArt">Topic</Label>

 
      <DropFavArt  />
        
      </div>

      <div className="space-y-1">
        <Label htmlFor="messageArt">Message</Label>
        <Input onChange={handleFormChange}  id="messageArt"   defaultValue={formData.messageArt} value={formData.messageArt} />
 
      </div>



    </CardContent>
    <CardFooter>       <div className="container mx-auto text-center">
      <Button onClick={handleFormSubmit} className="min-w-44">Send Message</Button></div>
    </CardFooter>
  </Card>
</TabsContent>
</Tabs> </>


)  


}

export default TabsForm;