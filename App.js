// import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
// import Stories from 'react-insta-stories';
// import ShortsVideo from "./components/Shorts/ShortsVideo";
import StoriesList from "./components/Stories/StoriesList";
import GamesContainer from "./components/GamesContainer/GamesContainer";
import GamesDetail from "./components/GamesDetail/GamesDetail";
import VideosModule from "./components/Videos/Videos";
import ShortVideosModule from "./components/Shorts/ShortsVideo";
import ShortsVideoSlider from "./components/Shorts/ShortsVideoSlider"
import VerticalSlider from './components/Shorts/TestShorts';
import Navigation from './components/Navigation';
import NavTab from './components/Navigation';
import HomeModule from './modules/Home/HomeModule';
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
    <div className="App bg-black max-w-lg mx-auto">
      <BrowserRouter>
        <div className="py-16">
          <Header />
          <main className="min-h-screen">
            <Routes>
              <Route path="/" Component={HomeModule} />
              <Route path="/shorts" Component={ShortsVideoSlider} />
              <Route path="/games" Component={GamesContainer} />
              <Route path="/game-detail" Component={GamesDetail} />
            </Routes>
            {/* <GamesContainer /> */}
            {/* <GamesDetail/> */}
            {/* <VideosModule/> */}
            {/* <ShortsVideoSlider /> */}
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
          <NavTab />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
