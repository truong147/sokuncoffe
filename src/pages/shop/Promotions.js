import React from "react";
import { Link } from "react-router-dom";
import { formatCurrency, formatDate } from "../../utils/format";
import { products } from "../../data/products";

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: "Ưu đãi tháng 5",
      description: "Mua 2 ly bất kỳ tặng 1 ly cùng loại",
      image:
        products.find((p) => p.id === "ca-phe-sua-da")?.image ||
        "https://via.placeholder.com/400x300?text=Promotion+1",
      validUntil: "2024-05-31",
      code: "MAY2024",
    },
    {
      id: 2,
      title: "Khuyến mãi cuối tuần",
      description: "Giảm 20% cho tất cả đồ uống",
      image:
        products.find((p) => p.id === "oolong-tu-quy-sen-nong")?.image ||
        "https://via.placeholder.com/400x300?text=Promotion+2",
      validUntil: "Mỗi cuối tuần",
      code: "WEEKEND20",
    },
    {
      id: 3,
      title: "Combo gia đình",
      description: "Mua 3 ly bất kỳ chỉ với 199.000đ",
      image:
        products.find((p) => p.id === "banh-mi-que-pate")?.image ||
        "https://via.placeholder.com/400x300?text=Promotion+3",
      validUntil: "2024-06-30",
      code: "FAMILY199",
    },
    {
      id: 4,
      title: "Giảm 15% cho đơn hàng đầu tiên",
      description: "Áp dụng cho khách hàng mới khi tải app",
      image:
        products.find((p) => p.id === "tra-dao-cam-sa")?.image ||
        "https://via.placeholder.com/400x300?text=Promotion+4",
      validUntil: "31/12/2024",
      code: "WELCOME15",
    },
    {
      id: 5,
      title: "Freeship mọi đơn hàng từ 100K",
      description: "Miễn phí giao hàng cho hóa đơn trên 100.000đ",
      image:
        products.find((p) => p.id === "croissant-trung-muoi")?.image ||
        "https://via.placeholder.com/400x300?text=Promotion+5",
      validUntil: "2024-07-15",
      code: "FREESHIP",
    },
    {
      id: 6,
      title: "Tích điểm đổi quà hấp dẫn",
      description: "Thành viên bạc tích 1.5 điểm, thành viên vàng tích 2 điểm",
      image:
        products.find((p) => p.id === "ca-phe-den-da")?.image ||
        "https://via.placeholder.com/400x300?text=Promotion+6",
      validUntil: "Không giới hạn",
      code: "MEMBERBONUS",
    },
  ];

  const renderValidUntil = (dateString) => {
    try {
      const date = new Date(dateString);
      if (!isNaN(date.getTime())) {
        return formatDate(date);
      } else {
        return dateString;
      }
    } catch (e) {
      return dateString;
    }
  };

  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold text-center mb-10 text-coffee-dark">
        Khuyến Mãi Hấp Dẫn
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="relative h-56">
              <img
                src={promo.image}
                alt={promo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                {promo.code}
              </div>
            </div>

            <div className="p-6 flex flex-col justify-between h-[calc(100%-14rem)]">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-coffee-dark">
                  {promo.title}
                </h3>
                <p className="text-gray-700 mb-4 text-base">
                  {promo.description}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-auto pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500 mb-2 sm:mb-0">
                  Áp dụng đến: {renderValidUntil(promo.validUntil)}
                </span>
                <Link
                  to="/collections/all"
                  className="bg-coffee-orange text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-md"
                >
                  Mua ngay
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Special Offer Banner */}
      <div className="mt-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-10 text-white shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Đăng Ký Thành Viên
              <br />
              Nhận Ưu Đãi Độc Quyền
            </h2>
            <p className="text-lg mb-6 max-w-md mx-auto md:mx-0">
              Trở thành thành viên của SokunCoffee để không bỏ lỡ các
              chương trình khuyến mãi đặc biệt và ưu đãi dành riêng cho bạn!
            </p>
            <Link
              to="/register"
              className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200 shadow-md inline-block"
            >
              Đăng ký ngay
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="./assets/coffee.png"
              alt="Ưu đãi đặc biệt"
              className="rounded-lg shadow-2xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotions;
