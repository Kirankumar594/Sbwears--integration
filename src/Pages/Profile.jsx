import { useState } from "react";
import UserProfile from "../components/UserProfile";
import DeliveryAddress from "../components/DeliveryAddress";
import WishList from "../components/WishList";
import MyOrders from "../components/MyOrders";
import Viewed from "../components/Viewed";
import Credits from "../components/Credits";
import ChangePassword from "../components/ChangePassword";
import { CiPower } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { RiSearchEyeLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { CiClock1 } from "react-icons/ci";


function Profile() {
  const [activeSection, setActiveSection] = useState("profile");

  const handleSectionChange = (section) => {
    setActiveSection((section));
  };

  return (
    <div className="min-h-screen lg:ml-32 p-4 flex flex-col md:flex-row lg:flex-row"> 
      <div className="lg:w-72 bg-blush rounded-3xl p-6 h-fit mb-8 lg:mb-0 lg:mr-8 md:mr-5">
        <div className="flex items-center gap-3 w-full mb-4">
          <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
          <CiClock1 className="h-6 w-6" />
          <div className="text-gray-600">03:41:34 PM</div>
        </div>
 
        <div className="space-y-3">
          <MenuItem icon={<VscAccount className="w-6 h-6"/>} text="My Profile" onClick={() => handleSectionChange("profile")}/>
          <MenuItem icon={<CiLocationOn className="w-6 h-6"/>} text="Delivery Address" badge="0" onClick={() => handleSectionChange("address")}/>
          <MenuItem icon={<PiSuitcaseSimpleThin className="w-6 h-6" />} text="My Orders" badge="0" onClick={() => handleSectionChange("orders")}/>
          <MenuItem icon={<CiHeart className="w-6 h-6"/>} text="My Wishlist" badge="5" onClick={() => handleSectionChange("wishlist")}/>
          <MenuItem icon={<RiSearchEyeLine className="w-6 h-6" />} text="Recently Viewed" onClick={() => handleSectionChange("viewed")}/>
          <MenuItem icon={<CiLock className="w-6 h-6" />} text="Change Password" onClick={() => handleSectionChange("changePassword")}
          />
          <MenuItem icon={<CiPower className="w-6 h-6" />}
          text="Log Out" />
        </div>
      </div>
 
      <div className="flex-1">
        <h1 className="text-2xl lg:text-3xl text-center mb-8">
          Good Afternoon!
        </h1>

        {activeSection === "profile" && <UserProfile />}
        {activeSection === "address" && <DeliveryAddress />}
        {activeSection === "wishlist" && <WishList />}
        {activeSection === "orders" && <MyOrders />}
        {activeSection === "viewed" && <Viewed />}
        {activeSection === "credits" && <Credits />}
        {activeSection === "changePassword" && <ChangePassword />}
      </div>
    </div>
  );
}

function MenuItem({ icon, text, badge, onClick }) {
  return (
    <div
      className="flex items-center justify-between p-3 hover:bg-white/50 rounded-lg cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <span>{icon}</span>
        <span className="text-gray-800">{text}</span>
      </div>
      {badge && (
        <span className="bg-white/80 px-2 py-1 rounded-full text-sm">
          {badge}
        </span>
      )}
    </div>
  );
}

export default Profile;
