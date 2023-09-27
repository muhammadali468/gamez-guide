import { Link } from "react-router-dom"
import Logo from "../assets/images/logo.png"
import MenuButton from "../assets/images/menu-button.png"

const Header = () => {
    return (
        <header>
            <div className="fixed top-0 w-full max-w-lg flex justify-between items-center px-8 z-10 bg-black">
                <Link to="/">
                    <img src={Logo} height={100} width={100} />
                </Link>
                {/* <h1 className="text-white red-outline text-4xl">GAMES</h1> */}
                <img src={MenuButton} height={30} width={30} />
            </div>
        </header>
    )
}
export default Header