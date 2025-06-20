import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import { setLocalStorage, getLocalStorage } from "../../utils/storage";
import { formatCurrency, formatPhoneNumber } from "../../utils/format";

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: user?.email || "",
    address: "",
    district: "",
    city: "",
    note: "",
    paymentMethod: "cash",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "phone" ? formatPhoneNumber(value.replace(/\D/g, "")) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate phone number
    const phoneRegex = /^(0|\+84)(\d{9,10})$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      alert("Vui lòng nhập số điện thoại hợp lệ");
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Vui lòng nhập email hợp lệ");
      return;
    }

    const order = {
      id: Date.now(),
      items: cartItems,
      total: getCartTotal(),
      customerInfo: formData,
      status: "pending",
      date: new Date().toISOString(),
    };

    try {
      const existingOrders = JSON.parse(getLocalStorage("orders") || "[]");
      existingOrders.push(order);
      setLocalStorage("orders", existingOrders);

      // Lưu trạng thái thanh toán thành công
      setLocalStorage("lastOrderSuccess", "true");
      setLocalStorage("lastOrderId", order.id.toString());

      clearCart();
      navigate(`/order/${order.id}`);
    } catch (error) {
      console.error("Error saving order to localStorage:", error);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Giỏ hàng trống</h2>
          <button
            onClick={() => navigate("/collections")}
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Tiếp tục mua sắm
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Thanh toán</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Thông tin giao hàng</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Họ và tên *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Số điện thoại *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Địa chỉ *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Quận/Huyện *
                </label>
                <input
                  type="text"
                  name="district"
                  value={formData.district}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Tỉnh/Thành phố *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Ghi chú</label>
              <textarea
                name="note"
                value={formData.note}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phương thức thanh toán
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === "cash"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span>Thanh toán khi nhận hàng (COD)</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="transfer"
                    checked={formData.paymentMethod === "transfer"}
                    onChange={handleInputChange}
                    className="mr-2"
                  />
                  <span>Chuyển khoản ngân hàng</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Đơn hàng của bạn</h2>
          <div className="bg-gray-50 p-6 rounded">
            {cartItems.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="flex justify-between mb-4"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    Size: {item.size} x {item.quantity}
                  </p>
                </div>
                <p className="font-medium">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            ))}

            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between mb-2">
                <p>Tạm tính</p>
                <p>{formatCurrency(getCartTotal())}</p>
              </div>
              <div className="flex justify-between mb-2">
                <p>Phí vận chuyển</p>
                <p>{formatCurrency(30000)}</p>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <p>Tổng cộng</p>
                <p className="text-orange-500">
                  {formatCurrency(getCartTotal() + 30000)}
                </p>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 text-white py-3 rounded mt-6 hover:bg-orange-600 font-semibold"
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
