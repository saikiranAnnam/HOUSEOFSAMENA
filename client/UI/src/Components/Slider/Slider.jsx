import React from 'react'
import { useState } from 'react';
import "./Slider.scss"
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";


const Slider = () => {


    // use state hook
    const [currentSlide, setCurrentSlide] = useState(0)


    // slider image data
    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];


    // arrow functionality logic
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev-1)
    };
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev+1)
    };
    
    return (
    <div className='slider'>
        <div className="container" style={{transform : `translateX(-${currentSlide * 101}vw)`}}>
            <img src={data[0]} alt="best outfit" srcset="" />
            <img src={data[1]} alt="best outfit" srcset="" />
            <img src={data[2]} alt="best outfit" srcset="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon/>
            </div>
        </div>

    </div>
  )
}

export default Slider