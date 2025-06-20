import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "../../components/ui/ProductCard";
import { useCart } from "../../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === id);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Sản phẩm không tìm thấy</h2>
        <Link
          to="/collections/all"
          className="text-coffee-orange hover:underline"
        >
          Quay lại trang sản phẩm
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);

    // Show success message
    alert("Đã thêm vào giỏ hàng!");
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, quantity);
    // Có thể thêm một alert nhỏ hoặc không, tùy thuộc vào UX mong muốn
    // alert("Chuyển đến trang thanh toán!");
    navigate("/checkout");
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="container-custom py-8">
      {/* Breadcrumb */}
      <nav className="text-sm mb-8">
        <ol className="flex items-center space-x-2">
          <li>
            <Link to="/" className="text-gray-500 hover:text-coffee-orange">
              Trang chủ
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <Link
              to="/collections/all"
              className="text-gray-500 hover:text-coffee-orange"
            >
              Sản phẩm
            </Link>
          </li>
          <li className="text-gray-500">/</li>
          <li className="text-coffee-dark font-semibold">{product.name}</li>
        </ol>
      </nav>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div>
          <div className="mb-4">
            <img
              src={product.images?.[selectedImage] || product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-lg"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/500x500?text=Product+Image";
              }}
            />
          </div>
          {product.images && product.images.length > 1 && (
            <div className="flex gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index
                      ? "border-coffee-orange"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/80x80?text=Image";
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-6">
            <p className="text-gray-500 mb-2">{product.category}</p>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            {/* Badges */}
            <div className="flex gap-2 mb-4">
              {product.isNew && (
                <span className="bg-green-500 text-white text-sm px-3 py-1 rounded">
                  Mới
                </span>
              )}
              {product.isBestSeller && (
                <span className="bg-red-500 text-white text-sm px-3 py-1 rounded">
                  Best Seller
                </span>
              )}
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-coffee-orange">
                {product.price.toLocaleString("vi-VN")}₫
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    {product.originalPrice.toLocaleString("vi-VN")}₫
                  </span>
                  <span className="bg-coffee-orange text-white text-sm px-2 py-1 rounded">
                    -{discount}%
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Kích thước</h3>
              <div className="flex gap-3">
                {["S", "M", "L"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-lg border-2 font-semibold transition-colors ${
                      selectedSize === size
                        ? "border-coffee-orange bg-coffee-orange text-white"
                        : "border-gray-300 hover:border-coffee-orange"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Số lượng</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-500">
                  Tổng: {(product.price * quantity).toLocaleString("vi-VN")}₫
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full btn-primary mb-4"
            >
              Thêm vào giỏ hàng
            </button>
            <button onClick={handleBuyNow} className="w-full btn-secondary">
              Mua ngay
            </button>

            {/* Additional Info */}
            <div className="mt-8 space-y-2 text-sm text-gray-600">
              <p>✓ Giao hàng nhanh trong 30 phút</p>
              <p>✓ Miễn phí giao hàng cho đơn từ 50.000₫</p>
              <p>✓ Đổi trả trong 24h nếu có vấn đề</p>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 border-t">
          <h2 className="text-2xl font-bold mb-8">Sản phẩm liên quan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;
