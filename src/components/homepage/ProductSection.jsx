import React from "react";
import "../css/productsection.css";

const ProductSection = () => {
  return (
    <div className="relative">
      <div className="product-section flex justify-center relative ">
        <div className="mt-10 absolute z-10">
          <div className="flex items-center justify-center">
            <div className="box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
