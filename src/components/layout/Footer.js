import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="font-bold text-xl">SokunCoffee</span>
            </div>
            <p className="text-gray-300 text-sm">
              Mang đến trải nghiệm cà phê tuyệt vời cho mọi người
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-coffee-orange transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-coffee-orange transition-colors">Sản phẩm</a></li>
              <li><a href="#" className="hover:text-coffee-orange transition-colors">Khuyến mãi</a></li>
              <li><a href="#" className="hover:text-coffee-orange transition-colors">Cửa hàng</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hỗ trợ</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-coffee-orange transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-coffee-orange transition-colors">Chính sách</a></li>
              <li><a href="#" className="hover:text-coffee-orange transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-coffee-orange transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liên hệ</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0559223205
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@sokuncoffee.com
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-coffee-orange transition-colors">
                <span className="text-sm font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-coffee-orange transition-colors">
                <span className="text-sm font-bold">ig</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-coffee-orange transition-colors">
                <span className="text-sm font-bold">yt</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 SokunCoffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
