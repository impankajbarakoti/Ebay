import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { useCart } from './CartContext';
import { toast } from 'react-toastify';
import Ebay from './ebay.png';
import bgImage from './shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera.jpg';
import { debounce } from 'lodash';  // Import debounce function

const Home = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Handle search query change with debounce
  const handleSearch = debounce((query) => {
    setSearchQuery(query);
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, 500); // Adjust debounce delay as needed

  useEffect(() => {
    // Optional: Reset products on searchQuery change
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const handleShopNow = () => {
    navigate('/login');
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="border border-black">
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <img className="w-20" src={Ebay} alt="eBay" />
        <div className="flex items-center space-x-2">
          <input
            type="search"
            placeholder="Search for anything"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}  // Use debounced search
            className="p-2 w-64 border rounded"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Search
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
        className="text-center py-16 bg-cover bg-center"
      >
        <h1 className="text-4xl font-bold mb-4 text-white drop-shadow">Welcome to eBay</h1>
        <p className="text-lg mb-6 text-white drop-shadow">
          Shop the best deals on electronics, fashion, and more!
        </p>
        <button
          onClick={handleShopNow}
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Shop Now
        </button>
      </section>

      {/* Product Section */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-6">Top Deals</h2>
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-600">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 text-center hover:shadow-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-blue-600 font-bold">${product.price}</p>
                <div className="mt-2 space-x-2">
                  <button
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    onClick={() => alert('Buy Now feature coming soon!')}
                    disabled
                    title="Coming Soon"
                  >
                    Buy Now
                  </button>
                  <button
                    className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

// Sample product data
const products = [
  { id: 1, name: 'iPhone 14', price: 799, image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-iphone16prohero-202409?wid=680&hei=528&fmt=p-jpg&qlt=95' },
  { id: 2, name: 'Nike Sneakers', price: 120, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3f62c508-9141-4843-ba11-0f25a4313d6f/NIKE+CORTEZ.png' },
  { id: 3, name: 'Smart Watch', price: 199, image: 'https://www.apple.com/v/watch/br/images/overview/select/product_se__c83w8hz9gre6_large_2x.png' },
  { id: 4, name: 'Laptop', price: 999, image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp16-spacegray-gallery1-202301?wid=4000&hei=3072&fmt=jpeg&qlt=90&.v=1671304673229' },
  { id: 5, name: 'Tablet', price: 499, image: 'https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/ipad-air-storage-select-202405-13inch-space-gray-wifi_FMT_WHH?wid=1280&hei=720&fmt=p-jpg&qlt=80' },
  { id: 6, name: 'Headphones', price: 150, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdUk9PS3HazwlI6vOFlOhefGND2PeCxGivNsxJRax9afDE0qYFKaOSOnKDI8Cpxs84WMlqn7NArPRzNg1Lq5-p3knfWGA9C2NoKxI_LEjAn3DFj4-y-QH8Tw' },
  { id: 7, name: 'Smartphone Case', price: 25, image: 'https://images.dailyobjects.com/marche/product-images/1101/dailyobjects-black-hybrid-clear-case-cover-for-samsung-galaxy-s23-ultra-images/DailyObjects-Black-Hybrid-Clear-Case-Cover-for-Samsung-Galaxy-S23-Ultra.png' },
  { id: 8, name: 'Gaming Console', price: 399, image: 'https://t3.ftcdn.net/jpg/01/31/11/00/360_F_131110045_AR9Doi9uqraU5KWpY66R6RXlDSil2KH3.jpg' }
];

export default Home;
