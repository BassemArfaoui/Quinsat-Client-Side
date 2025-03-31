import {
  FiHome,
  FiSettings,
  FiHeart,
  FiGrid,
  FiPlusCircle,
  FiSearch,
} from "react-icons/fi";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const menuItems = [
    { icon: <FiHome />, label: "Dashboard", path: "/" },
    { icon: <FiGrid />, label: "Branch", path: "/branches" },
    { icon: <FiHeart />, label: "Favourite", path: "/favourite" },
    { icon: <FiSearch />, label: "Search", path: "/search" },
    { icon: <FiPlusCircle />, label: "Add", path: "/add" },
    { icon: <FiSettings />, label: "Settings", path: "/settings" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="group relative h-full border-r-2 border-r-gray-400">
      <div className="w-16 h-full bg-white-800 flex gap-2 flex-col items-center py-4">
        {menuItems.map((item, index) => {
          const isActive =
            location.pathname === item.path ||
            ((location.pathname.startsWith("/classes") ||
              location.pathname.startsWith("/subjects")) &&
              item.path === "/menu");

          return (
            <div
              key={index}
              onClick={() => handleNavigation(item.path)}
              className={`p-3 cursor-pointer rounded-lg hover:bg-sky-100 ${
                isActive
                  ? "text-blue-500  hover:bg-gray-200"
                  : "text-gray-500  "
              }`}
            >
              {item.icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
