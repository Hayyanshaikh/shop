import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import productData from "../../json_files/products.json";
import Button from '../../components/Button.jsx';
import ProductCard_v2 from '../components/ProductCard_v2.jsx';
import Alert from '../../components/Alert.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/CartSlice.js';

const SingleProduct = () => {
  const [alert, setAlert] = useState(null);
  const { productName } = useParams();
  const dispatch = useDispatch();

  const product = productData.find(
    ({ name }) =>
      name.replace(/\ /g, "-").toLowerCase() === productName.toLowerCase()
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const { imageUrl, category, name, description, price, quantity, colors } = product;

  const relatedProducts = productData.filter(relproduct => {
    const isSameCategory = relproduct.category.toLowerCase() === product.category.toLowerCase();

    const isNotCurrentProduct = relproduct.id !== product.id;

    return isSameCategory && isNotCurrentProduct;
  });

  const handleAlert = (type, message) => {
    setAlert({
      type,
      message
    });

    setTimeout(()=>{
      setAlert(null);
    }, 3000)
  }

  const handleAddToCart = (product) => {
    const alertType = quantity < 1 ? "error" : "success";
    const alertMsg = quantity < 1 ? "Product is out of stock!" : "Product added to cart!";
    if (quantity < 1) {
      handleAlert(alertType, alertMsg);
    } else {
      dispatch(addToCart(product));
      handleAlert(alertType, alertMsg);
    }
  }

  return (
    <>
    <section>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <div className="container">
        <div className="flex gap-8 items-center">
          <div className="mb-4 flex-1 w-full rounded-md max-w-md max-h-[400px] overflow-hidden flex items-center justify-center">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col items-start gap-3">
            <Link to={`/categories/${category.toLowerCase().replace(/\s/g, "-")}`} className="bg-gray-200 text-black px-3 text-sm font-medium py-1 rounded">
              {category}
            </Link>
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="text-gray-600 text-lg">{description}</p>
            <div className="text-gray-700 flex items-center gap-2 justify-center">
                <span className="font-bold text-black">Color:</span>
               {colors && colors.map((color, key) => (
                  <span key={key} style={{background: color}} className={`p-2 inline-block rounded-full`}></span>
               ))}
            </div>
            <p className="text-2xl text-orange-500 font-bold">
              ${price.toFixed(0)}
            </p>
            <Button
              onClick={()=> handleAddToCart(product)}
              text={quantity < 1 ? "Sold out" : "Add to cart"}
              className={`${quantity < 1 ? "text-red-500 bg-stone-100" : ""}`}
            />
          </div>
        </div>
      </div>
    </section>
    {
      relatedProducts.length > 1 && <section className="bg-gray-100">
      {alert && <Alert type={alert.type} message={alert.message} />}
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 capitalize">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {relatedProducts.slice(0, 4).map((product, key) =>(
            <ProductCard_v2 product={product} key={key} productAlert={handleAlert}/>
          ))}
        </div>
      </div>
    </section>
    }
    
    </>
  );
};

export default SingleProduct;