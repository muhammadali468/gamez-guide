import { LiaHomeSolid, LiaYoutube } from "react-icons/lia"
import { BsController } from "react-icons/bs"
import { PiUser } from "react-icons/pi"
import { Link } from "react-router-dom"
const NavTab = () => {
    return (
        <div className="fixed bottom-0 max-w-lg w-full bg-[#151313d5] flex justify-around items-center py-2 z-10">
            <Link to="/">
                <div>
                    <LiaHomeSolid color="white" className="text-3xl mx-auto" />
                    <p className="text-white font-montserrat text-xs">Home</p>
                </div>
            </Link>
            <Link to="/shorts">

                <div>
                    <LiaYoutube color="white" className="text-3xl mx-auto" />
                    <p className="text-white font-montserrat text-xs">Shorts</p>
                </div>
            </Link>
            <Link to="/games">

                <div>
                    <BsController color="white" className="text-3xl mx-auto" />
                    <p className="text-white font-montserrat text-xs">Games</p>
                </div>
            </Link>
            <Link to="/">
                <div>
                    <PiUser color="white" className="text-3xl mx-auto" />
                    <p className="text-white font-montserrat text-xs">Profile</p>
                </div>
            </Link>


        </div>
    )
}
export default NavTab