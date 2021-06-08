import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import SigninScreen from './Screens/SigninScreen';
import { useDispatch, useSelector } from 'react-redux';
import RegisterScreen from './Screens/RegisterScreen';
import ProductsScreen from './Screens/ProductsScreen';
import ShippingScreen from './Screens/ShippingScreen';
import PaymentScreen from './Screens/PaymentScreen';
import PlaceOrderScreen from './Screens/PlaceOrderScreen';
import Sidebar from './components/Sidebar';

import { logout } from  './actions/userActions';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo, isAdmin } = userSignin;
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload(false);
  }

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>

    <div className="grid-container">
    <header className="header">
      <div className="header-links left">
        <button onClick={openMenu}>
          SHOP &#9661;
        </button>
        <Link to="/aboutus">About Us</Link>
        <Link to="/testimonials">Testimonials</Link>
      </div>
      <div className="brand">
        <Link to="/">LEVELUP</Link>
      </div>
      <div className="header-links">
        {
          userInfo ? 
          <Link to="/profile">{userInfo.name}</Link> :
          <Link to="/signin">Sign In</Link>
        }
        <a href="cart">Cart</a>
        {
          userInfo ? 
          <Link to="/products">Admin</Link> : ''
        }
        {
          userInfo ? 
          <Link to="/" onClick={handleLogout}>Logout</Link> : ''
        }
      </div>
    </header>
    <aside className="sidebar">
        <Sidebar />
    </aside>
    <main className="main">
          <div className="content">
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />

          </div>

        </main>
        <footer className="footer">
          All rights reserved &copy; 2021
    </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
