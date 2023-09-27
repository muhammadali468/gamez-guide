import Stories from "react-insta-stories"
import { IoCloseCircleOutline } from "react-icons/io5"
import { useState } from "react"
import StoryThumbnail1 from "../../assets/images/Valorant/story-thumbnail-1.png"
const StoriesList = () => {
    const [showStories, setShowStories] = useState(false)
    const stories = [
        {
            url: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
            seeMore: ({ close }) => {
                return <div onClick={close}>Hello, click to close this.</div>;
            },
        },
        {
            url: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
            seeMore: ({ close }) => {
                return <div onClick={close}>Hello, click to close this.</div>;
            },
        },
        {
            url: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
            seeMore: ({ close }) => {
                return <div onClick={close}>Hello, click to close this.</div>;
            },
        }
    ]
    return (
        <div className="flex gap-4 overflow-x-scroll scrollbar-hidden">
            <img onClick={()=>setShowStories(true)} className="flex-shrink-0 rounded-full border-red-glow h-20 w-20 object-cover" src={StoryThumbnail1} alt="story" />
            <img onClick={()=>setShowStories(true)} className="flex-shrink-0 rounded-full border-red-glow h-20 w-20 object-cover" src={StoryThumbnail1} alt="story" />
            <img onClick={()=>setShowStories(true)} className="flex-shrink-0 rounded-full border-red-glow h-20 w-20 object-cover" src={StoryThumbnail1} alt="story" />
            <img onClick={()=>setShowStories(true)} className="flex-shrink-0 rounded-full border-red-glow h-20 w-20 object-cover" src={StoryThumbnail1} alt="story" />
            <div className="absolute top-0 z-10">
                {showStories ? <Stories
                    stories={stories}
                    defaultInterval={1500}
                    width={320}
                    height={768}
                    
                    progressStyles={{ background: "red" }}
                /> : ""}
                <span className="absolute top-4 right-4 text-white z-50" onClick={() => setShowStories(false)}>
                    <IoCloseCircleOutline className="text-2xl" />
                </span>
            </div>
        </div>
    )
}
export default StoriesList