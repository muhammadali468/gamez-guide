import CodLogo from "../../assets/images/games/cod.png"
import ValorantLogo from "../../assets/images/games/Valorant.png"
import PUBGLogo from "../../assets/images/games/Pubg.png"
import ForniteLogo from "../../assets/images/games/Fortnite.png"
import MinecraftLogo from "../../assets/images/games/Minecraft.png"
import FreefireLogo from "../../assets/images/games/Freefire.png"
const GamesSlider = () => {
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
            title: "COD",
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
        <section className="px-4">
            <h3 className="font-montserrat text-yellow-glow mb-2">Games</h3>

            <div className="flex gap-4 overflow-x-scroll scrollbar-hidden ">
                {Games.map((game) =>
                    <div>
                        <img className="rounded-xl min-h-[5rem] min-w-[5rem] object-cover" src={game.src} alt="game" />
                        <h3 className="font-montserrat text-yellow-dull text-center font-bold">{game.title}</h3>
                    </div>
                )}
            </div>
        </section>
    )
}
export default GamesSlider