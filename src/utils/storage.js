/**
 * Lưu dữ liệu vào localStorage
 * @param {string} key - Key để lưu dữ liệu
 * @param {any} value - Giá trị cần lưu
 */
export const setLocalStorage = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

/**
 * Lấy dữ liệu từ localStorage
 * @param {string} key - Key của dữ liệu cần lấy
 * @returns {any} - Dữ liệu đã lấy
 */
export const getLocalStorage = (key) => {
  try {
    const serializedValue = localStorage.getItem(key);
    return serializedValue ? JSON.parse(serializedValue) : null;
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return null;
  }
};

/**
 * Xóa dữ liệu từ localStorage
 * @param {string} key - Key của dữ liệu cần xóa
 */
export const removeLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing from localStorage:", error);
  }
};
