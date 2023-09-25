import JumpPeekingInValorant from "../../assets/videos/valorant/jump-peekin-in-valorant.mp4"
const ShortVideosModule = () => {
    return (
        <div className="container my-4">
            <h3 className="font-montserrat text-yellow-glow">Shorts</h3>
            <div className="flex gap-4 items-center overflow-x-scroll max-w-full">
                <video className="my-2 rounded-xl border border-[#ED1C24] flex-shrink-0 h-64 w-36 object-cover" src={JumpPeekingInValorant} controls={true}></video>
                <video className="my-2 rounded-xl border border-[#ED1C24] flex-shrink-0 h-64 w-36 object-cover" src={JumpPeekingInValorant} controls={true}></video>
                <video className="my-2 rounded-xl border border-[#ED1C24] flex-shrink-0 h-64 w-36 object-cover" src={JumpPeekingInValorant} controls={true}></video>
                <video className="my-2 rounded-xl border border-[#ED1C24] flex-shrink-0 h-64 w-36 object-cover" src={JumpPeekingInValorant} controls={true}></video>

            </div>
        </div>
    )
}
export default ShortVideosModule