"use client";
import React, { useEffect } from "react";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePhotoWithDetails from "./components/HomePhotoWithDetails";
import Portfolio from "./components/Portfolio";
import SkillsSection from "./components/SkillsSection";
import Timeline from "./components/Timeline";
import WhatIDo from "./components/WhatIDo";

export default function Home() {
  const [showScrollButton , setShowScrollButton] = React.useState(false)
  useEffect(() => {
    const handleDomReady = () => {
      console.log('Document readyState:', document.readyState);

      if (document.readyState === 'interactive' || document.readyState === 'complete') {
        const preloader = document.querySelector('.preloader') as HTMLElement | null;
        if (preloader) {
          preloader.style.visibility = 'hidden';
        }

        setTimeout(() => {
          const contentsElement = document.getElementById('contents');
          if (contentsElement) {
            contentsElement.style.visibility = 'visible';
          }
        }, 1000);
      }
    };

    // Attach event listener for DOMContentLoaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleDomReady);
    } else {
      handleDomReady();
    } 
    return () => {
      document.removeEventListener('DOMContentLoaded', handleDomReady);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
  }, []);

  //  add bottom icon to scrool to top show when reach to middle 
 const scrollToTop = () => {
  typeof window !== "undefined" &&
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  console.log('showScrollButton:', showScrollButton);
  return (
    <>
      <div className="preloader" >
        <div className="preloader-animation">
          <span className="loader"></span>
        </div>
      </div>
      <div id="contents" style={{ visibility: 'hidden' }}>

        <Header />
        <main className="container mx-auto mt-8 px-24 mobile-space">
          <HomePhotoWithDetails id="about" />
          <WhatIDo id="what-i-do" />
          <Timeline id="edu-exp" />
          {/* <Certificates id="certificates" /> */}
          <SkillsSection id="skills" />
          <Portfolio id="portfolio" />
           
          {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 bg-green text-white p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        )}
        </main>
        <Footer />
      </div>
    </>
  );
}
