import ReactPlayer from "react-player"
import JumpPeekingInValorant from "../../assets/videos/valorant/jump-peekin-in-valorant.mp4"
const ShortVideosModule = () => {
    return (
        <section className="px-4 my-4">
            <h3 className="font-montserrat text-yellow-glow">Shorts</h3>
            <div className="flex gap-4 items-center overflow-x-scroll scrollbar-hidden max-w-full">
                <ReactPlayer
                    height={256}
                    width={144}
                    className="my-2 rounded-xl border border-[#ED1C24] flex-shrink-0 h-64 w-36 object-cover" 
                    url={JumpPeekingInValorant}
                    playIcon={<p>play</p>}

                />

                <video className="my-2 rounded-xl border border-[#ED1C24] flex-shrink-0 h-64 w-36 object-cover" src={JumpPeekingInValorant} controls={false}></video>
                <video className="my-2 rounded-xl border border-[#ED1C24] flex-shrink-0 h-64 w-36 object-cover" src={JumpPeekingInValorant} controls={false}></video>
                <video className="my-2 rounded-xl border border-[#ED1C24] flex-shrink-0 h-64 w-36 object-cover" src={JumpPeekingInValorant} controls={false}></video>
            </div>
        </section>
    )
}
export default ShortVideosModule