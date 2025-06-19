import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./../../components/ui/tabs.jsx";
export default function OccViewProduct() {
  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <IoIosInformationCircleOutline className="size-5 " />
        <p className="font-semibold">Product Details</p>
      </div>
      <Tabs defaultValue="Info" className="w-full mt-5 ">
        <TabsList>
          <TabsTrigger value="Info">Basic Information</TabsTrigger>
          <TabsTrigger value="Pricing">Pricing & Discounts</TabsTrigger>
          <TabsTrigger value="Desc">Description</TabsTrigger>
          <TabsTrigger value="AddInfo">Additional Information</TabsTrigger>
          <TabsTrigger value="Chart">Chart / Catalog</TabsTrigger>
          <TabsTrigger value="Gallery">Product Gallery</TabsTrigger>
        </TabsList>
        <TabsContent value="Info">
          <div className="bg-white shadow-md rounded-lg p-6 mt-5 max-w-3xl mx-auto">
            <table className="w-full border-collapse border-spacing-0">
              <tbody>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold text-gray-600">
                    Product Name
                  </td>
                  <td className="py-4 px-6">Saree</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold text-gray-600">
                    Category
                  </td>
                  <td className="py-4 px-6">Mehendi Magic</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold text-gray-600">Tag</td>
                  <td className="py-4 px-6">New</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold text-gray-600">
                    Offer Price
                  </td>
                  <td className="py-4 px-6">₹460.00</td>
                  <td className="py-4 px-6"></td>
                  <td className="py-4 px-6"></td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold text-gray-600">
                    Occasion
                  </td>
                  <td className="py-4 px-6">Shop by Occasion</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold text-gray-600">
                    Status
                  </td>
                  <td className="py-4 px-6">
                    <span className="bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full">
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="Pricing">
          <div className="flex flex-row mt-5 gap-5">
            <div className="flex flex-col w-full">
              <p>MRP </p>
              <p className="py-2 border px-2 rounded-lg mt-1">2200 rs</p>
            </div>
            <div className="flex flex-col w-full">
              <p>Discount %</p>
              <p className="py-2 border px-2 rounded-lg mt-1">10 %</p>
            </div>

            <div className="flex flex-col w-full">
              <p>Offer Price </p>
              <p className="py-2 border px-2 rounded-lg mt-1">2000 rs</p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="Desc">
          <p className="p-5">
            The Zarina ensemble is a glamorous 3-piece georgette straight suit
            set in a luxurious wine hue. A beautiful melange of mirrorwork,
            sequins, and embroidery on both the kurta and the palazzos is here
            to put the spotlight on you. Add bling to all your celebrations with
            the Zarina outfit.
          </p>
        </TabsContent>
        <TabsContent value="AddInfo">
          <ul className="p-5">
            <li>Top Fabric: Georgette</li>
            <li>Bottom Fabric: Silk Blend</li>
            <li>Dupatta Fabric: Poly Georgette</li>
            <li>Dry Clean Only</li>
          </ul>
        </TabsContent>
        <TabsContent value="Chart">
            <img
            src="https://bodyandsoul.mu/media/size_chart/menwebcom.jpg"
            className="size-72 m-5"
            alt="img"
            />
        </TabsContent>
        <TabsContent value="Gallery">
            <div className="flex flex-row gap-5 mb-5">
                <img src="https://www.libas.in/cdn/shop/files/R-2.jpg?v=1736393431&width=1080" className="size-60 object-cover" alt="img"/>
                <img src="https://www.libas.in/cdn/shop/files/R-1.jpg?v=1736441350&width=1800" className="size-60 object-cover" alt="img"/>
            </div>
            <div className="flex flex-row gap-5"> 
                 <img src="https://www.libas.in/cdn/shop/files/R-4.jpg?v=1736441350&width=1800" className="size-60 object-cover" alt="img"/>
                <img src="https://www.libas.in/cdn/shop/files/R-3.jpg?v=1736441350&width=1800" className="size-60 object-cover" alt="img"/>
            </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
