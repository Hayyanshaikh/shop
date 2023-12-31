// Theme Files Imports
import Home from '../theme/pages/Home.jsx';
import SingleProduct from '../theme/pages/SingleProduct.jsx';
import Products from '../theme/pages/Products.jsx';
import ThemeLayout from '../theme/ThemeLayout.jsx';

const routes = [
  {
    path: '/',
    element: <ThemeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ':category', // Use single quotes for dynamic segments
        element: <Products />,
      },
      {
        path: ':category/:productName',
        element: <SingleProduct />,
      },
      
    ],
  },
];

export default routes;