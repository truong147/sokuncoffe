import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { getCartItemsCount } = useCart();
  const { user } = useAuth();

  const cartItemCount = getCartItemsCount();
  const isHomePage = location.pathname === "/";

  // Xử lý hiệu ứng scroll
  useEffect(() => {
    const handleScroll = () => {
      // Giảm ngưỡng scroll xuống để navbar di chuyển lên top sớm hơn
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Đóng mobile menu khi chuyển trang
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleUserClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="relative">
      {" "}
      {/* Top Bar - Fixed Position với hiệu ứng ẩn khi scroll */}
      <div
        className={`bg-coffee-gray text-gray py-1.5 text-sm fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled ? "opacity-0 -translate-y-full" : "opacity-100"
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex items-center space-x-6">
              <div className="flex justify-center">
                <a
                  href="https://goo.gl/maps/2tFq6r8Qw1v9vQwA7"
                  className="flex items-center hover:text-coffee-orange transition-colors whitespace-nowrap"
                >
                  <img
                    src="https://file.hstatic.net/1000075078/file/vector_706a88566eab4f009bed6eea93cd890b.png"
                    alt="Store locations"
                    className="w-4 h-4 mr-2"
                  />
                  <span>Cửa hàng đầu tiên và tâm huyết của chúng tôi</span>
                </a>
              </div>
              <a
                href="tel:18006936"
                className="flex items-center hover:text-coffee-orange transition-colors"
              >
                <img
                  src="https://file.hstatic.net/1000075078/file/group_8de276faa50c486b9d485826c506803b.png"
                  alt="Phone"
                  className="w-4 h-4 mr-2"
                />
                <span>Đặt hàng: 0559223205</span>
              </a>
              <div className="hidden md:block"></div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              {/* Social links */}
            </div>
          </div>
        </div>
      </div>
      {/* Main Header - Fixed Position with improved glassmorphism */}{" "}
      <header
        className={`${
          scrolled
            ? "bg-white/90 shadow-lg top-0"
            : "bg-white/70 shadow-md top-8"
        } backdrop-blur-md fixed left-0 right-0 z-[55] transition-all duration-500`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span
                className={`font-bold text-coffee-dark transition-all duration-500 ${
                  scrolled ? "text-lg" : "text-xl"
                }`}
              >
                SokunCoffee
              </span>
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-coffee-dark hover:text-coffee-orange transition-colors font-medium relative group"
              >
                Trang chủ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coffee-orange transition-all group-hover:w-full"></span>
              </Link>
              <Link
                to="/collections/all"
                className="text-coffee-dark hover:text-coffee-orange transition-colors font-medium relative group"
              >
                Sản phẩm
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coffee-orange transition-all group-hover:w-full"></span>
              </Link>
              <Link
                to="/promotions"
                className="text-coffee-dark hover:text-coffee-orange transition-colors font-medium relative group"
              >
                Khuyến mãi
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coffee-orange transition-all group-hover:w-full"></span>
              </Link>
              <Link
                to="/about"
                className="text-coffee-dark hover:text-coffee-orange transition-colors font-medium relative group"
              >
                Cửa hàng
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coffee-orange transition-all group-hover:w-full"></span>
              </Link>
            </nav>
            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 hover:bg-opacity-50 rounded-full transition-colors duration-200">
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-700 hover:text-coffee-orange transition-colors" />
              </button>
              <button
                onClick={() => {
                  if (user) {
                    navigate("/cart");
                  } else {
                    navigate("/login");
                  }
                }}
                className="p-2 hover:bg-gray-100 hover:bg-opacity-50 rounded-full relative transition-colors duration-200"
              >
                <ShoppingBagIcon className="w-5 h-5 text-gray-700 hover:text-coffee-orange transition-colors" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-coffee-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                    {cartItemCount}
                  </span>
                )}
              </button>
              <button
                onClick={handleUserClick}
                className="p-2 hover:bg-gray-100 hover:bg-opacity-50 rounded-full relative transition-colors duration-200"
              >
                {user ? (
                  <div className="w-8 h-8 bg-coffee-orange rounded-full flex items-center justify-center shadow-sm hover:shadow transition-shadow">
                    <span className="text-white font-semibold text-sm">
                      {user.name ? user.name.charAt(0).toUpperCase() : "U"}
                    </span>
                  </div>
                ) : (
                  <UserIcon className="w-5 h-5 text-gray-700 hover:text-coffee-orange transition-colors" />
                )}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-100 hover:bg-opacity-50 rounded-full transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <XMarkIcon className="w-5 h-5 text-gray-700 hover:text-coffee-orange transition-colors" />
                ) : (
                  <Bars3Icon className="w-5 h-5 text-gray-700 hover:text-coffee-orange transition-colors" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t bg-white/80 backdrop-blur-lg">
              <div className="px-4 space-y-2">
                <Link
                  to="/"
                  className="block py-3 px-2 text-coffee-dark hover:text-coffee-orange transition-colors hover:bg-gray-50/50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trang chủ
                </Link>
                <Link
                  to="/collections/all"
                  className="block py-3 px-2 text-coffee-dark hover:text-coffee-orange transition-colors hover:bg-gray-50/50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sản phẩm
                </Link>
                <Link
                  to="/promotions"
                  className="block py-3 px-2 text-coffee-dark hover:text-coffee-orange transition-colors hover:bg-gray-50/50 rounded-lg"
                >
                  Khuyến mãi
                </Link>
                <Link
                  to="/about"
                  className="block py-3 px-2 text-coffee-dark hover:text-coffee-orange transition-colors hover:bg-gray-50/50 rounded-lg"
                >
                  Cửa hàng
                </Link>

                {user && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => {
                        if (user) {
                          navigate("/cart");
                        } else {
                          navigate("/login");
                        }
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left py-3 px-2 text-coffee-dark hover:text-coffee-orange transition-colors hover:bg-gray-50/50 rounded-lg"
                    >
                      Giỏ hàng ({cartItemCount})
                    </button>
                    <Link
                      to="/profile"
                      className="block py-3 px-2 text-coffee-dark hover:text-coffee-orange transition-colors hover:bg-gray-50/50 rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Tài khoản của tôi
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
