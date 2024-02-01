import React, {useState, useEffect} from 'react';
import Button from '../../components/Button.jsx';
import Alert from '../../components/Alert.jsx';
import ProductCard_v1 from '../components/ProductCard_v1.jsx';
import ProductCard_v2 from '../components/ProductCard_v2.jsx';
  import { useSelector } from "react-redux";
import CategoryCard from '../components/CategoryCard.jsx';
import productData from '../../json_files/porducts.json';
import categoriesData from '../../json_files/categories.json';

const Home = () => {
  const [alert, setAlert] = useState(null);
  const user = useSelector(state => state.authentication.user);
  const featuredData = [...categoriesData.filter(category => category.featured),
    ...categoriesData.flatMap(category => category.subcategories.filter(subcategory => subcategory.featured))
  ];
  const filterPopular = productData.filter(popular => popular.popular === true);

  const handleAlert = (type, message) => {
    setAlert({
      type,
      message
    });

    setTimeout(()=>{
      setAlert(null);
    }, 3000)
  }
  useEffect(() => {
    setAlert({
      type: "success",
      message: user && user.message
    });

    setTimeout(()=>{
      setAlert(null);
    }, 3000)
  }, [])
  return (
    <>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <section className="bg-gradient-to-r from-indigo-800 via-purple-800 to-pink-800 h-[300px] flex items-center justify-center">
        <div className="container">
          <div className="text-white">
            <div className="text-center flex flex-col items-center">
              <h1 className="text-4xl font-bold mb-4">Welcome to Our Ecommerce Store</h1>
              <p className="text-lg mb-8">Discover the Best Deals on Quality Products</p>
              <Button text="All Products" link="/" />
            </div>
          </div>
        </div>
      </section>
      <section className="popular_products">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 capitalize">popular product</h2>
          <div className="pop_product_main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
            {filterPopular.map((product, key) => (
              <ProductCard_v1 product={product} key={key} productAlert={handleAlert} />
            ))}
          </div>
        </div>
      </section>

      <section className="featured_categories bg-gray-100">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 capitalize">featured categories</h2>
          <div className="featured_categories_main grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {featuredData.map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>


      <section className="popular_products">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10 capitalize">popular product</h2>
          <div className="pop_product_main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filterPopular.map((product, key) => (
              <ProductCard_v2 product={product} key={key} productAlert={handleAlert}/>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Home