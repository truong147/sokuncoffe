import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import PageLayout from "./components/layout/PageLayout";
import ScrollIndicator from "./components/ui/ScrollIndicator";
import Home from "./pages/home/Home";
import Collections from "./pages/shop/Collections";
import ProductDetails from "./pages/shop/ProductDetails";
import Promotions from "./pages/shop/Promotions";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/user/Profile";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/cart/Checkout";
import Order from "./pages/user/Order";
import About from "./pages/about/About";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <ScrollIndicator />
            <Header />
            <main className="flex-grow">
              <Routes>
                {/* Trang Home không có padding-top vì đã tùy chỉnh riêng */}
                <Route path="/" element={<Home />} />
                {/* Tất cả các trang khác được bọc trong PageLayout để quản lý khoảng cách */}
                <Route
                  path="/collections/all"
                  element={
                    <PageLayout>
                      <Collections />
                    </PageLayout>
                  }
                />
                <Route
                  path="/collections/:category"
                  element={
                    <PageLayout>
                      <Collections />
                    </PageLayout>
                  }
                />
                <Route
                  path="/products/:id"
                  element={
                    <PageLayout>
                      <ProductDetails />
                    </PageLayout>
                  }
                />
                <Route
                  path="/promotions"
                  element={
                    <PageLayout>
                      <Promotions />
                    </PageLayout>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PageLayout>
                      <Login />
                    </PageLayout>
                  }
                />
                <Route
                  path="/register"
                  element={
                    <PageLayout>
                      <Register />
                    </PageLayout>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <PageLayout>
                      <Profile />
                    </PageLayout>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <PageLayout>
                      <Cart />
                    </PageLayout>
                  }
                />
                <Route
                  path="/checkout"
                  element={
                    <PageLayout>
                      <Checkout />
                    </PageLayout>
                  }
                />
                <Route
                  path="/order/:orderId"
                  element={
                    <PageLayout>
                      <Order />
                    </PageLayout>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <PageLayout>
                      <About />
                    </PageLayout>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
