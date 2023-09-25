import Logo from "../assets/images/logo.png"
import MenuButton from "../assets/images/menu-button.png"

const Header = () => {
    return (
        <header>
            <div className="flex justify-between items-center">
                <img src={Logo} height={70} width={70} />
                <h1 className="text-white red-outline text-4xl">GAMES</h1>
                <img src={MenuButton} height={30} width={30} />
            </div>
        </header>
    )
}
export default Header