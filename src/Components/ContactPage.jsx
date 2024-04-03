import React, { useState } from "react";
import Logo from "../assets/image.jpg";
import CreditCard from "./CreditCard";
import { Button, Chip } from "@material-tailwind/react";
import Login from "./Login";
import { SideBar } from "./SideBar";

const ContactPage = () => {
  const [company, setCompany] = React.useState({
    name: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    taxId: "",
    email: "",
    phone: "",
    website: "",
    DMname: "",
    DMemail: "",
    DMphone: "",
    salesDetails: "",
    salesName: "",
  });

  console.log("company:", company);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setCompany({
      ...company,
      address: {
        ...company.address,
        [name]: value,
      },
      [name]: value,
    });
  };

  const [paymentOption, setPaymentOption] = useState("");
  const [paymentDetails, setPaymentDetails] = useState({});

  console.log("Payment-Details", paymentDetails);

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option);
  };

  const handlePaymentDetailsChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const paymentObject = {
      option: paymentOption,
      details: paymentDetails,
    };
    console.log(paymentObject); // You can further process this payment object as per your requirement
  };

  const renderPaymentComponent = () => {
    switch (paymentOption) {
      case "Credit Card":
        return <CreditCard onChange={handlePaymentDetailsChange} />;
      case "ACH":
        return null;
      // Add cases for other payment options here
      default:
        return <CreditCard />;
    }
  };

  return (
    <div>
      <nav className="h-16 flex justify-between items-center px-4 ">
        <div className="h-14 w-14">
          {" "}
          <img src={Logo} alt="" />
        </div>
        <div className="flex w-28 justify-around items-center">
          <h1>
            <i class="fa-solid fa-bell"></i>
          </h1>
          <h2 className="h-10 w-10 flex justify-center items-center text-white rounded-full bg-slate-600 ">
            <i class="fa-solid fa-user-tie"></i>
          </h2>
        </div>
      </nav>
      <div className="h-screen bg-slate-200 grid grid-cols-12 gap-1 space-x-1">
        <div className="bg-white col-span-3 space-x-2">
            <SideBar/>
        </div>
        <div className="bg-white col-span-9 space-x-2">
          <div className="company">
            <h1 className="text-4xl font-bold">Company Details </h1>
            <div className="Company">
              <h1 className="h-10 flex items-center bg-blue-gray-800 text-white px-5 my-5  font-semibold text-xl">
                Company Details:
              </h1>
              <div className="grid grid-cols-3 gap-2 mx-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 text-purple-800 font-semibold"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    value={company.name}
                    onChange={(e) => handleAddressChange(e)}
                    className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:bg-blue-gray-100 placeholder:py-2 placeholder:px-3"
                  />
                </div>
                <div>
                  <label
                    htmlFor="taxId"
                    className="block mb-1 text-purple-800 font-semibold"
                  >
                    Company Tax Id
                  </label>
                  <input
                    type="text"
                    id="taxId"
                    placeholder="TaxId"
                    name="taxId"
                    value={company.taxId}
                    onChange={(e) => handleAddressChange(e)}
                    className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:bg-blue-gray-100 placeholder:py-2 placeholder:px-3"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-purple-800 font-semibold"
                  >
                    Company Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="eg. example@domain.com"
                    name="email"
                    value={company.email}
                    onChange={(e) => handleAddressChange(e)}
                    className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:bg-blue-gray-100 placeholder:py-2 placeholder:px-3"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mx-5">
                <div className="col-span-2">
                  <label
                    htmlFor="street"
                    className="block mb-1 text-purple-800 font-semibold"
                  >
                    Company Address
                  </label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    placeholder="Street Address"
                    value={company.address.street}
                    onChange={(e) => handleAddressChange(e)}
                    className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:bg-blue-gray-100 placeholder:py-2 placeholder:px-3"
                  />
                  <div className="flex justify-between">
                    <div>
                      <label htmlFor="city" className=" mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="City"
                        value={company.address.city}
                        onChange={(e) => handleAddressChange(e)}
                        className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:bg-blue-gray-100 placeholder:py-2 placeholder:px-3"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className=" mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="State"
                        value={company.address.state}
                        onChange={(e) => handleAddressChange(e)}
                        className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:bg-blue-gray-100 placeholder:py-2 placeholder:px-3"
                      />
                    </div>
                    <div>
                      <label htmlFor="zip" className=" mb-1">
                        Zip
                      </label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="Zip Code"
                        value={company.address.zip}
                        onChange={(e) => handleAddressChange(e)}
                        className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:bg-blue-gray-100 placeholder:py-2 placeholder:px-3"
                      />
                    </div>
                  </div>
                </div>

                <div className="gap-4 ">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-1 text-purple-800 font-semibold"
                    >
                      Company Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="Eg. 123-456-7890"
                      name="phone"
                      value={company.phone}
                      onChange={(e) => handleAddressChange(e)}
                      className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:bg-blue-gray-100 placeholder:py-2 placeholder:px-3"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="website"
                      className="block mb-1 text-purple-800 font-semibold"
                    >
                      Company Website
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      placeholder="Website Url"
                      value={company.website}
                      onChange={(e) => handleAddressChange(e)}
                      className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:bg-blue-gray-100 placeholder:py-2 placeholder:px-3"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="DM">
              <h1 className="h-10 flex items-center bg-blue-gray-800 text-white px-5 my-5  font-semibold text-xl">
                Dm Details:
              </h1>
              <div className="grid grid-cols-3 gap-2 mx-5">
                <div>
                  <label
                    htmlFor="DMname"
                    className="block mb-1 text-purple-800 font-semibold"
                  >
                    Dm Name
                  </label>
                  <input
                    type="text"
                    id="DMname"
                    name="DMname"
                    placeholder="DM Name"
                    value={company.DMname}
                    onChange={(e) => handleAddressChange(e)}
                    className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:bg-blue-gray-100 placeholder:py-2 placeholder:px-3"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-purple-800 font-semibold"
                  >
                    Dm Email
                  </label>
                  <input
                    type="DMemail"
                    id="DMemail"
                    placeholder="eg. example@domain.com"
                    name="DMemail"
                    value={company.DMemail}
                    onChange={(e) => handleAddressChange(e)}
                    className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:bg-blue-gray-100 placeholder:py-2 placeholder:px-3"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-1 text-purple-800 font-semibold"
                  >
                    DM Phone
                  </label>
                  <input
                    type="tel"
                    id="DMphone"
                    placeholder="Eg. 123-456-7890"
                    name="DMphone"
                    value={company.DMphone}
                    onChange={(e) => handleAddressChange(e)}
                    className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:bg-blue-gray-100 placeholder:py-2 placeholder:px-3"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mx-5">
                <div className="">
                  <label
                    htmlFor="street"
                    className="block mb-1 text-purple-800 font-semibold"
                  >
                    Sales Agent Name
                  </label>
                  <input
                    type="text"
                    id="salesName"
                    name="salesName"
                    placeholder="Sales Agent Name"
                    value={company.salesName}
                    onChange={(e) => handleAddressChange(e)}
                    className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:bg-blue-gray-100 placeholder:py-2 placeholder:px-3"
                  />
                </div>

                <div>
                  <label
                    htmlFor="website"
                    className="block mb-1 text-purple-800 font-semibold"
                  >
                    Sales Details
                  </label>
                  <input
                    type="url"
                    id="salesDetails"
                    name="salesDetails"
                    placeholder="Details"
                    value={company.salesDetails}
                    onChange={(e) => handleAddressChange(e)}
                    className="w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 placeholder:bg-blue-gray-100 placeholder:py-2 placeholder:px-3"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <h1 className="h-10 flex items-center bg-blue-gray-800 text-white px-5 my-5  font-semibold text-xl">
                Bank Details:
              </h1>
              <div className="flex justify-between">
                <div className="  w-96">
                  <div className="modes flex gap-4 mx-3 my-5 ">
                    <Chip
                      className="hover:cursor-pointer"
                      variant="gradient"
                      value="Credit Card"
                      onClick={() => handlePaymentOptionChange("Credit Card")}
                    />
                    <Chip
                      className="hover:cursor-pointer"
                      variant="ghost"
                      value="ACH"
                      onClick={() => handlePaymentOptionChange("ACH")}
                    />
                    <Chip
                      className="hover:cursor-pointer"
                      variant="ghost"
                      value="Paypal"
                      onClick={() => handlePaymentOptionChange("Credit Card")}
                    />
                    <Chip
                      className="hover:cursor-pointer"
                      variant="ghost"
                      value="Cheque"
                      onClick={() => handlePaymentOptionChange("Credit Card")}
                    />
                  </div>
                  {/* <CreditCard /> */}
                  {renderPaymentComponent()}
                </div>
                <div className="payment-mode  flex flex-col justify-center w-60 ">
                  {" "}
                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      Payment Frequency
                    </label>
                    <select className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      Payment Mode
                    </label>
                    <select
                      value={paymentOption}
                      onChange={(e) =>
                        handlePaymentOptionChange(e.target.value)
                      }
                      className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                      <option value="Credit Card">Credit Card</option>
                      <option value="ACH">ACH</option>
                      <option value="paypal">Paypal</option>
                      <option value="cheque">Cheque</option>
                    </select>
                  </div>
                </div>
                <div className="payment-mode space-x-4  flex justify-center items-end mb-10 mx-10">
                  <button
                    onClick={() => {
                      setPaymentDetails({});
                      setPaymentOption("");
                    }}
                    className="bg-red-400 p-2 rounded-full w-28 text-center text-deep-orange-50 font-medium text-xl"
                  >
                    Clear
                  </button>
                  <button
                    onClick={handleSave}
                    className="bg-blue-400 p-2 rounded-full w-28 text-center text-deep-orange-50 font-medium text-xl"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
