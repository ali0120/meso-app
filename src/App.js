import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
import ScrollToTop from "./components/ScrollTop";

import Footer from "./components/Footer/Footer";
import ProductsPage from "./pages/ProductsPage";
import { Home, About, Error, SingleProduct, Cart } from "./pages";
import AllProduct from "./pages/AllProduct";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/category/:id">
          <ProductsPage />
        </Route>
        <Route exact path="/products">
          <AllProduct />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />}></Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
