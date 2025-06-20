import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { BiSpreadsheet } from "react-icons/bi";
import { CustomerTable } from "./CustomerTable";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function Customer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [customers, setCustomers] = useState([]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleExport = () => {
    if (customers.length === 0) {
      alert("No customer data available to export.");
      return;
    }

    // Initialize jsPDF document
    const doc = new jsPDF();

    // Prepare data for PDF table
    const tableColumn = [
      "Customer ID",
      "Name",
      "Mobile",
      "Email",
      "Address",
      "Registration Date",
    ];
    const tableRows = customers.map((customer) => [
      `CUST${customer._id.slice(-4).toUpperCase()}`,
      customer.firstName || customer.lastName
        ? `${customer.firstName || ""} ${customer.lastName || ""}`.trim()
        : "N/A",
      customer.phoneNumber || "N/A",
      customer.email || "N/A",
      customer.address || "No address provided",
      new Date(customer.createdAt).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    ]);

    // Add title to the PDF
    doc.text("Customer List", 14, 15);

    // Generate table using autoTable
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      theme: "grid",
      headStyles: { fillColor: [0, 0, 0], textColor: [255, 255, 255] },
      styles: { fontSize: 8 },
    });

    // Save the PDF
    doc.save("Customers.pdf");
  };

  return (
    <div className="flex flex-col w-full overflow-auto">
      <p className="text-xl p-8 font-bold">Customers</p>
      <div className="flex flex-row">
        <div className="flex flex-row items-center gap-3 border mx-5 p-3 shadow-lg w-5/6 rounded-xl">
          <CiSearch className="w-5 h-5" />
          <input
            className="w-full focus:outline-none"
            placeholder="Search Customer..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <button
          className="mr-5 w-1/6 bg-black flex flex-row gap-2 items-center text-white px-4 py-2 rounded-lg hover:bg-gray-800 shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          onClick={handleExport}
        >
          <BiSpreadsheet />
          Export PDF
        </button>
      </div>
      <div>
        <div className="bg-white rounded-xl my-5 mx-5 p-5 shadow-lg w-[80%]">
          <CustomerTable searchQuery={searchQuery} setCustomers={setCustomers} />
        </div>
      </div>
    </div>
  );
}
