// ClientComponent.client.jsx
'use client';



import React, { useState, useEffect } from 'react';
import { RadioGroup } from '@headlessui/react'
import { Button } from './ui/button';
import Link from 'next/link'
import LoadingComponent from '@/components/LoadingComponent';

const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
]


export default function WordPressApiRadio() {
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState(plans[0]);
  const [isLoading, setIsLoading] = useState(0);

 

  useEffect(() => {
    // Fetch data from the JSONPlaceholder API
    fetch('https://learnchurn.com/wp-json/wp/v2/posts?categories=17')
      .then(response => response.json())
      .then(data => { setPosts(data);
        console.log(data);
        const isDataLoaded=1;
   
// Set Loading to 1 to fade after 1 second, and 2 to hide after 2 seconds

  setTimeout(  ()=>{setIsLoading(1);}, 1000) ;  
  setTimeout(  ()=>{setIsLoading(2);}, 2000) ;  
      }
        )
      .catch(error => console.error('Error fetching dataxx:', error));
  }, []);




  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const radioItems = document.querySelectorAll('.myRadioItem'); // Adjust selector as needed
      radioItems.forEach((item) => {
        item.classList.remove('animate__animated', 'animate__fadeIn');
      });
    }, 1000);
  
    return () => clearTimeout(timeoutId); // Clean up on component unmount
  }, [posts]); // Run effect only when posts data changes

  return (

<div className="container mx-auto">
<LoadingComponent loading={isLoading} />
<div className="grid grid-cols-1 py-4 ">
<div className="justify-self-center py-4"><h3>Select Post Below...</h3></div>



   
    </div>
 
    <div className="w-full px-4 ">
      <div className="mx-auto w-full max-w-md">
 
      <RadioGroup value={selected} onChange={setSelected}  >

          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
 
          {!posts || posts.length==0 && (




<div className="flex flex-col items-center justify-center   gap-10">   

<div className="  w-full"> 
<h2 className="pageTitle animate__animated animate__fadeIn">Loading...</h2>  
</div>
</div>

          )

}

            {posts.map((post) => (
              <RadioGroup.Option
                key={post.id}
                value={post.link}
                className={({ active, checked }) =>
                  `myRadioItem ${
                    active
                      ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300  '
                      : 'animate__animated animate__fadeIn'
                  }
                  ${checked ? 'bg-black text-white animate__animated animate__fadeIn' : 'bg-gray-200 '}
                   relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none  `
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between ">
                      <div className="flex items-center ">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {post.title.rendered.substring(0, 20)+'...'}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>
                              {post.type}/{post.status}
                            </span>{' '}
                            <span aria-hidden="true">&middot;</span>{' '}
                            <span>{post.date}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white ">
                          <CheckIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
      <div className="w-full px-4 py-4">
      <div className="mx-auto w-full max-w-md">
      <div className="justify-self-center py-6 text-center"><Button  className="min-w-44"  onClick={() => window.open(selected, '_blank')}  >View Selected</Button></div>
      </div>  </div> 
    </div>     </div>  
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}




