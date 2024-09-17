'use client'

import React, { useRef, useEffect, useState } from 'react';
import './Transformacije.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

const Transformacije = () => {
    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [spaceBetween, setSpaceBetween] = useState(64);
    const [offset, setOffset] = useState(0);

    const goPrev = () => {
        console.log("click next")

        if (swiperRef.current) {
            swiperRef.current.slideNext();
            console.log("click next")
        }
    };

    // Function to go to the previous slide
    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };


    function isMobileDevice() {
        return window.innerWidth <= 800;
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
        <div className='transformacije-main'>
            <div className='transformacije-wrapper'>
                <div className='portfolio-header-center'>
                    <div className='header-wrapper'>
                    <p className='text-regular-semibold  black section-indicator alignself text-regular-semibold lighter'>Transformacije</p>
                    </div>
                    <div className='header-wrapper'>
                        <h3 className='heading-desktop-h3 black' >Prepričajte se sami!</h3>
                    </div>

                    <div className='header-wrapper'>
                        <h3 className='text-medium-normal black mrganbo' >Preglejte številne uspešne transformacije.</h3>
                    </div>
                </div>

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
                {/*<div className='swipers-arrows'>
                    <div className='arrows'>
                        <div className='button-next' onClick={goNext}><span className='arrow'></span></div>
                        <div className='button-prev' onClick={goPrev}><span className='arrow'></span></div>
                    </div>
                </div>*/}


            </div>
        </div>
    )
}

export default Transformacije
