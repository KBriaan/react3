
import { IoMdSearch } from "react-icons/io";
import Logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-primary/40 py-3">
      {/* upper navbar */}
      <div className="container mx-auto py-2 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#">
            <img src={Logo} alt="Logo" className="h-8" />
            <span className="ml-3 font-bold text-lg">Brian Kiosk</span>
          </a>
        </div>
        {/* search bar and order button */}
        <div className="flex items-center">
          <div className="relative group hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
              className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:border-primary"
            />
            <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 transform -translate-y-1/2 right-3" />
          </div>
        </div>
        <button
          onClick={() => alert('Sijatengeneza backend ya hii . tulia!')}
          className="bg-gradient-to-r from-primary to-secondary transition-all duration-300 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
          aria-label="Order"
        >
          <span>Order</span>
          <FaCartShopping />
        </button>
      </div>
      {/* lower navbar */}
      <div></div>
    </div>
  );
};

export default Navbar;
