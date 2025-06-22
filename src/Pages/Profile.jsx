import { useState } from "react";
import UserProfile from "../components/UserProfile";
import DeliveryAddress from "../components/DeliveryAddress";
import MyOrders from "../components/MyOrders";
import { CiPower } from "react-icons/ci";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [activeSection, setActiveSection] = useState("profile");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  const navigate = useNavigate()

  return (
    <div className="min-h-screen lg:ml-32 p-4 flex flex-col md:flex-row lg:flex-row">
      <div className="lg:w-72 bg-white border border-black rounded-3xl p-6 h-fit mb-8 lg:mb-0 lg:mr-8 md:mr-5">
        <div className="space-y-3">
          <MenuItem
            icon={<VscAccount className="w-6 h-6" />}
            text="My Profile"
            onClick={() => handleSectionChange("profile")}
          />
          <MenuItem
            icon={<CiLocationOn className="w-6 h-6" />}
            text="Delivery Address"
            onClick={() => handleSectionChange("address")}
          />
          <MenuItem
            icon={<PiSuitcaseSimpleThin className="w-6 h-6" />}
            text="My Orders"
            badge="0"
            onClick={() => handleSectionChange("orders")}
          />
          <MenuItem
            icon={
              <CiPower
                className="w-6 h-6"
                />
              }
              text="Log Out"
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
          />
        </div>
      </div>

      <div className="flex-1">
        {activeSection === "profile" && <UserProfile />}
        {activeSection === "address" && <DeliveryAddress />}
        {activeSection === "orders" && <MyOrders />}
      </div>
    </div>
  );
}

function MenuItem({ icon, text, badge, onClick }) {
  return (
    <div
      className="flex items-center justify-between p-3 hover:bg-slate-100 rounded-lg cursor-pointer"
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
