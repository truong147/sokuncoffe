import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLocalStorage, removeLocalStorage } from "../../utils/storage";
import { formatCurrency, formatDate } from "../../utils/format";

const Order = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const orders = JSON.parse(getLocalStorage("orders") || "[]");
      const lastOrderSuccess = getLocalStorage("lastOrderSuccess") === "true";
      const lastOrderId = getLocalStorage("lastOrderId");

      if (lastOrderSuccess && lastOrderId === orderId) {
        // Xóa các thông tin tạm thời
        removeLocalStorage("lastOrderSuccess");
        removeLocalStorage("lastOrderId");
      }

      const foundOrder = orders.find((o) => o.id.toString() === orderId);
      if (foundOrder) {
        setOrder(foundOrder);
      } else {
        console.error("Order not found in localStorage");
        navigate("/");
      }
    } catch (error) {
      console.error("Error loading order from localStorage:", error);
      navigate("/");
    } finally {
      setLoading(false);
    }
  }, [orderId, navigate]);

  if (!order) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Không tìm thấy đơn hàng</h2>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Về trang chủ
          </button>
        </div>
      </div>
    );
  }

  const getStatusText = (status) => {
    const statusMap = {
      pending: "Đang xử lý",
      confirmed: "Đã xác nhận",
      shipping: "Đang giao hàng",
      delivered: "Đã giao hàng",
      cancelled: "Đã hủy",
    };
    return statusMap[status] || status;
  };

  const getStatusColor = (status) => {
    const colorMap = {
      pending: "text-yellow-600",
      confirmed: "text-blue-600",
      shipping: "text-purple-600",
      delivered: "text-green-600",
      cancelled: "text-red-600",
    };
    return colorMap[status] || "text-gray-600";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {" "}
        {/* Success Message */}
        {(order.status === "pending" || orderSuccess) && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 shadow-md">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="font-bold text-lg">Đặt hàng thành công!</p>
            </div>
            <p className="mt-2">
              Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ với bạn sớm nhất.
            </p>
            {orderSuccess && (
              <div className="mt-2 bg-white p-3 rounded border border-green-200">
                <p className="font-semibold flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Thanh toán đã được xử lý thành công
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Giỏ hàng của bạn đã được xóa.
                </p>
              </div>
            )}
          </div>
        )}
        {/* Order Header */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold mb-4">
            Chi tiết đơn hàng #{order.id}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Ngày đặt hàng</p>
              <p className="font-medium">
                {new Date(order.date).toLocaleDateString("vi-VN")}
              </p>
            </div>
            <div>
              <p className="text-gray-600">Trạng thái</p>
              <p className={`font-medium ${getStatusColor(order.status)}`}>
                {getStatusText(order.status)}
              </p>
            </div>
          </div>
        </div>
        {/* Customer Information */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Thông tin khách hàng</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600">Họ và tên</p>
              <p className="font-medium">{order.customerInfo.fullName}</p>
            </div>
            <div>
              <p className="text-gray-600">Số điện thoại</p>
              <p className="font-medium">{order.customerInfo.phone}</p>
            </div>
            <div>
              <p className="text-gray-600">Email</p>
              <p className="font-medium">{order.customerInfo.email}</p>
            </div>
            <div>
              <p className="text-gray-600">Phương thức thanh toán</p>
              <p className="font-medium">
                {order.customerInfo.paymentMethod === "cash"
                  ? "Thanh toán khi nhận hàng"
                  : "Chuyển khoản"}
              </p>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-gray-600">Địa chỉ giao hàng</p>
            <p className="font-medium">
              {order.customerInfo.address}, {order.customerInfo.district},{" "}
              {order.customerInfo.city}
            </p>
          </div>

          {order.customerInfo.note && (
            <div className="mt-4">
              <p className="text-gray-600">Ghi chú</p>
              <p className="font-medium">{order.customerInfo.note}</p>
            </div>
          )}
        </div>
        {/* Order Items */}
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Sản phẩm đã đặt</h2>

          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 pb-4 border-b last:border-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">Size: {item.size}</p>
                  <p className="text-gray-600">Số lượng: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{formatCurrency(item.price)}</p>
                  <p className="text-sm text-gray-600">x {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Total */}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between mb-2">
              <p>Tạm tính</p>
              <p>{formatCurrency(order.total)}</p>
            </div>
            <div className="flex justify-between mb-2">
              <p>Phí vận chuyển</p>
              <p>{formatCurrency(30000)}</p>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <p>Tổng cộng</p>
              <p className="text-orange-500">
                {formatCurrency(order.total + 30000)}
              </p>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-between">
          <button
            onClick={() => navigate("/profile")}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300"
          >
            Xem tất cả đơn hàng
          </button>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
          >
            Tiếp tục mua sắm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
