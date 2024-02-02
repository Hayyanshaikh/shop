// Theme Files Imports
import Home from '../theme/pages/Home.jsx';
import SingleProduct from '../theme/pages/SingleProduct.jsx';
import Products from '../theme/pages/Products.jsx';
import Cart from '../theme/pages/Cart.jsx';
import Checkout from '../theme/pages/Checkout.jsx';
import Invoice from '../theme/pages/Invoice.jsx';
import UserProfile from '../theme/pages/UserProfile.jsx';
import Login from '../theme/pages/Login.jsx';
import Signup from '../theme/pages/Signup.jsx';
import ThemeLayout from '../theme/ThemeLayout.jsx';
import AdminLayout from '../admin/AdminLayout.jsx';
import Dashboard from '../admin/pages/Dashboard.jsx';
import ProductsAdmin from '../admin/pages/Products.jsx';
import OrdersAdmin from '../admin/pages/Orders.jsx';
import CustomersAdmin from '../admin/pages/Customers.jsx';
import CategoriesAdmin from '../admin/pages/Categories.jsx';
import CouponsAdmin from '../admin/pages/Coupons.jsx';
import SettingsAdmin from '../admin/pages/Settings.jsx';

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
        path: 'categories/:category',
        element: <Products />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'checkout/:invoice',
        element: <Invoice />,
      },
      {
        path: 'categories/:category/:productName',
        element: <SingleProduct />,
      },
      {
        path: 'users/:userId',
        element: <UserProfile />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <Signup />,
      },
    ],
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'products',
        element: <ProductsAdmin />,
      },
      {
        path: 'orders',
        element: <OrdersAdmin />,
      },
      {
        path: 'customers',
        element: <CustomersAdmin />,
      },
      {
        path: 'categories',
        element: <CategoriesAdmin />,
      },
      {
        path: 'coupons',
        element: <CouponsAdmin />,
      },
      {
        path: 'settings',
        element: <SettingsAdmin />,
      },
    ],
  },
];

export default routes;