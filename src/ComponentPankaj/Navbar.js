// import { Link } from "react-router-dom";
// import { ShoppingCart, LogIn } from "lucide-react";

// function Navbar() {
//   return (
//     <div className="flex justify-between items-center px-4 py-3 bg-gray-100 shadow-md">
     
//       <nav className="flex gap-6 text-blue-800 font-medium">
//         <Link
//           to="/"
//           className="hover:text-black  transition duration-200 hover:scale-125"
//         >
//           Home
//         </Link>
//         <Link
//           to="/products"
//           className="hover:text-black transition duration-200 hover:scale-125"
//         >
//           Products
//         </Link>
//         <Link
//           to="/profile"
//           className="hover:text-black transition duration-200 hover:scale-125"
//         >
//           Profile
//         </Link>
//         <Link
//           to="/about"
//           className="hover:text-black transition duration-200 hover:scale-125"
//         >
//           About
//         </Link>
//         <Link
//           to="/contact"
//           className="hover:text-black transition duration-200 hover:scale-125"
//         >
//           Contact
//         </Link>
//       </nav>

      
//       <div className="flex gap-6 items-center text-blue-800">
//         <Link
//           to="/cart"
//           className="hover:text-black transition duration-200 hover:scale-110"
//           title="Cart"
//         >
//           <ShoppingCart className="w-6 h-6" />
//         </Link>
//         <Link
//           to="/login"
//           className="hover:text-black transition duration-200 hover:scale-110"
//           title="Login"
//         >
//           <LogIn className="w-6 h-6" />
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;



import { Link } from "react-router-dom";
import { ShoppingCart, LogIn } from "lucide-react";
import { useCart } from "./CartContext"; 

function Navbar() {
  const { cartItems } = useCart(); 

  return (
    <div className="flex justify-between items-center px-4 py-3 bg-gray-100 shadow-md sticky top-0 z-20 ">
      <nav className="flex gap-6 text-blue-800 font-medium">
        <Link
          to="/"
          className="hover:text-black cursor-default transition duration-200 hover:scale-125"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="hover:text-black transition duration-200 hover:scale-125"
        >
          Products
        </Link>
        <Link
          to="/profile"
          className="hover:text-black transition duration-200 hover:scale-125"
        >
          Profile
        </Link>
        <Link
          to="/about"
          className="hover:text-black transition duration-200 hover:scale-125"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-black transition duration-200 hover:scale-125"
        >
          Contact
        </Link>
      </nav>

      <div className="flex gap-6 items-center text-blue-800">
        <Link
          to="/cart"
          className="relative hover:text-black transition duration-200 hover:scale-110"
          title="Cart"
        >
          <ShoppingCart className="w-6 h-6" />
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </Link>
        <Link
          to="/login"
          className="hover:text-black transition duration-200 hover:scale-110"
          title="Login"
        >
          <LogIn className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
