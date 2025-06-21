import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/productsList`);
  };

  const [banner, setBanner] = useState([]);

  const getBanner = async () => {
    try {
      const response = await axios.get("https://sbwears.com/api/admin/banner");
      setBanner(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(banner);

  useEffect(() => {
    getBanner();
  }, []);

  return (
    <div className="relative w-full ">
      <img
        // src="https://www.libas.in/cdn/shop/files/desktop-eoss_b47b3d2e-63c3-4a33-9858-340255cc1dfb.jpg?v=1735982857&width=2400"
        src={`https://sbwears.com/image/${banner[0]?.image}`}
        alt="Sale Background"
        className="object-cover hover:cursor-pointer"
        onClick={handleClick}
      />
      <div class="flex items-center justify-center pb-10 text-gray-300 ">
        <p class="text-center w-full text-xs mb-4  py-2 bg-buttonColor">
          SHOP FOR 2499 GET EXTRA 10% OFF | CODE: SALE10{" "}
        </p>
      </div>
    </div>
  );
};

export default Hero;
