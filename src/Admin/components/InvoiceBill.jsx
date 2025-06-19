import React from "react";
import ProductTable from "./ProductTable";

const InvoiceBill = () => {
  const orderDetails = {
    orderId: "6749adc5f5952dfa790d184f",
    dateTime: "29/11/2024 17:34:21",
    paymentMethod: "Online Payment",
    status: "Pending",
    items: [
      { customerId: "CUST3190", product: "Kurtha", quantity: 1, price: 1746, unit: ""},
      { customerId: "CUST7284", product: "Saree", quantity: 1, price: 390.2, unit: "" },
      { customerId: "CUST6547", product: "Jeans", quantity: 1, price: 1088.2, unit: "" },
    ],
    customerDetails: {
      name: "Manoranjan",
      address: "Mathikere, Bangalore, 570001",
      phone: "7846932498",
      email: "mano@gmail.com",
    },
    priceBreakdown: {
      totalMRP: 1930.0,
      shippingFees: 0.0,
      discount: 56.6,
      totalPrice: 1873.4,
    },
  };

  return (
    <div className="max-w-4xl mx-auto pt-0 p-6 bg-white  rounded-lg">
      {/* Order Details */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-700">Order Details</h2>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Order ID:</span> {orderDetails.orderId}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Date/Time:</span> {orderDetails.dateTime}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Payment Method:</span> {orderDetails.paymentMethod}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Status:</span>{" "}
            <span className="text-yellow-600">{orderDetails.status}</span>
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Customer ID:</span>{" "}
            <span>CUST3190</span>
          </p>
        </div>
      </div>

      {/* Items Section */}
      <div className="mb-6">
        {/* <h2 className="text-lg font-bold text-gray-700">Items</h2>
        <div className="mt-2">
          {orderDetails.items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-b border-gray-200 py-2"
            >
              <p className="text-sm text-gray-600">
                {item.product} - {item.quantity} x ₹{item.price}  
              </p>
            </div>
          ))}
        </div> */}
    <ProductTable/>
      </div>
      
      {/* Shipping Address */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-700">Shipping Address</h2>
        <div className="mt-2 text-sm text-gray-600">
          <p>
            <span className="font-semibold">Customer Name:</span>{" "}
            {orderDetails.customerDetails.name}
          </p>
          <p>
            <span className="font-semibold">Address:</span>{" "}
            {orderDetails.customerDetails.address}
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            {orderDetails.customerDetails.phone}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            {orderDetails.customerDetails.email}
          </p>
        </div>
      </div>

      {/* Price Breakdown */}
      <div>
        <h2 className="text-lg font-bold text-gray-700">Price Breakdown</h2>
        <div className="mt-2 text-sm text-gray-600">
          <p className="flex justify-between">
            <span>Total MRP:</span> <span>₹{orderDetails.priceBreakdown.totalMRP.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Shipping Fees:</span>{" "}
            <span>₹{orderDetails.priceBreakdown.shippingFees.toFixed(2)}</span>
          </p>
          <p className="flex justify-between">
            <span>Discount:</span> <span>- ₹{orderDetails.priceBreakdown.discount.toFixed(2)}</span>
          </p>
          <hr className="my-2" />
          <p className="flex justify-between font-bold text-gray-700">
            <span>Total Price:</span>{" "}
            <span>₹{orderDetails.priceBreakdown.totalPrice.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceBill;
