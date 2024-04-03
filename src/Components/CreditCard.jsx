import React from "react";

const CreditCard = ({ onChange }) => {
  return (
    <div>
      <div className="mx-5">
        <div className="flex flex-col">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Card Number
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter card number"
              name="cardNumber"
              onChange={onChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Card Holder
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter card holder name"
              name="cardHolder"
              onChange={onChange}
            />
          </div>
          <div className="flex gap-2">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Expiration Date
              </label>
              <input
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                placeholder="Enter expiration date"
                name="expirationDate"
                onChange={onChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">CVV</label>
              <input
                className="shadow w-24 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="CVV"
                name="cvv"
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
