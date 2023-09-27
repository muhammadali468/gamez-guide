import CodLogo from "../../assets/images/games/cod.png"
import ValorantLogo from "../../assets/images/games/Valorant.png"
import PUBGLogo from "../../assets/images/games/Pubg.png"
import ForniteLogo from "../../assets/images/games/Fortnite.png"
import MinecraftLogo from "../../assets/images/games/Minecraft.png"
import FreefireLogo from "../../assets/images/games/Freefire.png"
const GamesContainer = () => {
    const Games = [
        {
            title: "Valorant",
            src: ValorantLogo,
        },
        {
            title: "PUBG",
            src: PUBGLogo
        },
        {
            title: "Call of Duty",
            src: CodLogo
        },
        {
            title: "Fortnite",
            src: ForniteLogo
        },
        {
            title: "Minecraft",
            src: MinecraftLogo
        },
        {
            title: "Freefire",
            src: FreefireLogo
        },
    ]
    return (
        <div className="bg-[#151313] rounded-2xl p-4 my-6">
            <div className="grid grid-cols-2 gap-4">
                {Games.map((game,index) =>
                    <a href="/game-detail" key={index}>
                        <img src={game.src} alt={`${game.title + "-image"}`} />
                        <p className="text-white text-xl font-bold text-center">{game.title}</p>
                    </a>
                )}
            </div>
        </div>
    )
}
export default GamesContainer