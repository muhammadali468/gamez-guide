import JumpPeekingInValorant from "../../assets/videos/valorant/jump-peekin-in-valorant.mp4"
import { useEffect, useRef, useState } from "react"
import ReactPlayer from 'react-player'

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
}
const VideosModule = () => {
    const [videoDuration, setVideoDuration] = useState("")
    const videoRef = useRef(null);
    useEffect(() => {
        const videoEle = videoRef.current;
        if (videoEle) {
            videoEle.addEventListener('loadedmetadata', () => {
                const duration = videoEle.duration;
                setVideoDuration(formatTime(duration))
                console.log(videoEle.duration)
            });
        }
        // const video = document.getElementById('video');
        // const progressBar = document.getElementById('progress-bar');

        // // Add an event listener to update video playback when the progress bar changes
        // progressBar.addEventListener('input', () => {
        //     const currentTime = (progressBar.value / 100) * video.duration;
        //     video.currentTime = currentTime;
        // });

        // // Update the progress bar as the video plays
        // video.addEventListener('timeupdate', () => {
        //     const progress = (video.currentTime / video.duration) * 100;
        //     progressBar.value = progress;
        // });
    }, []);

    return (

        <section className="px-4 my-4">
            <h3 className="font-montserrat text-yellow-glow">Videos</h3>
            <video id="video" className="my-2" ref={videoRef} src={JumpPeekingInValorant} controls={true}></video>
            {/* <div class="progress-bar-container">
                <input id="progress-bar" type="range" min="0" max="100" value="0" />
            </div> */}
            <div className="flex justify-between items-center">
                <p className="text-xl uppercase text-white font-bold">Top 5 guns and skins</p>
                <data className="text-[#FFCB05] font-bold">{videoDuration}</data>
            </div>
        </section>
    )
}
export default VideosModule