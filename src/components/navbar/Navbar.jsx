import Logo from "./../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMood from "./DarkMood";
const Navbar = () => {
  return (
    // <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
    <div className="bg-white shadow-md dark:bg-gray-900 dark:text-white duration-200">
      <div className="container py-3 sm:py-0">
        <div className="flex justify-between items-center">
          <div>
            <a
              href="#"
              className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
            >
              <img src={Logo} alt="Food Logo" className="w-10" />
              <span className="capitalize">foodie</span>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <div>
              <DarkMood />
            </div>
            <ul className="hidden sm:flex items-center gap-3">
              <li>
                <a
                  href="#"
                  className="capitalize inline-block py-4 px-4 hover:text-primary"
                >
                  home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="capitalize inline-block py-4 px-4 hover:text-primary"
                >
                  services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="capitalize inline-block py-4 px-4 hover:text-primary"
                >
                  about
                </a>
              </li>
            </ul>
            <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex items-center gap-3">
              Order
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
