import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, LogIn } from "lucide-react";
import { useCart } from "./CartContext";

function Navbar() {
  const { cartItems } = useCart();
  const location = useLocation(); // Hook to get the current path

  const isActive = (path) => location.pathname === path ? 'text-black' : 'hover:text-black'; // Function to highlight active link

  return (
    <div className="flex justify-between items-center px-4 py-3 bg-gray-100 shadow-md sticky top-0 z-20">
      <nav className="flex gap-6 text-blue-800 font-medium">
        <Link
          to="/"
          className={`transition duration-200 ${isActive("/")}`}
        >
          Home
        </Link>
        <Link
          to="/products"
          className={`transition duration-200 ${isActive("/products")}`}
        >
          Products
        </Link>
        <Link
          to="/profile"
          className={`transition duration-200 ${isActive("/profile")}`}
        >
          Profile
        </Link>
        <Link
          to="/about"
          className={`transition duration-200 ${isActive("/about")}`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`transition duration-200 ${isActive("/contact")}`}
        >
          Contact
        </Link>
      </nav>

      <div className="flex gap-6 items-center text-blue-800">
        {/* Cart Icon */}
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

        {/* Login Icon */}
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
