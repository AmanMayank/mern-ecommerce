import React, { useState } from "react";
import UploadProduct from "../components/UploadProduct";

function AllProducts() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="bold lg ">All Product</h2>
        <button
          onClick={() => setOpenModal(true)}
          className="border-2 py-2 px-4 border-custom-green text-custom-green rounded-md shadow-lg hover:bg-custom-green transition-all hover:text-white hover:text-bold"
        >
          Upload Product
        </button>
      </div>

      {openModal && <UploadProduct onClose={() => setOpenModal(false)} />}
    </div>
  );
}

export default AllProducts;
