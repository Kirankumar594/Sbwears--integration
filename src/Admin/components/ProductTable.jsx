import React from "react";

const ProductTable = () => {
  const items = [
    { customerId: "CUST3190", product: "Kurtha", quantity: 1, price: 1746 },
    { customerId: "CUST7284", product: "Saree", quantity: 1, price: 390.2 },
    { customerId: "CUST6547", product: "Jeans", quantity: 1, price: 1088.2 },
  ];

  return (
    <div className=" bg-gray-100 ">
      {/* <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4"> */}
        {/* <h2 className="text-xl font-bold mb-4 text-gray-800">Product Table</h2> */}
        <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              {/* <th className="py-3 px-4 text-left border-b border-gray-300">Customer ID</th> */}
              <th className="py-3 px-4 text-left border-b border-gray-300">Product</th>
              <th className="py-3 px-4 text-left border-b border-gray-300">Quantity</th>
              <th className="py-3 px-4 text-left border-b border-gray-300">Price (INR)</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {items.map((item, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                {/* <td className="py-3 px-4 border-r border-gray-300">
                  {item.customerId}
                </td> */}
                <td className="py-3 px-4 border-r border-gray-300">
                  {item.product}
                </td>
                <td className="py-3 px-4 border-r border-gray-300">
                  {item.quantity}
                </td>
                <td className="py-3 px-4">{item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      {/* </div> */}
    </div>
  );
};

export default ProductTable;
