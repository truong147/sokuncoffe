import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../../components/ui/ProductCard";
import { products } from "../../data/products";

const Collections = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    let result = products;

    // Lọc theo category
    if (category && category !== "all") {
      result = result.filter((product) => product.category === category);
    }

    // Lọc theo giá
    if (selectedPrice !== "all") {
      const [min, max] = selectedPrice.split("-").map(Number);
      result = result.filter((product) => {
        if (max) {
          return product.price >= min && product.price <= max;
        }
        return product.price >= min;
      });
    }

    // Lọc theo loại
    if (selectedType !== "all") {
      result = result.filter((product) => product.type === selectedType);
    }

    // Sắp xếp
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    setFilteredProducts(result);
  }, [category, selectedPrice, selectedType, sortBy]);

  const categories = [
    { id: "all", name: "Tất cả" },
    { id: "Cà Phê", name: "Cà phê" },
    { id: "Trà", name: "Trà" },
    { id: "CloudTea", name: "CloudTea" },
    { id: "Bánh", name: "Bánh ngọt" },
  ];

  const priceRanges = [
    { id: "all", name: "Tất cả giá" },
    { id: "0-30000", name: "Dưới 30.000đ" },
    { id: "30000-50000", name: "30.000đ - 50.000đ" },
    { id: "50000", name: "Trên 50.000đ" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-coffee-orange text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold">Tất cả sản phẩm</h1>
          <p className="mt-2">Khám phá menu đa dạng của chúng tôi</p>
        </div>
      </div>

      <div className="container-custom py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-gray-700 hover:text-coffee-orange">
                  Trang chủ
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <span className="text-gray-500">
                    {category
                      ? categories.find((c) => c.id === category)?.name
                      : "Tất cả sản phẩm"}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="w-full md:w-64 space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Danh mục</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/collections/${cat.id}`}
                    className={`block py-2 px-4 rounded-md ${
                      category === cat.id
                        ? "bg-coffee-orange text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Khoảng giá</h3>
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedPrice(range.id)}
                    className={`block w-full text-left py-2 px-4 rounded-md ${
                      selectedPrice === range.id
                        ? "bg-coffee-orange text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {range.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Sort Options */}
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">
                Hiển thị {filteredProducts.length} sản phẩm
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-coffee-orange"
              >
                <option value="default">Mặc định</option>
                <option value="price-asc">Giá tăng dần</option>
                <option value="price-desc">Giá giảm dần</option>
                <option value="name-asc">Tên A-Z</option>
              </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">
                  Không tìm thấy sản phẩm
                </h3>
                <p className="text-gray-600">
                  Vui lòng thử lại với bộ lọc khác
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
