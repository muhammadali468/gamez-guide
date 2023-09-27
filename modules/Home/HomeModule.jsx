import GamesSlider from "../../components/GamesSlider/GamesSlider"
import HomeBannerSlider from "./HomeBannerSlider"
import HomeStoriesList from "./HomeStoryList"
import Videos from "../../components/Videos/Videos"
import ShortsVideo from "../../components/Shorts/ShortsVideo"

const HomeModule = () => {
    
    return (
        <div className="py-4">
            <HomeBannerSlider />
            <HomeStoriesList />
            <GamesSlider />
            <Videos />
            <ShortsVideo />
        </div>
    )

}
export default HomeModule