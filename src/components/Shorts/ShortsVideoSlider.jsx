// src/components/VerticalSlider.js
import React, { useEffect, useState, useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import JumpPeekingInValorant from "../../assets/videos/valorant/jump-peekin-in-valorant.mp4"

const VerticalSlider = () => {
    const videoRef = useRef(null);
    window.addEventListener("scroll",()=>{
        const video = videoRef.current;
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust this threshold as needed
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(video);

        return () => {
            // Clean up the observer when the component unmounts
            observer.unobserve(video);
        };
    })
    useEffect(() => {
        const video = videoRef.current;
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust this threshold as needed
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(video);

        return () => {
            // Clean up the observer when the component unmounts
            observer.unobserve(video);
        };
    }, []);
    const videos = [
        { url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
        { url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
        { url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    ]
    return (
        <Swiper
        onSlideChange={()=>console.log("first")}
        direction='vertical'
        className="video-container h-screen">
            {videos.map((video, index) => (
                <SwiperSlide
                    key={index}
                    className={`video-wrapper`}
                >
                    <div className='h-full w-full'>
                        <video ref={videoRef} className={`video${index} my-2 flex-shrink-0 h-full w-full object-cover`} src={video.url} controls={false}></video>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default VerticalSlider;

