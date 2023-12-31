import React from "react";
import { useParams } from "react-router-dom";
import ProductCard_v2 from "../components/ProductCard_v2.jsx";
import productData from "../json_files/porducts.json";

const Product = () => {
  const { category } = useParams();

  const categoryProducts = productData.filter(
    (product) => product.category.toLowerCase() === category.replace(/\-/g, " ")
  );

  return (
    <section>
      <div className="container">
        <h2 class="text-3xl font-bold mb-10 capitalize">{category.replace(/\-/g, " ")}</h2>
        <div className="pop_product_main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categoryProducts.length > 0
            ? categoryProducts.map((product) => (
                <ProductCard_v2 key={product.id} product={product} />
              ))
            : "product not found"}
        </div>
      </div>
    </section>
  );
};

export default Product;
