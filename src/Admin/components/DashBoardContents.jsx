import React from "react";
import { CgUserAdd } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";

export default function DashBoardContents() {
  return (
    <div className="w-full p-5  overflow-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h1>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg   p-6 hover: cursor-pointer shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-white flex flex-row w-full h-full gap-5 ">
        
        <div className="bg-white rounded-lg w-full  p-6 hover:  shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Activities
          </h2>
          <div className="h-full flex flex-col gap-2 ">
            {recentActivities.map((activity , index)=>(
              <div className="flex flex-row justify-between items-center border-b p-5" key={index}>
              <div className="flex flex-row gap-5 items-center" >
                <p>{<activity.icon className="w-7 h-7"/>}</p>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-sm">{activity.name}</p>
                  <p>{activity.from}</p>
                  <p>{activity.time}</p>
                </div>
              </div>
              
                  <button className="border rounded-3xl p-2 px-4 text-sm bg-black text-white">{activity.type}</button>
                  </div>

            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg w-full  p-6 hover:  shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Orders
          </h2>
          <div className="h-full flex flex-col gap-2 ">
            {recentOrders.map((activity , index)=>(
              <div className="flex flex-row justify-between items-center border-b p-5" key={index}>
              <div className="flex flex-row gap-5 items-center" >
                <p>{<activity.icon className="w-7 h-7"/>}</p>
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-sm">{activity.name}</p>
                  <p>{activity.from}</p>
                  <p>{activity.time}</p>
                </div>
              </div>
              
                  <button className="border rounded-3xl p-2 px-4 text-sm bg-black text-white">{activity.type}</button>
                  </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const stats = [
  { key: 1, title: "Total Products", value: "456" },
  { key: 2, title: "Total Sales", value: "₹54,000" },
  { key: 3, title: "Active Users", value: "2,453" },
  { key: 4, title: "Pending Orders", value: "23" },
];


const recentActivities = [
  // {
  //   key : 1,
  //   icon : FiShoppingCart,
  //   name : "New Order Recived",
  //   from : "Order #329F from akash",
  //   time : "17/01/2025, 17:32:01",
  //   type : "Order",
  // },
  {
    key : 2,
    icon : CgUserAdd,
    name : "New User Registration",
    from : "Amod joined",
    time : "17/01/2025, 17:32:01",
    type : "Registration",
  },
  {
    key : 3,
    icon : CgUserAdd,
    name : "New User Registration",
    from : "karthik joined",
    time : "17/01/2025, 17:32:01",
    type : "Registration",
  },

]


const recentOrders = [
  {
    key : 1,
    icon : FiShoppingCart,
    name : "New Order Recived",
    from : "Order #329F from akash",
    time : "17/01/2025, 17:32:01",
    type : "Order",
  },
  {
    key : 2,
    icon : FiShoppingCart,
    name : "New Order Recived",
    from : "Order #329F from abhishek",
    time : "17/01/2025, 17:32:01",
    type : "Order",
  },  
]