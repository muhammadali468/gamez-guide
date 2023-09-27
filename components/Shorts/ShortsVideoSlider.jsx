// src/components/VerticalSlider.js
import React, { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegCirclePlay, FaRegCirclePause } from "react-icons/fa6"
import 'swiper/swiper-bundle.css';

const VerticalSlider = () => {
    // const videoRef = useRef(null);
    // window.addEventListener("scroll", () => {
    //     const video = videoRef.current;
    //     const options = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.5, // Adjust this threshold as needed
    //     };

    //     const handleIntersection = (entries) => {
    //         entries.forEach((entry) => {
    //             console.log(entry)
    //             if (entry.isIntersecting) {
    //                 video.play();
    //             } else {
    //                 video.pause();
    //             }
    //         });
    //     };

    //     const observer = new IntersectionObserver(handleIntersection, options);
    //     observer.observe(video);

    //     return () => {
    //         // Clean up the observer when the component unmounts
    //         observer.unobserve(video);
    //     };
    // })
    // useEffect(() => {
    //     const video = videoRef.current;
    //     const options = {
    //         root: null,
    //         rootMargin: '0px',
    //         threshold: 0.5, // Adjust this threshold as needed
    //     };

    //     const handleIntersection = (entries) => {
    //         entries.forEach((entry) => {
    //             console.log(entry)
    //             if (entry.isIntersecting) {
    //                 video.play();
    //             } else {
    //                 video.pause();
    //             }
    //         });
    //     };

    //     const observer = new IntersectionObserver(handleIntersection, options);
    //     observer.observe(video);

    //     return () => {
    //         // Clean up the observer when the component unmounts
    //         observer.unobserve(video);
    //     };
    // }, []);
    const videos = [
        {
            id: "video-1",
            // url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"

        },
        {
            id: "video-2",
            // url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"

        },
        {
            id: "video-3",
            url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
        },
    ]
    const [activeIdx, setActiveIdx] = useState(0)
    const [prevIdx, setPrevIdx] = useState(0)
    const handlePlay = (id) => {
        var videoEle = document.getElementById(id)
        console.log(videoEle)
        if (videoEle.paused) {
            videoEle.play()
        }
        else {
            videoEle.pause()
        }
    }
    const handlePlayer = (e) => {
        var currentVideo = document.getElementById(e.activeIndex)
        var previousVideo = document.getElementById(e.previousIndex)
        currentVideo.play()
        previousVideo.pause()
    }
    return (
        <Swiper
            onSlideChange={
                (e) => {
                    handlePlayer(e)
                }
            }
            direction='vertical'
            className="video-container h-screen">
            {videos.map((video, index) => {
                return (
                    <SwiperSlide
                        key={index}
                        className={`video-wrapper`}
                    >
                        <div className='h-full w-full'>
                            <video loop={true} id={index} className="my-2 flex-shrink-0 h-full w-full object-cover" src={video.url}></video>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
};
export default VerticalSlider
