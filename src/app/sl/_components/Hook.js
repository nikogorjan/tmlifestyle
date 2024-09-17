'use client'

import React, { useRef, useEffect, useState } from 'react';
import './Hook.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../store/colorSlice'; // Update the path as needed

const Hook = () => {
    const hookRef = useRef(null);
    const headerRef = useRef(null);
    const paragraphRef = useRef(null);
    const squareRef = useRef(null);

    const dispatch = useDispatch();


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger); // Ensure ScrollTrigger is registered
        const startPositionForHeroMain = window.innerWidth < 1000 ? "top top" : "center-=20% top";
        const endPositionForHeroMain = window.innerWidth < 1000 ? "top top" : "center top";
        ScrollTrigger.create({
            trigger: hookRef.current,
            start: startPositionForHeroMain,
            end: endPositionForHeroMain,
            onEnter: () => {
                gsap.to('body', { backgroundColor: 'black', duration: 0.3 });
                gsap.to([headerRef.current, paragraphRef.current, ], { color: 'white', duration: 0.3 });
                squareRef.current.classList.remove('lighter'); // Remove the 'lighter' class

                dispatch(setBackgroundColor('black'));


            },
            onLeaveBack: () => {
                gsap.to('body', { backgroundColor: 'white', duration: 0.3 }); // Change back to white
                gsap.to([headerRef.current, paragraphRef.current, ], { color: 'black', duration: 0.3 }); // Change text color back to black
                squareRef.current.classList.add('lighter'); // Add the 'lighter' class back

                dispatch(setBackgroundColor('white'));


            },
            markers: false // Disable markers for production
        });
    }, []);

    return (
        <div className='hook-main' ref={hookRef}>
            <div className='hook-row'>
                <div className='hook-left'>
                    <div className='hook-content-wrapper  margin-wrapper '>
                    <p className='text-regular-semibold  black section-indicator alignself text-regular-semibold lighter' ref={squareRef}>Začni zdaj!</p>

                        <h3 className='heading-desktop-h3 black' ref={headerRef}>Izberi svoj program že danes in začni dosegati svoje cilje!</h3>
                        <p className='text-medium-normal black' ref={paragraphRef}>Prilagojeni programi po vaših potrebah.</p>
                        <div className='buttons-row-hook'>
                            
                        </div>
                    </div>

                    

                </div>
                <div className='hook-right'>
                    <video
                        src="/Videos/marsel1.mp4"
                        autoPlay
                        muted
                        playsInline
                        loop
                        className='gym-video marselvideo'>
                    </video>

                    <video
                        src="/Videos/tjasa1.mp4"
                        autoPlay
                        muted
                        playsInline
                        loop
                        className='gym-video'>
                    </video>


                </div>
            </div>

           
        </div>
    )
}

export default Hook
