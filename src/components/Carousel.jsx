import React, {useEffect } from 'react'
import {getData } from '../context/DataContext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
const Carousel = () => {
    const {data,fetchAllProducts}=getData();

    useEffect(()=>{
        fetchAllProducts();
    },[]);
    const SamplePrevArrow=((props)=>{
      const {className,style,onClick}=props;
      return (
        <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
          <AiOutlineArrowLeft className='arrows' style={{...style, display: "block",borderRadius:"50px",
            background:"#f53347", color:"white",padding:"2px",position:"absolute",left:"50px",
          }}/>
        </div>
      )
    })
    const SampleNextArrow=((props)=>{
      const {className,style,onClick}=props;
      return (
        <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:3}}>
          <AiOutlineArrowRight className='arrows' style={{...style, display: "block",borderRadius:"50px",
            background:"#f53347", color:"white",padding:"2px",position:"absolute",right:"50px",
          }}/>
        </div>
      )
    })
    const settings = {
    dots: false,
    autoplay:true,
    autoplaySpeed:2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next"/>,
    prevArrow: <SamplePrevArrow to="prev"/>
  };
  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        {data?.slice(0,8).map((item,index)=>{
            return <div key={index} className='bg-[linear-gradient(200deg,#000000,#1f1f1f,#3c3c3c,#1f1f1f,#000000)] bg-[length:400%_400%] animate-gradientFlow -z-10'>
                <div className='flex gap-10 justify-center h-[600px] items-center px-4'>
                    <div className='space-y-6'>
                    <h3 className='text-red-500 font-semibold font-sans text-xl'>Everything You Need, All in One Place.</h3>
                    <h1 className='text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white'>{item.title}</h1>
                    <p className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>{item.description}</p>
                    <button className='bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer'>Shop Now</button>
                    </div>
                    <div className='w-[300px]'>
                        <img src={item.image} alt={item.title} className=' w-[550px] hover:scale-105 transition-all' />
                    </div>
                </div>
            </div>
        })}
      </Slider>
    </div>
  )
}

export default Carousel