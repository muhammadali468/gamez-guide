import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

const TikTokVideoPlayer = ( {videos} ) => {
  const [activeVideo, setActiveVideo] = useState(null);
//   const videoRefs = useRef([]);
  const videoRefs = useRef(Array(videos.length).fill(null));
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: videoContainerRef.current,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const videoIndex = videoRefs.current.indexOf(entry.target);
        if (entry.isIntersecting) {
          setActiveVideo(videoIndex);
        } else if (activeVideo === videoIndex) {
          setActiveVideo(null);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    videoRefs.current.forEach((videoRef) => {
      observer.observe(videoRef);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeVideo]);
  
  return (
    <div className="video-container" ref={videoContainerRef}>
      {videos.map((video, index) => (
        <div
          key={index}
          className={`video-wrapper ${index === activeVideo ? 'active' : ''}`}
        >
          <ReactPlayer
            ref={(player) => (videoRefs.current[index] = player)}
            url={video.url}
            playing={index === activeVideo}
            width="100%"
            height="100%"
            controls={false}
          />
        </div>
      ))}
    </div>
  );
};

export default TikTokVideoPlayer;
