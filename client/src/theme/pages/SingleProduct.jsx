import React from "react";
import { useParams } from "react-router-dom";
import productData from "../json_files/porducts.json";
import Button from '../../components/Button.jsx';

const SingleProduct = () => {
  const { productName } = useParams();

  const product = productData.find(
    ({ name }) =>
      name.replace(/\ /g, "-").toLowerCase() === productName.toLowerCase()
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const { imageUrl, name, description, price, quantity, colors } = product;

  return (
    <section>
      <div className="container">
        <div className="flex gap-8 items-center">
          <div className="mb-4 flex-1 w-full rounded-md max-w-md max-h-[400px] overflow-hidden flex items-center justify-center">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col items-start">
            <h2 className="text-3xl font-bold mb-4">{name}</h2>
            <p className="text-gray-600 mb-4 text-lg">{description}</p>
            <div className="text-gray-700 flex items-center gap-2 justify-center my-3">
                <span className="font-bold text-black">Color:</span>
               {colors && colors.map((color, key) => (
                  <span key={key} style={{background: color}} className={`p-2 inline-block rounded-full`}></span>
               ))}
            </div>
            <p className="text-2xl text-orange-500 font-bold mb-2">
              ${price.toFixed(2)}
            </p>
            <Button
              text={quantity < 1 ? "Sold out" : "Add to cart"}
              className={`${quantity < 1 ? "text-red-500 bg-stone-100" : ""}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;