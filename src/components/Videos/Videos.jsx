import JumpPeekingInValorant from "../../assets/videos/valorant/jump-peekin-in-valorant.mp4"
import { useEffect, useRef, useState } from "react"
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
}
const VideosModule = () => {
    const [videoDuration, setVideoDuration] = useState("")
    const videoRef = useRef(null);
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener('loadedmetadata', () => {
                const duration = video.duration;
                setVideoDuration(formatTime(duration))
                console.log(video.duration)
            });
        }
    }, []);
    
    return (

        <div className="container">
            <h3 className="font-montserrat text-yellow-glow">Videos</h3>
            <video className="my-2" ref={videoRef} src={JumpPeekingInValorant} controls={true}></video>
            <div className="flex justify-between items-center">
                <p className="text-xl uppercase text-white font-bold">Top 5 guns and skins</p>
                <data className="text-[#FFCB05] font-bold">{videoDuration}</data>
            </div>
        </div>
    )
}
export default VideosModule