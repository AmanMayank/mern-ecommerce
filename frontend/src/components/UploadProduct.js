import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const UploadProduct = ({ onClose }) => {
  const [data, setData] = useState({
    prodName: "",
    prodBrandname: "",
    prodCategory: "",
    prodImage: "",
    prodDescription: "",
    prodPrice: "",
    prodDiscPrice: "",
  });

  const handleOnChange = (e) => {
    // setData{(prev) => {
    //     [name]:value;
    // }}
  };

  return (
    <div className="fixed w-full h-full top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-slate-200 bg-opacity-40">
      <div className="bg-white p-4 rounded-md w-full max-w-2xl h-full max-h-[80%]">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">Product Details</h2>
          <div
            className="hover:cursor-pointer hover:text-red-600"
            onClick={onClose}
          >
            <IoCloseCircleOutline size="25" />
          </div>
        </div>

        <form className="grid p-4 gap-3">
          <label htmlFor="prodName">Product Name :</label>
          <input
            type="text"
            id="prodName"
            placeholder="Enter the product name"
            value={data.prodName}
            name="prodName"
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded-md"
          />

          <label htmlFor="prodBrandname" className="mt-3">
            Product Brand :
          </label>
          <input
            type="text"
            id="prodBrandname"
            placeholder="Enter the brand"
            name="prodBrandname"
            value={data.prodName}
            onChange={handleOnChange}
            className="p-2 bg-slate-100 border rounded-md"
          />
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
