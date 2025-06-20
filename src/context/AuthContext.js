import React, { createContext, useContext, useState, useEffect } from "react";
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "../utils/storage";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = getLocalStorage("user");
    return savedUser || null;
  });
  const [loading, setLoading] = useState(true);

  // Hàm để lấy danh sách người dùng đã đăng ký từ localStorage
  const getRegisteredUsers = () => {
    try {
      const users = getLocalStorage("registeredUsers");
      // Đảm bảo users luôn là một mảng
      return Array.isArray(users) ? users : [];
    } catch (error) {
      console.error(
        "Lỗi khi đọc danh sách người dùng đã đăng ký từ localStorage:",
        error
      );
      return [];
    }
  };

  useEffect(() => {
    // Check if user is logged in from localStorage
    const savedUser = getLocalStorage("user"); // Sử dụng getLocalStorage
    if (savedUser) {
      setUser(savedUser);
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const users = getRegisteredUsers();
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      setLocalStorage("user", foundUser);
      return true;
    } else {
      setUser(null);
      removeLocalStorage("user");
      return false;
    }
  };

  const register = (newUser) => {
    const users = getRegisteredUsers();
    // Kiểm tra email đã tồn tại chưa
    if (users.some((u) => u.email === newUser.email)) {
      return { success: false, message: "Email này đã được đăng ký." };
    }
    const updatedUsers = [...users, newUser];
    setLocalStorage("registeredUsers", updatedUsers);
    setUser(newUser); // Đăng nhập người dùng mới ngay sau khi đăng ký
    setLocalStorage("user", newUser);
    return { success: true, message: "Đăng ký thành công!" };
  };

  const logout = () => {
    setUser(null);
    removeLocalStorage("user");
  };

  const updateUser = (updatedUser) => {
    setUser(updatedUser);
    setLocalStorage("user", updatedUser);
  };

  const updateProfile = (updatedData) => {
    const updatedUser = { ...user, ...updatedData };
    setUser(updatedUser);
    setLocalStorage("user", updatedUser);
  };

  const value = {
    user,
    login,
    register,
    logout,
    updateProfile,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
