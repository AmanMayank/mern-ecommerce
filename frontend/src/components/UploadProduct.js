import React, { useState, useRef } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import productCategory from "../helpers/productCategory";
import { IoCloudUploadOutline } from "react-icons/io5";
import SummaryApi from "../common";
import imageTobase64 from "../helpers/imageTobase64";
import LargeProductImage from "./LargeProductImage";

const UploadProduct = ({ onClose }) => {
  const [data, setData] = useState({
    prodName: "",
    prodBrandname: "",
    prodCategory: "",
    prodImage: [],
    prodDescription: "",
    prodPrice: "",
    prodDiscPrice: "",
  });

  const [fullImage, setFullImage] = useState(false);
  const [activeImageUrl, setActiveImageUrl] = useState("");

  const inputFile = useRef(null);

  const handleProductUpload = async (e) => {
    const file = e.target.files[0];
    const imagePic = await imageTobase64(file);

    const imageExists =
      data.prodImage[0] !== "" &&
      data.prodImage.some((image) => image?.name === imagePic);

    if (imageExists) {
      console.log("Image already uploaded");
    } else {
      console.log("coming here 4");
      setData((prev) => {
        return {
          ...prev,
          prodImage: [...prev.prodImage, { name: imagePic }],
        };
      });
      const { url, method } = SummaryApi.upload_image;

      const response = await fetch(url, {
        method,
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name: imagePic }),
      });

      const update = await response.json();

      console.log("Image upload response", update);
    }
  };

  const handleReset = () => {
    if (inputFile.current) {
      inputFile.current.value = "";
    }
  };

  const handleOnChange = () => {};

  // console.log("Aman", data.prodImage);
  // console.log("coming here 5", data.prodImage[0].name);

  return (
    <div className="fixed w-full h-full top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-slate-200 bg-opacity-40">
      <div className="bg-white p-4 rounded-md w-full max-w-2xl h-full max-h-[80%] overflow-hidden">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg">Product Details</h2>
          <div
            className="hover:cursor-pointer hover:text-red-600"
            onClick={onClose}
          >
            <IoCloseCircleOutline size="25" />
          </div>
        </div>

        <form className="grid p-4 gap-3 overflow-y-scroll h-full pb-5">
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

          <label htmlFor="prodBrandname" className="mt-3">
            Category :
          </label>
          <select
            value={data.category}
            className="p-2 bg-slate-100 border rounded-md"
          >
            {productCategory.map((el, index) => {
              return (
                <option value={el.value} kwy={index}>
                  {el.label}
                </option>
              );
            })}
          </select>

          <label htmlFor="prodImage" className="mt-3">
            Product Image :
          </label>
          <label htmlFor="uploadImageInput">
            <div className="p-2 bg-slate-100 border rounded-md h-32 w-full flex justify-center items-center cursor-pointer">
              <div className="flex items-center justify-center flex-col text-slate-500 gap-1">
                <IoCloudUploadOutline size={30} />
                <p className="text-sm">Upload product Image</p>
                <input
                  type="file"
                  id="uploadImageInput"
                  className="hidden"
                  onInput={handleProductUpload}
                  ref={inputFile}
                  onClick={handleReset}
                />
              </div>
            </div>
          </label>

          <div className="flex gap-2">
            {data?.prodImage[0] ? (
              data.prodImage.map((item, index) => {
                return (
                  <img
                    key={index}
                    src={item.name}
                    width={80}
                    height={80}
                    alt="prod img"
                    className="bg-slate-100 border cursor-pointer"
                    onClick={() => {
                      setActiveImageUrl(item.name);
                      setFullImage(true);
                    }}
                  />
                );
              })
            ) : (
              <p className="text-red-500 text-xs">
                *Please upload product image
              </p>
            )}
          </div>

          <button className="border-2 py-2 px-4 bg-custom-green text-white rounded-md shadow-lg hover:bg-custom-green-dark transition-all hover:text-white hover:text-bold mb-10">
            Upload Product
          </button>
        </form>
      </div>

      {fullImage && (
        <LargeProductImage
          onClose={() => setFullImage(false)}
          imageUrl={activeImageUrl}
        />
      )}
    </div>
  );
};

export default UploadProduct;
