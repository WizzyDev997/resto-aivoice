"use client"

import { FaTwitter, FaTelegramPlane } from 'react-icons/fa'; // Importer les icônes
import Image from 'next/image'
import Link from 'next/link'
import infoCards from './libs/InfoCards'
import { LucideIcon } from 'lucide-react'
import React, { useState } from "react";
import { ReactElement } from 'react'
import TypingEffect from './components/typing';
import PieActiveArc from './components/pie'; 
import pricingCards from './libs/PricingCards'
import AutohideSnackbar from './components/AutohideSnackbar'; // Import your Snackbar component
import styled from '@emotion/styled';


// Define a styled header component with margin
const RoadmapHeader = styled.h4`
  font-size: 2.5rem; // Example size, adjust as needed
  font-weight: bold;
  color: white;
  margin-bottom: 40px; // Increase bottom margin for spacing
`;

export default function Home() {
  const startDemo = async () => {
    try {
      const response = await fetch('http://localhost:5000/start_demo', { method: 'POST' });
      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.error('Error starting demo:', error);
    }
  };
  

  return (
<main className='flex min-h-screen h-fit flex-col items-center justify-center relative text-white'>
      <Navbar />

      <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden">
  <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
    <div className='flex flex-col gap-2'>
      <h1 className='text-4xl font-black md:text-6xl'>
        <span>The </span>
        <span className="Nextgen">Next Gen</span>
        <br />
        <span>AI-Booking Built for <span className="Nextgen">Restaurants</span></span>
      </h1>
    </div>

{/* Nouvelle section */}
<ul className='max-w-md list-none text-sm md:text-base text-white font-bold pl-5 space-y-2'>
  <li className='flex items-center'>
    <svg className='w-5 h-5 text-white mr-2' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
    AI-voice agent Available 24/7
  </li>
  <li className='flex items-center'>
    <svg className='w-5 h-5 text-white mr-2' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
    Local phone number
  </li>
  <li className='flex items-center'>
    <svg className='w-5 h-5 text-white mr-2' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
    Access to your restaurant's agenda
  </li>
  <li className='flex items-center'>
    <svg className='w-5 h-5 text-white mr-2' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
    Book, cancel and edit reservations
  </li>
  <li className='flex items-center'>
    <svg className='w-5 h-5 text-white mr-2' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
    Decision-making based on availability.
  </li>
</ul>


    <p className='max-w-md text-sm md:text-base text-white font-bold text-center'>
    <span>Replaces Salesforce, chatbots, and call agents.</span>

    </p>

    <div className='w-full flex items-center justify-center md:justify-start gap-4'>
      <button className='w-48 h-12 text-sm sm:text-base rounded bg-white text-black hover:bg-fuchsia-700 hover:text-white transition-colors'>
        Get $Voice
      </button>
      <a href="tel:+12562977667" className='w-48 h-12 text-sm sm:text-base rounded bg-black text-white hover:bg-fuchsia-700 hover:text-white transition-colors flex items-center justify-center text-center'>
        Call Demo<br/>+1 (256) 297-7667
      </a>
    </div>


        </div>

        <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
        <div className="video-wrapper" style={{ width: '50%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <video 
        className="responsive-video"
        src="/Call.mp4"
        autoPlay
        loop
        muted
        playsInline
        controls
        style={{ overflow: "clip", objectFit: "cover" }} 
      ></video>

        </div>
      </div>
      </header>

      <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
        <div className='absolute -z-10 h-full w-full overflow-hidden'>
          <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl"/>
        </div>
        <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
          <h3 className='text-4xl md:text-5xl font-bold'>No More Time Wasted!</h3>
          <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
            {infoCards.map((infoCard) => {
              return (
                <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
                  <p className="text-sm sm:text-base text-center md:text-left" style={{ textAlign: 'center' }}>{infoCard.bodyText}</p>
                </InfoCard>
              )
            })}
          </div>
        </div>
      </section>
    
      <section 
  id="pricing" 
  className="h-fit min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8"
  style={{ background: 'url(/roadbg.svg)', backgroundSize: 'cover' }}
>
  <div style={{ marginBottom: '25px' }}> {/* Adjust the margin as needed */}
    <TypingEffect />
  </div>
  <div className='grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center h-fit w-full max-w-3xl gap-8'>
    {pricingCards.map((pricingCard) => {
      return (
        <PricingCard 
          oneliner={pricingCard.oneliner} 
          title={pricingCard.title} 
          price={pricingCard.price} 
          benefits={pricingCard.benefits} 
          key={pricingCard.id} // 'key' is for React list rendering, not a prop for PricingCard
          id={pricingCard.id}  // Now explicitly passing 'id'
        />
      )
    })}
  </div>
</section>
<section 
        id="pie-chart" 
        className="w-full flex flex-col items-center justify-center p-10"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h4 className="Tokenomics mb-15">Tokenomics</h4>
        <p className="text-white-500 text-base mb-11">Total Supply : 400 millions Token</p>
        <div className="w-full flex justify-center">
          <PieActiveArc />
        </div>
      </section>

      <div style={{
  display: 'flex',
  justifyContent: 'center', // Centre horizontalement
  alignItems: 'center', // Centre verticalement
  height: '100px', // Ajustez la hauteur selon l'espace désiré
  marginTop: '20px', // Espace au-dessus
  marginBottom: '20px' // Espace en dessous
}}>
  <AutohideSnackbar />
</div>
<div className="social-icons" style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        marginBottom: '20px' // Espace en dessous des icônes
      }}>
        <a href="https://x.com/NextGen_VoiceAi" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={45} color="#1DA1F2" />
        </a>
        <a href="https://t.me/+ozXnvBTR0phiZjlk" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane size={45} color="#0088cc" />
        </a>

      </div>


      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-0 w-full">
  <div className="p-4 md:py-8 w-full">
    <div className="flex flex-wrap justify-between items-center w-full">
      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.svg" className="h-12" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">NextGen Voice AI</span>
        </a>
      </div>
      {/* Nouvel élément div pour le texte "Call demo +1 (256) 297-6776" */}
      <div className="flex-grow text-center">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400"><strong>Call demo +1 (256) 297-7667</strong></span>
      </div>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
        <li><a href="#" className="hover:underline mr-4 md:mr-6">Home</a></li>
        <li><a href="https://nextgen-voice-ai.gitbook.io/nextgen-voice-ai/" target="_blank" rel="noopener noreferrer" className="hover:underline mr-4 md:mr-6">Docs</a></li>
        <li><a href="#" className="hover:underline mr-4 md:mr-6">Roadmap</a></li>
        <li><a href="#" className="hover:underline">Tokenomics</a></li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 dark:border-gray-700 lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 NextGen Voice AI™. All Rights Reserved.</span>
  </div>
</footer>


    </main>
  );
}

interface IInfoCardProps {
  title:string;
  Icon:LucideIcon;
  children:ReactElement<any,any>
}

function InfoCard({title,Icon,children}:IInfoCardProps) {
  return (
    <div className='w-full h-80  flex flex-col justify-around items-center p-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className="p-4 bg-fuchsia-700 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className='text-lg font-bold sm:text-xl'>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  )
}


<><section id="pie-chart" className="w-full flex flex-col items-center justify-center p-10">
    <h4 className="text-4xl md:text-5xl font-bold text-white">Tokenomics</h4>
    <div className="w-full flex justify-center">
      <PieActiveArc />
    </div>
  </section>
</>


interface IPricingCardProps {
  title: string;
  price: string;
  benefits: string[];
  oneliner: string;
  id: number;
}


function PricingCard({title, price, benefits, oneliner, id}: IPricingCardProps) {
  return (
    <div className='h-fit w-full  flex flex-col p-8 gap-8 bg-gray-900 rounded bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className='flex flex-col gap-2'>
        <h4 className='price-title'>{price}</h4>
        <div>
          <h6 className='text-3xl font-bold'>{title}</h6>
          <p className='text-sm text-zinc-500'>{oneliner}</p>
        </div>
      </div>
      <ul className='flex flex-col w-full gap-4'>
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center mb-2">
            <span className="bullet bg-purple-500"></span> {/* Additional class for styling */}
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}


function Navbar() {
  return (
    <div className='w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        {/* Logo and title section */}
        <div className='flex items-center gap-4'>
          <Image
            src="/logo.svg" // Adjust the path as needed
            alt="Logo"
            width={50}
            height={50}
            priority
          />
          <h6 className="logo">NextGen Voice AI</h6>       
           </div>
          
           <ul className='flex gap-8'>
  <li><Link href="#home" className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base'>Home</Link></li>
  <li><a href="https://nextgen-voice-ai.gitbook.io/nextgen-voice-ai/" target="_blank" rel="noopener noreferrer" className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base'>Docs</a></li>
  <li><Link href="#pricing" className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base'>Roadmap</Link></li>
  <li><Link href="#pie-chart" className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base'>Tokenomics</Link></li>
</ul>

      </div>
    </div>
  )
}


