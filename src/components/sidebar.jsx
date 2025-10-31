import { useState } from "react";
import { X, Menu, User, Package, LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "User", path: "/dashboard/user", icon: <User size={20} /> },
    { name: "Product", path: "/dashboard/product", icon: <Package size={20} /> },
  ];

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-20"
      } bg-gradient-to-b from-white to-gray-50 shadow-md h-screen flex flex-col transition-all duration-300`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-5">
        {isOpen && (
          <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent tracking-tight px-2">
            Menu
          </h2>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2 px-3 mt-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-blue-50 text-blue-600 font-medium shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
              }`}
            >
              <div
                className={`flex items-center justify-center ${
                  isActive ? "text-blue-600" : "text-gray-500"
                }`}
              >
                {item.icon}
              </div>
              {isOpen && <span className="text-sm">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Spacer agar layout seimbang */}
      <div className="flex-1" />

      {/* Bottom padding supaya seimbang visual */}
      <div className="p-4" />
    </aside>
  );
}
