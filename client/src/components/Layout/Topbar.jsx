import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white">
      <div className="container mx-auto flex justify-between py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#">
            <IoLogoInstagram className="h-4 w-4" />
          </a>
          <a href="#">
            <RiTwitterXLine className="h-4 w-4" />
          </a>
        </div>
        <div className="text-sm text-center flex-grow">
          <span>We ship worlwide- fast and reliable shipping!</span>
        </div>
        <div className="text-sm hidden md:block">
          <a href="te:338383838" className="hover:text-gray-300">
            +4915143570768
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
