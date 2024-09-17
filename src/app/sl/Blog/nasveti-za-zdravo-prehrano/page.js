'use client'


import React, { useEffect } from 'react'

import Footer from "../../../../../public/Components/Footer/Footer";
import Navbar from "../../../../../public/Components/Navbar/Navbar.client";
import PulsingCircle from "../../../../../public/Components/PulsingCircle/PulsingCircle";
import Izguba from "./_components/izguba";
import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../store/colorSlice'; // Update the path as needed
import Shadow from '../../Plans/_components/Shadow';



export default function Plans() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Scroll to the top of the page on component mount (page refresh)
    window.scrollTo(0, 0);
    dispatch(setBackgroundColor('white'));

}, []);
    return (
      <div>
        <Navbar/>
        <Shadow/>
        <Izguba/>
        <Footer/>
        <PulsingCircle/>
      </div>
    );
  }
  