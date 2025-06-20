/**
 * Format số tiền sang định dạng tiền tệ VND
 * @param {number} amount - Số tiền cần format
 * @returns {string} - Chuỗi tiền tệ đã format
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};

/**
 * Format số điện thoại sang định dạng chuẩn
 * @param {string} phone - Số điện thoại cần format
 * @returns {string} - Số điện thoại đã format
 */
export const formatPhoneNumber = (phone) => {
  return phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
};

/**
 * Format ngày tháng sang định dạng dd/mm/yyyy
 * @param {Date} date - Ngày tháng cần format
 * @returns {string} - Ngày tháng đã format
 */
export const formatDate = (date) => {
  const d = new Date(date);
  return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${d.getFullYear()}`;
};
