import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../components/ui/ProductCard";
// Assuming you have a way to get products, or you'll adapt this
import { products } from "../../data/products";

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Theo dõi vị trí scroll để điều chỉnh giao diện tương ứng
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mock data - replace with actual data fetching and structure as needed
  const newProducts = products.slice(0, 3); // Example: Hi-Tea Vải, Cơm Chiên Hải Sản, Mochi Kem Chocolate

  const blogPosts = {
    coffeeholic: [
      {
        id: 1,
        title: "BẮT GẶP SÀI GÒN XƯA TRONG MÓN UỐNG HIỆN ĐẠI CỦA GIỚI TRẺ",
        date: "01/11/2023",
        link: "/blogs/coffeeholic/bat-gap-sai-gon-xua",
        imageUrl:
          "https://file.hstatic.net/1000075078/article/1200x630_0b0081d93ba6479b934e04e71cbfd102_grande.jpg",
      },
      {
        id: 2,
        title:
          "CHỈ CHỌN CÀ PHÊ MỖI SÁNG NHƯNG CŨNG KHIẾN CUỘC SỐNG CỦA BẠN THÊM THÚ VỊ, TẠI SAO KHÔNG?",
        date: "30/10/2023",
        link: "/blogs/coffeeholic/chi-chon-ca-phe",
        imageUrl:
          "https://file.hstatic.net/1000075078/article/7_tam_focus_ly_69c0bd5016024cba868e270d8ccbe696_grande.jpg",
      },
      {
        id: 3,
        title:
          "NGHỆ THUẬT PHA CHẾ ESPRESSO - BÍ QUYẾT TỪ NHỮNG BARISTA CHUYÊN NGHIỆP",
        date: "25/10/2023",
        link: "/blogs/coffeeholic/nghe-thuat-pha-che-espresso",
        imageUrl:
          "https://file.hstatic.net/1000075078/article/3__1__2b67342f4db64bb082944cf078afd910_grande.jpg",
      },
      {
        id: 4,
        title:
          "CÀ PHÊ VIỆT NAM - HÀNH TRÌNH TỪ NƯƠNG RẪY ĐẾN TÁCH CÀ PHÊ THƠM NGON",
        date: "20/10/2023",
        link: "/blogs/coffeeholic/ca-phe-viet-nam-hanh-trinh",
        imageUrl:
          "https://file.hstatic.net/1000075078/article/tra_xanh_c9c19ef778394841b45aa739b2766f63_master.jpg",
      },
      {
        id: 5,
        title: "COLD BREW - XU HƯỚNG CÀ PHÊ LẠNH ĐANG ĐƯỢC GIỚI TRẺ YÊU THÍCH",
        date: "18/10/2023",
        link: "/blogs/coffeeholic/cold-brew-xu-huong",
        imageUrl:
          "https://file.hstatic.net/1000075078/article/1__3__ec2969cff66c462d8d29959f1456bc08_grande.jpg",
      },
      {
        id: 6,
        title: "LATTE ART - NHỮNG TÁC PHẨM NGHỆ THUẬT TRÊN TÁCH CÀ PHÊ",
        date: "15/10/2023",
        link: "/blogs/coffeeholic/latte-art-nghe-thuat",
        imageUrl:
          "https://file.hstatic.net/1000075078/article/thecoffehouse_ca_phe_01_b4adbd88db6e4ca3b7c2c5934d1a1ed9_grande.jpg",
      },
    ],
    teaholic: [
      {
        id: 1,
        title:
          'TRUNG THU NÀY, SAO BẠN KHÔNG TỰ CHO MÌNH "DỪNG MỘT CHÚT THÔI, THƯỞNG MỘT CHÚT TRÔI"?',
        date: "19/09/2023",
        link: "/blogs/teaholic/trung-thu-nay",
        imageUrl:
          "https://file.hstatic.net/1000075078/article/an_banh_uong_nuoc_nhom_03_d499c0cab14746588fff6fe0dee678ad_grande.jpg",
      },
      {
        id: 2,
        title: "TRÀ XANH TÂY BẮC - TINH HOA THIÊN NHIÊN TRÊN TỪNG NGỤM TRÀ",
        date: "15/09/2023",
        link: "/blogs/teaholic/tra-xanh-tay-bac",
        imageUrl:
          "https://file.hstatic.net/1000075078/article/cautoankeothom_thecoffeehouse_03_29cd435c9a574e1a867ac36f2c863bb6_grande.jpg",
      },
      {
        id: 3,
        title: "MATCHA - VỊ ĐẮNG THANH TỪ XỨ SỞ HOA ANH ĐÀO",
        date: "12/09/2023",
        link: "/blogs/teaholic/matcha-vi-dang-thanh",
        imageUrl:
          "https://file.hstatic.net/1000075078/article/dscf0216_2890bcca44ae49aaaf843d5fa3db2fc6_grande.jpg",
      },
    ],
    blog: [
      {
        id: 1,
        title:
          "THE COFFEE HOUSE PHẢN HỒI VỀ SỰ CỐ VỠ KÍNH DO GIÔNG LỐC TẠI CỬA HÀNG THE COFFEE HOUSE THÁI HÀ, HÀ NỘI",
        date: "09/05/2024",
        link: "/blogs/blog/su-co-vo-kinh",
        imageUrl:
          "https://file.hstatic.net/1000075078/article/thecoffeehouse_timesquare_02_b87f7576b02d4d82ba5b7ed4e40b6b00_grande.png",
      },
      {
        id: 2,
        title: "THE COFFEE HOUSE KHAI TRƯƠNG CỬA HÀNG MỚI TẠI TRUNG TÂM TP.HCM",
        date: "25/04/2024",
        link: "/blogs/blog/khai-truong-cua-hang-moi",
        imageUrl:
          "https://file.hstatic.net/1000075078/article/zalo_01c6f0bfb0854951a16a92b52457ca56_grande.jpg",
      },
      {
        id: 3,
        title: "NGƯỢC LÊN TÂY BẮC GÓI VỊ MỘC VỀ XUÔI",
        date: "25/04/2024",
        link: "/blogs/blog/khai-truong-cua-hang-moi",
        imageUrl:
          "https://file.hstatic.net/1000075078/article/thecoffeehouse_traxanhtaybac_1_d8c2ac635c5941a19c0065339727e41a_master.jpg",
      },
    ],
  };

  const heroSlides = [
    {
      id: 1,
      imageUrl:
        "/assets/backgroudBaner1.jpg",
      alt: "The Coffee House Banner 1",
      // title: "Trải nghiệm Cà Phê Đậm Đà",
      // ctaText: "Thử ngay",
      // ctaLink: "/collections/all"
    },
    {
      id: 2,
    
      imageUrl:
      "/assets/backgroudBaner2.jpg",
    alt: "The Coffee House Banner 2",
      // title: "Khám Phá Menu Mới",
      // ctaText: "Xem Menu",
      // ctaLink: "/collections/all"
    },
    // Add more slides as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
    arrows: true, // Show navigation arrows
    fade: true, // Thêm hiệu ứng fade cho slider
    cssEase: "linear", // Chuyển đổi mượt mà
    // You can customize arrows using prevArrow and nextArrow properties
    // prevArrow: <CustomPrevArrow />,
    // nextArrow: <CustomNextArrow />,
  };
  return (
    <div>
      {/* Hero Section - Banner nằm ở top khi scroll xuống, được điều chỉnh để khớp với navbar */}
      <section
        className={`relative h-[100vh] pt-0 ${
          scrollPosition > 0 ? "-mt-10" : "-mt-16"
        } z-[30] transition-all duration-300`}
      >
        <Slider {...sliderSettings}>
          {heroSlides.map((slide) => (
            <div key={slide.id} className="relative h-[100vh] flex items-center justify-center bg-black">
              <img
                src={slide.imageUrl}
                alt={slide.alt}
                className="w-full h-full object-cover mx-auto"
              />
            </div>
          ))}
        </Slider>{" "}
      </section>

      {/* New Products Section - Đã điều chỉnh để không bị navbar đè lên */}
      <section className="py-16 mt-12">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Sản phẩm mới</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/collections/all"
              className="text-coffee-orange hover:underline font-semibold"
            >
              Xem tất cả sản phẩm →
            </Link>
          </div>
        </div>
      </section>

      {/* Trà Xanh Tây Bắc Section */}
      <section className="py-16 bg-green-50">
        {" "}
        {/* Light green background */}
        <div className="container-custom flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="/assets/backgroud.png"
              alt="Cà Phê Việt Nam"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div className="md:w-1/2 text-gray-700">
            <h2 className="text-4xl font-bold mb-6 text-green-800">
            Cà Phê Việt Nam
            </h2>
            <p className="mb-4 text-lg">
            Được vun trồng trên những vùng đất đỏ bazan màu mỡ, dưới ánh nắng chan hòa và khí hậu đặc trưng của vùng cao nguyên, hạt cà phê Việt Nam kết tinh hương vị đậm đà, mạnh mẽ và đầy bản sắc.


            </p>
            <p className="mb-6 text-lg">
            Từ bàn tay cần cù của người nông dân, mỗi hạt cà phê được chăm chút tỉ mỉ qua từng công đoạn rang xay truyền thống, tạo nên tách cà phê mang đậm hương thơm thuần Việt – dễ uống, dễ say mê và không thể lẫn với bất kỳ nơi đâu.
            </p>
            <Link
              to="/products/tra-xanh-tay-bac"
              className="btn-primary bg-green-600 hover:bg-green-700 inline-block"
            >
              {" "}
              {/* Adjust link and styling */}
              Thử ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Chuyện Nhà (Blog Section) */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <img
              src="https://file.hstatic.net/1000075078/file/coffee-2_2_92db24958ff14ac4b4249b3256f7a415.png"
              alt="Chuyện Nhà"
              className="mx-auto mb-4 h-12"
            />
            <h2 className="text-4xl font-bold text-gray-800">Chuyện Nhà</h2>
          </div>

          {/* Coffeeholic */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-coffee-dark mb-6">
              Coffeeholic
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.coffeeholic.map((post) => (
                <div
                  key={post.id}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {post.imageUrl && (
                    <Link to={post.link}>
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                  )}
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">
                      <Link to={post.link} className="hover:text-coffee-orange">
                        {post.title}
                      </Link>
                    </h4>
                    <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                    <Link
                      to={post.link}
                      className="text-coffee-orange hover:underline text-sm font-semibold"
                    >
                      Đọc thêm →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Teaholic */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-tea-dark mb-6">
              Teaholic
            </h3>{" "}
            {/* Assuming a tea-dark color, define in tailwind.config.js */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.teaholic.map((post) => (
                <div
                  key={post.id}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {post.imageUrl && (
                    <Link to={post.link}>
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                  )}
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">
                      <Link to={post.link} className="hover:text-tea-default">
                        {post.title}
                      </Link>
                    </h4>{" "}
                    {/* Assuming a tea-default color */}
                    <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                    <Link
                      to={post.link}
                      className="text-tea-default hover:underline text-sm font-semibold"
                    >
                      Đọc thêm →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Blog</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.blog.map((post) => (
                <div
                  key={post.id}
                  className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {post.imageUrl && (
                    <Link to={post.link}>
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    </Link>
                  )}
                  <div className="p-6">
                    <h4 className="font-bold text-lg mb-2">
                      <Link to={post.link} className="hover:text-blue-600">
                        {post.title}
                      </Link>
                    </h4>
                    <p className="text-sm text-gray-500 mb-3">{post.date}</p>
                    <Link
                      to={post.link}
                      className="text-blue-600 hover:underline text-sm font-semibold"
                    >
                      Đọc thêm →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blogs"
              className="text-coffee-orange hover:underline font-semibold"
            >
              Xem tất cả bài viết →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
