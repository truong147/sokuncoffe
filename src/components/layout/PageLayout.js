import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * PageLayout - Component cho layout trang
 * Tự động quản lý khoảng cách cho nội dung trang để không bị header đè lên
 * Trang Home được xử lý đặc biệt riêng
 */
const PageLayout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [scrollPosition, setScrollPosition] = useState(0);

  // Theo dõi vị trí cuộn để quản lý hiển thị tốt hơn
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Reset scroll về đầu trang khi chuyển trang
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div 
      className={`${isHomePage ? '' : 'pt-28 md:pt-28 sm:pt-24'} transition-all duration-300`}
      style={{ marginTop: isHomePage && scrollPosition > 0 ? '0' : '' }}
    >
      {children}
    </div>
  );
};

export default PageLayout;
