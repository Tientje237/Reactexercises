import { IoMdHome } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { PiPackageFill } from "react-icons/pi";
import { IoMdSettings } from "react-icons/io";


const LeftSidebarNavbar = () => {
    const navbar = (
    <div className="sidebar">
        <ul>
            <li><IoMdHome /></li>
            <li><IoMdMail /></li>
            <li><PiPackageFill /></li>
            <li><IoMdSettings  /></li>
        </ul>
    </div>
    );

    return navbar;
    }

export default LeftSidebarNavbar;



