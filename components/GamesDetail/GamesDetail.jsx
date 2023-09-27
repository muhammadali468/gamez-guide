import HomeStoriesList from "../../modules/Home/HomeStoryList"
import Videos from "../../components/Videos/Videos"
import ShortsVideo from "../../components/Shorts/ShortsVideo"
const GamesDetail = () => {
    return (
        <div className="py-4">
            <HomeStoriesList />
            <Videos />
            <ShortsVideo />
        </div>
    )
}
export default GamesDetail