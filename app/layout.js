'use client'
 

import {TitleProvider}from '@/components/TitleContext';

 
 

import { Inter } from 'next/font/google'
import './globals.css'
import 'animate.css';
 
 
import Hamburger from '@/components/Hamburger'
import FooterMain from '@/components/Footer'
 

const inter = Inter({ subsets: ['latin'] })



 

 
export default function RootLayout({ children }) {
 
 

  return (

    <html lang="en">
 
 

 
 
      <body className={inter.className}>
     
  
     
    <TitleProvider>
   
    <Hamburger />
 
   

 
 
  {children}

 
<FooterMain />
 
</TitleProvider>
 

 </body>
    </html>
   
  )
}
