import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openLoginPopup, logout } from "../../../src/store/authSlice";
import { Modal, Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Header = ({ setIsSidebarOpen }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state) => state.auth);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);

  const showUserModal = () => {
    setIsUserModalOpen(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsUserModalOpen(false);
  };

  const handleLogin = () => {
    dispatch(openLoginPopup());
    setIsUserModalOpen(false);
  };

  const handleCancel = () => {
    setIsUserModalOpen(false);
  };

  return (
    <div
      className={`${
        pathname === "/" ? "absolute z-20" : "border-b border-gray-400"
      } flex w-full items-center justify-between px-6 md:px-10 py-3 lg:h-20`}
    >
      <h2 className="text-3xl font-extrabold text-gray-800 text-center">
        <span className="text-blue-500">
          Sikshya
          <span
            className={`${
              pathname === "/" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Guru
          </span>
        </span>
      </h2>
      <button
        className="lg:hidden"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        <CiMenuFries
          size={25}
          className={`${pathname === "/" && "text-white"} font-bold`}
        />
      </button>
      <button
        className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
        onClick={showUserModal}
      >
        <UserOutlined className="text-blue-600 text-lg" />
      </button>

      <Modal
        title={isAuth ? "User Profile" : "Login"}
        open={isUserModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
      >
        {isAuth ? (
          <div className="flex flex-col items-center">
            <Avatar
              size={64}
              icon={<UserOutlined />}
              className="mb-4 bg-blue-500"
            />
            <div className="w-full space-y-2 mb-6">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Name:</span>
                <span>{user?.name || "N/A"}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">Email:</span>
                <span>{user?.email || "N/A"}</span>
              </div>
            </div>
            <Button
              type="primary"
              danger
              onClick={handleLogout}
              className="w-full"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-6">You are not logged in. Please login to access your account.</p>
            <Button
              type="primary"
              onClick={handleLogin}
              className="w-full"
            >
              Login
            </Button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Header;