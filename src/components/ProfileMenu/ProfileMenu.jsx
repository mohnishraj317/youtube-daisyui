import { FaDollarSign, FaGoogle, FaSignOutAlt, FaUserAlt } from "react-icons/fa";
import { PiUserSwitch } from "react-icons/pi";
import { SiYoutubestudio } from "react-icons/si";

export default function ProfileMenu() {
  return <div className="dropdown dropdown-end">
    <button tabIndex={0} className="btn btn-circle avatar">
      <FaUserAlt />
    </button>

    <ul tabIndex={0} className="menu dropdown-content w-max bg-base-300 rounded-box z-[3]">
      <li><a><FaGoogle /> Google Account</a></li>
      <li><a><PiUserSwitch />Switch account</a></li>
      <li><a><FaSignOutAlt />Sign out</a></li>
      <li></li>
      <li><a><SiYoutubestudio />Youtube Studio</a></li>
      <li><a><FaDollarSign />Purchases and Memberships</a></li>
    </ul>
  </div>
}