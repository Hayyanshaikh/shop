import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard_v2 from "../components/ProductCard_v2.jsx";
import productData from "../../json_files/porducts.json";
import Alert from '../../components/Alert.jsx';

const Product = () => {
  const [alert, setAlert] = useState(null);
  const { category } = useParams();

  const categoryProducts = productData.filter(
    (product) => product.category.toLowerCase() === category.replace(/\-/g, " ")
  );

  const handleAlert = (type, message) => {
    setAlert({
      type,
      message
    });

    setTimeout(()=>{
      setAlert(null);
    }, 3000)
  }

  return (
    <section>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 capitalize">{category.replace(/\-/g, " ")}</h2>
        <div className="pop_product_main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categoryProducts.length > 0
            ? categoryProducts.map((product) => (
                <ProductCard_v2 key={product.id} product={product} productAlert={handleAlert}/>
              ))
            : "product not found"}
        </div>
      </div>
    </section>
  );
};

export default Product;
