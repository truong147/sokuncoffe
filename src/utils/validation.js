/**
 * Kiểm tra email có hợp lệ không
 * @param {string} email - Email cần kiểm tra
 * @returns {boolean} - Kết quả kiểm tra
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Kiểm tra số điện thoại có hợp lệ không
 * @param {string} phone - Số điện thoại cần kiểm tra
 * @returns {boolean} - Kết quả kiểm tra
 */
export const isValidPhone = (phone) => {
  const phoneRegex = /^(0|\+84)(\d{9,10})$/;
  return phoneRegex.test(phone);
};

// export const isStrongPassword = (password) => {
//   // Mật khẩu phải có ít nhất 8 ký tự
//   // Bao gồm ít nhất một chữ cái viết hoa, một chữ cái viết thường và một số
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
//   return passwordRegex.test(password);
// };
