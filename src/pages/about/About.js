import React from "react";
import { Link } from "react-router-dom";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

const About = () => {
  const stores = [
    {
      id: 1,
      name: "Chi nhánh Sài Gòn (Quận 1)",
      address: "26 Lý Tự Trọng, Bến Nghé, Quận 1, TP.HCM",
      phone: "1900 1122",
      mapLink: "https://maps.app.goo.gl/example1",
    },
    {
      id: 2,
      name: "Chi nhánh Hà Nội (Hoàn Kiếm)",
      address: "17 Phố Hàng Khay, Tràng Tiền, Hoàn Kiếm, Hà Nội",
      phone: "1900 1133",
      mapLink: "https://maps.app.goo.gl/example2",
    },
    {
      id: 3,
      name: "Chi nhánh Đà Nẵng (Hải Châu)",
      address: "155 Nguyễn Văn Linh, Nam Dương, Hải Châu, Đà Nẵng",
      phone: "1900 1144",
      mapLink: "https://maps.app.goo.gl/example3",
    },
    {
      id: 4,
      name: "Chi nhánh Cần Thơ (Ninh Kiều)",
      address: "209 Đường 30 Tháng 4, Hưng Lợi, Ninh Kiều, Cần Thơ",
      phone: "1900 1155",
      mapLink: "https://maps.app.goo.gl/example4",
    },
  ];

  return (
    <div className="container-custom py-16">
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-coffee-dark">
        Về SokunCoffee
      </h1>
      <div className="bg-white rounded-xl shadow-md p-8 lg:p-10 mb-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          SokunCoffee là chuỗi cà phê hàng đầu tại Việt Nam, mang đến không
          gian hiện đại, thoải mái và những trải nghiệm cà phê tuyệt vời cho
          khách hàng. Chúng tôi tin rằng, mỗi ly cà phê không chỉ là thức uống
          mà còn là cầu nối cho những câu chuyện, những khoảnh khắc đáng nhớ.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Với sứ mệnh phục vụ "Trải nghiệm hạnh phúc" cho khách hàng, SokunCoffee
          luôn nỗ lực cải thiện chất lượng sản phẩm, dịch vụ và không gian
          để mỗi lượt ghé thăm đều là một hành trình khám phá đầy thú vị.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Chúng tôi tự hào về đội ngũ nhân viên nhiệt huyết, những hạt cà phê
          được chọn lọc kỹ lưỡng và quy trình pha chế chuyên nghiệp, tất cả hòa
          quyện để tạo nên hương vị đặc trưng của Nhà.
        </p>
        <div className="text-center mt-10">
          <Link
            to="/collections/all"
            className="bg-coffee-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-200 shadow-md inline-block mr-4"
          >
            Khám phá Menu
          </Link>
          <Link
            to="/contact"
            className="bg-gray-200 text-coffee-dark px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200 shadow-md inline-block"
          >
            Liên hệ chúng tôi
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-7 border border-gray-100 transform transition-transform duration-300 hover:scale-[1.02]">
          <h2 className="text-2xl font-bold mb-4 text-coffee-dark">
            Sứ mệnh của chúng tôi
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Tạo ra những trải nghiệm khách hàng hạnh phúc và truyền cảm hứng về
            cà phê.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-7 border border-gray-100 transform transition-transform duration-300 hover:scale-[1.02]">
          <h2 className="text-2xl font-bold mb-4 text-coffee-dark">
            Giá trị cốt lõi
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>Khách hàng là trọng tâm</li>
            <li>Đam mê cà phê và sáng tạo</li>
            <li>Tinh thần đồng đội và phát triển</li>
            <li>Trách nhiệm xã hội</li>
          </ul>
        </div>
      </div>

      {/* Placeholder for an image or video */}
      <div className="bg-gray-100 rounded-xl p-6 text-center text-gray-500 italic">
        <img
          src="https://anviethouse.vn/wp-content/uploads/2022/05/Thiet-ke-quan-cafe-dep-3-2.png"
          alt="Nội thất quán cà phê hiện đại"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Store Locations Section */}
      <div className="mt-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-coffee-dark">
          Địa chỉ cửa hàng
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {stores.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-xl shadow-md p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3 text-coffee-dark flex items-center">
                <MapPinIcon className="h-6 w-6 text-coffee-orange mr-2" />
                {store.name}
              </h3>
              <p className="text-gray-700 mb-2 flex items-center text-base">
                <span className="mr-2"></span>Địa chỉ: {store.address}
              </p>
              <p className="text-gray-700 mb-4 flex items-center text-base">
                <PhoneIcon className="h-5 w-5 text-gray-500 mr-2" />
                Điện thoại: {store.phone}
              </p>
              <a
                href={store.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-coffee-orange hover:underline font-semibold text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414L6.586 9H5a1 1 0 100 2h1.586l2.707 2.707a1 1 0 001.414-1.414L9.414 11H11a1 1 0 100-2h-1.586l-.707-.707z"
                    clipRule="evenodd"
                  />
                </svg>
                Xem trên bản đồ
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
