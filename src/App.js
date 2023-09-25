// import { useState } from "react";
import { BrowserRouter as Routes, Route, Switch, Link } from 'react-router-dom';
import Header from "./components/Header";
// import Stories from 'react-insta-stories';
// import ShortsVideo from "./components/Shorts/ShortsVideo";
// import StoriesList from "./components/Stories/StoriesList";
import GamesContainer from "./components/GamesContainer/GamesContainer";
import GamesDetail from "./components/GamesDetail/GamesDetail";
import VideosModule from "./components/Videos/Videos";
import ShortVideosModule from "./components/Shorts/ShortsVideo";
import ShortsVideoSlider from "./components/Shorts/ShortsVideoSlider"
import VerticalSlider from './components/Shorts/TestShorts';
function App() {
  // const stories = [
  //   "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
  //   "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
  //   "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
  //   "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",

  // ]
  const videos = [
    // { url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    // { url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    { url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    { url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
  ]
  return (
    <div className="App">
      <div className="">
        {/* <Header /> */}
        <main className="min-h-screen">

          {/* <StoriesList/> */}
          {/* <GamesContainer /> */}
          {/* <GamesDetail/> */}
          {/* <VideosModule/> */}
          <ShortsVideoSlider />
          
          {/* <VerticalSlider/> */}
          {/* <VerticalSlider videos={videos}/> */}
          {/* <Stories
            stories={stories}
            defaultInterval={1500}
            width={432}
            height={768}
            progressStyles={{background:"red"}}
          /> */}
        </main>
      </div>
    </div>
  );
}

export default App;
