import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blush  z-50  text-white py-12 mt-16">
      <div className="container  px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-lg font-bold text-darkblush">Contact Us</h2>
            <p className="mt-3 text-xs text-darkblush">
              +91 9899990772 | care@sbwears.in MONDAY to SATURDAY 10 am to 6 pm
            </p>
            <div className="flex space-x-4 mt-4">
              <button className="text-darkblush text-xs">
                <FaFacebook size={24} />
              </button>
              <button className="text-darkblush text-xs hover:text-darkblush transition">
                <FaTwitter size={24} />
              </button>
              <button className="text-darkblush text-xs hover:text-darkblush transition">
                <FaInstagram size={24} />
              </button>
              <button className="text-darkblush text-xs hover:text-darkblush transition">
                <FaLinkedin size={24} />
              </button>
              <button className="text-darkblush text-xs hover:text-darkblush transition">
                <FaYoutube size={24} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className=" text-lg font-semibold text-darkblush">
              Explore More
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <button className="text-darkblush text-xs">New</button>
              </li>
              <li>
                <button className="text-darkblush text-xs ">Suits</button>
              </li>
              <li>
                <button className="text-darkblush text-xs ">Kurtas</button>
              </li>
              {/* <li>
                <button className="text-darkblush text-xs ">Libas Art</button>
              </li> */}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-darkblush">
              Customer Experience
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <button className="text-darkblush text-xs ">About us</button>
              </li>
              <li>
                <button className="text-darkblush text-xs ">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button className="text-darkblush text-xs">
                  Shipping Policy
                </button>
              </li>
              <li>
                <button className="text-darkblush text-xs">
                  Return Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-darkblush">
              Subscribe To Our Newsletter
            </h3>
            <p className="mt-2 text-xs text-darkblush">
              Be the first know about New Launches Sales, Trend Update & More
            </p>
            <form className="mt-4 flex items-center border border-black">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-2 py-1 bg-blush focus:outline-none placeholder-darkblush  text-black "
              />
              <img
                src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/2desktop_new_website_copy_1_1.png?v=1726825752"
                alt="placeholder icon"
                class="h-5 w-8 mr-2"
              />
            </form>

            {/* <div ">
             
             </div> */}

            <h1 className="text-lg text-darkblush mt-6">Secure Payment</h1>
            <div className="flex flex-row mt-3 ">
              <img className="w-15 h-8 pr-5" alt="img" src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/visa_6366231b-7108-4b9e-8204-0a809adc2a7d.png?v=1704364741" />
              <img className="w-15 h-8 pr-5" alt="img" src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/paytm.jpg?v=1690358023" />
              <img className="w-15 h-8 pr-5"  src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/mastercard.png?v=1690358462" alt="img"/>
              <img className="w-15 h-8 pr-5" alt="img" src="https://cdn.shopify.com/s/files/1/0341/4805/7228/files/amx.png?v=1690358462" />
            </div>
          </div>
        </div>

      </div>
        <div className=" border-gray-700 mt-10 pt-6 text-center text-darkblush text-xs">
          <p>&copy; SB Wears {new Date().getFullYear()}. All Rights Reserved.</p>
        </div>
    </footer>
  );
};
export default Footer;
