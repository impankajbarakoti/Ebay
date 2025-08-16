import React from 'react';
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-800 cursor-default">
        All Products
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition p-4 flex flex-col"
          >
            {/* Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 sm:h-48 md:h-52 lg:h-56 object-cover rounded-md"
            />

            {/* Info */}
            <div className="flex flex-col flex-1 mt-3">
              <h3 className="font-semibold text-gray-800 text-lg">
                {product.name}
              </h3>
              <p className="text-blue-600 font-bold text-sm sm:text-base">
                ${product.price}
              </p>

              {/* Button */}
              <div className="mt-auto">
                <Link to={`/productdetails/${product.name}`}>
                  <button className="mt-3 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Product List
const products = [
  {
    name: 'Samsung TV',
    price: 499,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-iSgrfiIbmLidV2cfCL6IrNV0bZeFw1gBQ&s',
  },
  {
    name: 'Bluetooth Headphones',
    price: 99,
    image: 'https://headphones.com/cdn/shop/files/Focal_Bathys_MG_LIFE_1_1024x1024_62f52e37-3082-4168-9511-dd1199df279e.jpg?v=1743647803&width=1500',
  },
  {
    name: 'Gaming Chair',
    price: 199,
    image: 'https://cdn.thewirecutter.com/wp-content/media/2024/11/cheapgamingchairs-2048px-00026.jpg?auto=webp&quality=75&width=1024',
  },
  {
    name: 'Canon Camera',
    price: 599,
    image: 'https://cdn.mos.cms.futurecdn.net/QednDfkH9ZbkcchM89M4cN.jpg',
  },
  {
    name: 'Apple iPad',
    price: 329,
    image: 'https://i.pcmag.com/imagery/reviews/07vogXFMTHjBJySlYfdY2mz-14.fit_lim.size_1050x.jpg',
  },
  {
    name: 'Running Shoes',
    price: 89,
    image: 'https://static.ftshp.digital/img/p/1/0/6/4/6/3/2/1064632-full_product.jpg',
  },
  {
    name: 'Smartphone Stand',
    price: 19,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-QqcbXfLEerMxwpfihk6E4HWI661KGxqig&s',
  },
  {
    name: 'Portable Speaker',
    price: 49,
    image: 'https://img.tatacliq.com/images/i15//437Wx649H/MP000000016239803_437Wx649H_202311301043561.jpeg',
  },
];

export default Products;
