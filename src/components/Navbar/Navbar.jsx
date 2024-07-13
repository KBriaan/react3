// import Logo from "../../assets/logo.png";

// const Navbar = () => {
//   return (
//     <div>
//       {/* upper navbar */}
//       <div>
//         <div>
//           <a href="#">
//             <img src={Logo} alt=""></img>
//           </a>
//         </div>
//         {/* search bar and order button */}
//         <div>
//           <div className="group">
//             <input
//               type="text"
//               placeholder="search"
//               className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400"
//             ></input>
//           </div>
//         </div>
//       </div>
//       {/* lower navbar */}
//       <div></div>
//     </div>
//   );
// };

// export default Navbar;

import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      {/* upper navbar */}
      <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
        <div className="container py-2 flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="#">
              <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </a>
          </div>
          {/* Search bar and order button */}
          <div>
            <div className="group relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-orange-400"
              />
              <button className="ml-2 px-4 py-2 bg-orange-400 rounded-full text-white hover:bg-orange-500 transition duration-300">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* lower navbar */}
      <div className="bg-secondary py-2">
        <div className="container flex justify-around">
          <a href="#home" className="text-white hover:text-orange-400 transition duration-300">Home</a>
          <a href="#dogs" className="text-white hover:text-orange-400 transition duration-300">Dogs</a>
          <a href="#cats" className="text-white hover:text-orange-400 transition duration-300">Cats</a>
          <a href="#faqs" className="text-white hover:text-orange-400 transition duration-300">FAQs</a>
          <a href="#contact" className="text-white hover:text-orange-400 transition duration-300">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
