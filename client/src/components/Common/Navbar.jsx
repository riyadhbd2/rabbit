import { HiOutlineShoppingBag, HiOutlineUser } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <>
      <nav className="container mx-auto flex item-center justify-between py-4 px-6">
        {/* left logo */}
        <div>
          <Link to="/" className="text-2xl front=medium">
            Rabbit
          </Link>
        </div>
        {/* center navigation link */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm front-medium uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm front-medium uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm front-medium uppercase"
          >
            Topwear
          </Link>
          <Link
            to="#"
            className="text-gray-700 hover:text-black text-sm front-medium uppercase"
          >
            Bottomwear
          </Link>
        </div>
        {/* right icons */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            {" "}
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-600" />
            <span className="absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-1.5 py-0.5">
              4
            </span>
          </button>
          {/* search */}
          <div className="overflow-hidden">
            <Searchbar />
          </div>

          <button className="md:hidden">
            <HiBars3BottomRight className="w-6 h-6 " />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
