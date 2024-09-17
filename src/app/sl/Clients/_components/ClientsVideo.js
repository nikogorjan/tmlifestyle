'use client'

import React, { useRef, useEffect, useState } from 'react';
import './ClientsVideo.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

const ClientsVideo = () => {
    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [spaceBetween, setSpaceBetween] = useState(64);
    const [offset, setOffset] = useState(0);


    function isMobileDevice() {
        return window.innerWidth <= 999;
    }

    useEffect(() => {
        // This code will only run on the client-side
        const handleResize = () => {
            setOffset(window.innerWidth * 0.05); // Update based on current window width
        };

        handleResize(); // Set initial value when component mounts

        // Set up an event listener for future resize events
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setSlidesPerView(isMobileDevice() ? 1.5 : 6);
            setSpaceBetween(isMobileDevice() ? window.innerWidth * 0.05 : 16);
        };

        handleResize();  // Set the initial values based on current window size
        window.addEventListener('resize', handleResize);  // Adjust on window resize

        return () => {
            window.removeEventListener('resize', handleResize);  // Clean up
        };
    }, []);

    return (
        <div className='about-video-main padding-main'>
            <div className='about-video-wrapper'>
                <video
                    src="/Videos/clients.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    className='about-video desktop'>
                </video>

                <video
                    src="/Videos/clients.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    className='about-video mobile'>
                </video>



            </div>

            <div className='about-under-wrapper'>
                <div className='padder'></div>
                <p className=' black section-indicator alignself text-regular-semibold'>Uspešne zgodbe</p>

                <div className='about-under-video'>
                    <div className='under-left'>
                        <h3 className='heading-desktop-h3'>Potovanje do boljšega zdravja, večje moči in večje samozavesti!</h3>

                    </div>

                    <div className='under-right'>
                        <p className='text-medium-normal'>Vsaka transformacija je edinstvena, tako kot posameznik, ki jo doživi. Z nama so številni posamezniki našli svojo moč, izboljšali zdravje in spremenili svoj način življenja. Spodaj si lahko ogledate njihove navdihujoče preobrazbe, ki dokazujejo, da je s pravim pristopom in podporo vse mogoče. </p>

                    </div>
                </div>



                {/*<div className='remmer'></div>

                <div className='one-bullets-row'>
                    <div className='one-bullet'>
                        <div className='one-bullet-wrapper'>
                            <img src="/images/message-square-check.svg" className='relume-icon' alt='heros' />
                            <h6 className='heading-desktop-h6 highlighted-header'>Sva dobra poslušalca</h6>
                            <p className='text-regular-normal'>Dan danes je tempo življenja zelo hiter in ljudje vedno znova pozabljamo na pogovor, ki pa je ključen za uspešno pot. S tem razlogom strmiva in spodbujava stranke k pogovoru in sva dobra poslušalca. </p>

                        </div>
                    </div>
                    <div className='one-bullet'>
                        <div className='one-bullet-wrapper'>
                            <img src="/images/heart-circle.svg" className='relume-icon' alt='heros' />
                            <h6 className='heading-desktop-h6 highlighted-header'>Sva razumevajoča</h6>
                            <p className='text-regular-normal'>Sva razumevajoča in skupaj s stranko vedno najdeva neko pot, ki ustreza vsem in je optimalna za napredek stranke.</p>

                        </div>
                    </div>
                    <div className='one-bullet'>
                        <div className='one-bullet-wrapper'>
                            <img src="/images/analyse.svg" className='relume-icon' alt='heros' />
                            <h6 className='heading-desktop-h6 highlighted-header'>Popolna predanost</h6>
                            <p className='text-regular-normal'>Vsaki stranki se posvetiva 100% kar pomeni da dobi vsaka stranka svoj individualen trening plan in plan prehrane.</p>

                        </div>
                    </div>
                </div>*/}



            </div>



            <div className='hero-swipper nopad'>
                

                <div className='swipper-wrapper'>
                    <Swiper
                        slidesPerView={slidesPerView}
                        spaceBetween={spaceBetween} // Space between slides
                        slidesOffsetAfter={offset}
                        slidesOffsetBefore={offset}
                        centeredSlides={false}
                        mousewheel={true}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => swiperRef.current = swiper}
                        className="testimonials-swiper"
                        ref={swiperRef}

                    >
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt1.webp' />

                        </SwiperSlide>

                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt2.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt15.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt4.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/z15.webp' />

                        </SwiperSlide>

                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt5.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt6.webp' />

                        </SwiperSlide>
                        
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt8.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt9.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt10.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt11.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt12.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt13.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt14.webp' />

                        </SwiperSlide>
                        
                    </Swiper>

                </div>


            </div>




        </div>
    )
}

export default ClientsVideo
