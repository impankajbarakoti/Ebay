import React from "react";
import Ebay from "./ebay.png";
import Play from "./playstore.png";
import App from "./appstore.png";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-12 px-8">
      
      {/* App Download Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        <h2 className="text-2xl font-bold text-center md:text-left text-blue-300">
          For a better experience, download the eBay app now
        </h2>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <img
              src={Play}
              alt="Google Play"
              className="h-8 cursor-pointer"
            />
            <span>Play Store</span>
          </div>
          <div className="flex items-center gap-2">
            <img 
              src={App}
              alt="App Store"
              className="h-8 cursor-pointer"
            />
            <span>App Store</span>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap justify-center gap-16 md:gap-32 mb-12">
        
        {/* eBay Logo Section */}
        <div className="text-center md:text-left">
          <img src={Ebay} alt="Logo" className="h-16 w-16 mx-auto md:mx-1 mb-4" />
          <p className="cursor-pointer md:mx-1 mt-[-26px]">© 2025 eBay Inc.</p>
        </div>

        {/* Company Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg cursor-pointer">Company</h3>
          <p className="cursor-pointer">About eBay</p>
          <p className="cursor-pointer">Careers</p>
          <p className="cursor-pointer">Investor Relations</p>
          <p className="cursor-pointer">eBay for Charity</p>
        </div>

        {/* Help & Support Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg cursor-pointer">Help & Support</h3>
          <p className="cursor-pointer">Customer Service</p>
          <p className="cursor-pointer">Returns</p>
          <p className="cursor-pointer">Dispute Resolution</p>
          <p className="cursor-pointer">Shipping & Delivery</p>
        </div>

        {/* Available in Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg cursor-pointer">Available in</h3>
          <p className="cursor-pointer">United States</p>
          <p className="cursor-pointer">United Kingdom</p>
          <p className="cursor-pointer">Germany</p>
          <p className="cursor-pointer">Canada</p>
          <p className="cursor-pointer">Australia</p>
        </div>

        {/* Legal Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg cursor-pointer">Legal</h3>
          <p className="cursor-pointer">Terms & Conditions</p>
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Cookie Policy</p>
        </div>

        {/* Social Media Links */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg cursor-pointer text-center">Social</h3>
          <div className="flex justify-center gap-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
              alt="LinkedIn"
              className="w-6 cursor-pointer"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
              className="w-6 cursor-pointer"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-6 cursor-pointer"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145808.png"
              alt="Pinterest"
              className="w-6 cursor-pointer"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
              alt="Twitter"
              className="w-6 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm text-gray-400">
        <p>© 2025 eBay Inc. All rights reserved. eBay and the eBay logo are trademarks of eBay Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
