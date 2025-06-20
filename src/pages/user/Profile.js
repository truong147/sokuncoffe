import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getLocalStorage, removeLocalStorage } from "../../utils/storage";
import { formatPhoneNumber } from "../../utils/format";
import {
  UserIcon,
  ShoppingBagIcon,
  HeartIcon,
  MapPinIcon,
  CreditCardIcon,
  BellIcon,
  Cog6ToothIcon as CogIcon,
  ArrowLeftOnRectangleIcon as LogoutIcon,
} from "@heroicons/react/24/outline";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState("info");

  useEffect(() => {
    const savedUser = getLocalStorage("user");
    if (savedUser) {
      setUserData(savedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    logout();
    removeLocalStorage("user");
    navigate("/login");
  };

  const menuItems = [
    { id: "info", label: "Thông tin cá nhân", icon: UserIcon },
    { id: "orders", label: "Đơn hàng của tôi", icon: ShoppingBagIcon },
    { id: "favorites", label: "Sản phẩm yêu thích", icon: HeartIcon },
    { id: "addresses", label: "Địa chỉ giao hàng", icon: MapPinIcon },
    { id: "payment", label: "Phương thức thanh toán", icon: CreditCardIcon },
    { id: "notifications", label: "Thông báo", icon: BellIcon },
    { id: "settings", label: "Cài đặt", icon: CogIcon },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "info":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Thông tin cá nhân</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Họ và tên
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-coffee-orange focus:border-coffee-orange"
                  defaultValue={user?.name || ""}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-coffee-orange focus:border-coffee-orange"
                  defaultValue={user?.email || ""}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-coffee-orange focus:border-coffee-orange"
                  defaultValue={formatPhoneNumber(user?.phone) || ""}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Ngày sinh
                </label>
                <input
                  type="date"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-coffee-orange focus:border-coffee-orange"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Giới tính
                </label>
                <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-coffee-orange focus:border-coffee-orange">
                  <option>Nam</option>
                  <option>Nữ</option>
                  <option>Khác</option>
                </select>
              </div>
              <button className="bg-coffee-orange text-white px-6 py-2 rounded-md hover:bg-orange-600">
                Cập nhật thông tin
              </button>
            </div>
          </div>
        );

      case "orders":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Đơn hàng của tôi</h2>
            <div className="space-y-4">
              {/* Sample order */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold">#DH001234</p>
                    <p className="text-sm text-gray-500">
                      Ngày đặt: 15/03/2024
                    </p>
                  </div>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Đã giao
                  </span>
                </div>
                <div className="flex items-center space-x-4 mt-4">
                  <img
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=100&h=100&fit=crop"
                    alt="Product"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium">Cà Phê Sữa Đá</p>
                    <p className="text-sm text-gray-500">x2</p>
                  </div>
                  <p className="font-semibold">58.000đ</p>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <button className="text-coffee-orange hover:underline">
                    Xem chi tiết
                  </button>
                  <button className="text-coffee-orange hover:underline">
                    Đặt lại
                  </button>
                </div>
              </div>

              <div className="text-center py-8 text-gray-500">
                <ShoppingBagIcon className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                <p>Bạn chưa có đơn hàng nào</p>
              </div>
            </div>
          </div>
        );

      case "favorites":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Sản phẩm yêu thích</h2>
            <div className="text-center py-8 text-gray-500">
              <HeartIcon className="w-12 h-12 mx-auto mb-2 text-gray-300" />
              <p>Bạn chưa có sản phẩm yêu thích nào</p>
            </div>
          </div>
        );

      case "addresses":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Địa chỉ giao hàng</h2>
            <button className="bg-coffee-orange text-white px-4 py-2 rounded-md hover:bg-orange-600 mb-4">
              + Thêm địa chỉ mới
            </button>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold">Nhà riêng</p>
                    <p className="text-sm text-gray-600 mt-1">
                      123 Nguyễn Văn Linh, Phường 7, Quận Bình Thạnh, TP.HCM
                    </p>
                    <p className="text-sm text-gray-600">SĐT: 0901234567</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-coffee-orange hover:underline text-sm">
                      Sửa
                    </button>
                    <button className="text-red-500 hover:underline text-sm">
                      Xóa
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <span className="bg-coffee-orange text-white px-2 py-1 rounded text-xs">
                    Mặc định
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case "payment":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Phương thức thanh toán</h2>
            <button className="bg-coffee-orange text-white px-4 py-2 rounded-md hover:bg-orange-600 mb-4">
              + Thêm thẻ mới
            </button>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CreditCardIcon className="w-8 h-8 text-gray-400" />
                  <div>
                    <p className="font-medium">•••• •••• •••• 1234</p>
                    <p className="text-sm text-gray-500">Visa</p>
                  </div>
                </div>
                <button className="text-red-500 hover:underline text-sm">
                  Xóa
                </button>
              </div>
            </div>
          </div>
        );

      case "notifications":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Thông báo</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b">
                <div>
                  <p className="font-medium">Thông báo đơn hàng</p>
                  <p className="text-sm text-gray-500">
                    Nhận thông báo về tình trạng đơn hàng
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-coffee-orange"></div>
                </label>
              </div>
              <div className="flex items-center justify-between py-3 border-b">
                <div>
                  <p className="font-medium">Khuyến mãi</p>
                  <p className="text-sm text-gray-500">
                    Nhận thông báo về chương trình khuyến mãi
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-coffee-orange"></div>
                </label>
              </div>
            </div>
          </div>
        );

      case "settings":
        return (
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-6">Cài đặt</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Đổi mật khẩu</h3>
                <div className="space-y-3">
                  <input
                    type="password"
                    placeholder="Mật khẩu hiện tại"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-coffee-orange focus:border-coffee-orange"
                  />
                  <input
                    type="password"
                    placeholder="Mật khẩu mới"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-coffee-orange focus:border-coffee-orange"
                  />
                  <input
                    type="password"
                    placeholder="Xác nhận mật khẩu mới"
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-coffee-orange focus:border-coffee-orange"
                  />
                  <button className="bg-coffee-orange text-white px-4 py-2 rounded-md hover:bg-orange-600">
                    Đổi mật khẩu
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-2 text-red-600">
                  Xóa tài khoản
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  Một khi bạn xóa tài khoản, bạn sẽ không thể khôi phục lại
                  được.
                </p>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                  Xóa tài khoản
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 mb-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-coffee-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">
                    {user.name?.charAt(0).toUpperCase() || "U"}
                  </span>
                </div>
                <h3 className="font-semibold">{user.name || "User"}</h3>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow">
              <nav className="space-y-1">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 ${
                        activeTab === item.id
                          ? "bg-orange-50 text-coffee-orange border-l-4 border-coffee-orange"
                          : ""
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 text-red-600"
                >
                  <LogoutIcon className="w-5 h-5" />
                  <span>Đăng xuất</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
