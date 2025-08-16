import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
  const { productName } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find(
    (p) => p.name.toLowerCase() === productName.toLowerCase()
  );

  if (!product) {
    return (
      <p className="text-center text-red-600 text-xl p-6">
        Product not found!
      </p>
    );
  }

  const handleBuyNow = () => {
    addToCart({ ...product, id: product.name });
    toast.success('Product purchased! Returning to products...');
    setTimeout(() => navigate('/products'), 1000);
  };

  const handleAddToCart = () => {
    addToCart({ ...product, id: product.name });
    toast.success('Added to cart! Returning to products...');
    setTimeout(() => navigate('/products'), 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-blue-800 text-center">
        Product Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Product Image */}
        <div className="w-full flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md rounded-lg shadow-lg object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">{product.name}</h2>
          <p className="text-blue-600 text-lg sm:text-xl lg:text-2xl font-bold">
            ${product.price}
          </p>
          <p className="text-gray-700 text-sm sm:text-base whitespace-pre-line leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button
              onClick={handleBuyNow}
              className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto px-6 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const products = [
  {
    name: 'Samsung TV',
    price: 499,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb-iSgrfiIbmLidV2cfCL6IrNV0bZeFw1gBQ&s',
    description: `Samsung 65" 4K UHD Smart TV

• Display: Crystal UHD, 3840 x 2160 resolution
• HDR support for lifelike visuals
• Smart Features: Netflix, YouTube, Amazon Prime built-in
• Voice Assistant: Compatible with Alexa and Google Assistant
• Ports: 3x HDMI, 2x USB, 1x Optical
• Dimensions (L×B×H): 145 cm × 9 cm × 84 cm`,
  },
  {
    name: 'Bluetooth Headphones',
    price: 99,
    image:
      'https://headphones.com/cdn/shop/files/Focal_Bathys_MG_LIFE_1_1024x1024_62f52e37-3082-4168-9511-dd1199df279e.jpg?v=1743647803&width=1500',
    description: `Premium Noise-Canceling Bluetooth Headphones

• Sound: Hi-Res audio, deep bass, and crisp treble
• Connectivity: Bluetooth 5.2, USB-C
• Battery: Up to 30 hours playback
• Features: ANC (Active Noise Cancellation), built-in mic
• Foldable design with leather padding
• Dimensions (L×B×H): 20 cm × 18 cm × 5 cm`,
  },
  {
    name: 'Gaming Chair',
    price: 199,
    image:
      'https://cdn.thewirecutter.com/wp-content/media/2024/11/cheapgamingchairs-2048px-00026.jpg?auto=webp&quality=75&width=1024',
    description: `Ergonomic High-Back Gaming Chair

• Material: PU leather, memory foam padding
• Adjustable height and armrests
• Recline: 90°–180°, rocking function
• Includes lumbar & neck support cushions
• Dimensions (L×B×H): 70 cm × 65 cm × 125 cm`,
  },
  {
    name: 'Canon Camera',
    price: 599,
    image: 'https://cdn.mos.cms.futurecdn.net/QednDfkH9ZbkcchM89M4cN.jpg',
    description: `Canon EOS DSLR Camera (24.1 MP)

• Lens: 18-55mm included
• Video: Full HD 1080p recording
• Connectivity: Wi-Fi, NFC, Bluetooth
• ISO Range: 100–12800 (expandable)
• Dimensions (L×B×H): 13 cm × 10 cm × 7.8 cm`,
  },
  {
    name: 'Apple iPad',
    price: 329,
    image:
      'https://i.pcmag.com/imagery/reviews/07vogXFMTHjBJySlYfdY2mz-14.fit_lim.size_1050x.jpg',
    description: `Apple iPad 10.2" (9th Gen, Wi-Fi, 64GB)

• Display: Retina, True Tone, 2160 x 1620 resolution
• Processor: A13 Bionic chip
• Camera: 12MP front, 8MP back
• Battery Life: Up to 10 hours
• Dimensions (L×B×H): 25 cm × 17.4 cm × 0.7 cm`,
  },
  {
    name: 'Running Shoes',
    price: 89,
    image:
      'https://static.ftshp.digital/img/p/1/0/6/4/6/3/2/1064632-full_product.jpg',
    description: `Men's Lightweight Running Shoes

• Upper: Breathable mesh
• Sole: EVA foam with rubber grip
• Support: Arch cushion, anti-slip
• Ideal for jogging, gym, and casual wear
• Dimensions (Size 9): L 30 cm × B 10 cm × H 12 cm`,
  },
  {
    name: 'Smartphone Stand',
    price: 19,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf-QqcbXfLEerMxwpfihk6E4HWI661KGxqig&s',
    description: `Adjustable Desktop Smartphone Holder

• Material: Aluminum alloy
• Adjustable tilt up to 270°
• Compatible with 4–7 inch phones
• Non-slip silicone padding
• Dimensions (L×B×H): 12 cm × 7 cm × 15 cm`,
  },
  {
    name: 'Portable Speaker',
    price: 49,
    image:
      'https://img.tatacliq.com/images/i15//437Wx649H/MP000000016239803_437Wx649H_202311301043561.jpeg',
    description: `Wireless Bluetooth Portable Speaker

• Sound: 10W stereo output with deep bass
• Battery: Up to 12 hours playtime
• Features: Waterproof (IPX7), built-in mic
• Connectivity: Bluetooth 5.0, AUX, USB
• Dimensions (L×B×H): 18 cm × 6.5 cm × 7.5 cm`,
  },
];

export default ProductDetails;
