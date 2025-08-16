import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">About eBay</h1>

      <section className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          At eBay, our mission is to create a global online marketplace where people can buy and sell new and used products in a safe and secure environment. We strive to connect buyers with sellers through a variety of products, at competitive prices, with outstanding customer service.
        </p>
      </section>

      <section className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">About Us</h2>
        <p className="text-lg text-gray-700">
          eBay was founded in 1995 with a vision to revolutionize the way people shop. Our platform has grown to serve millions of people globally, offering everything from electronics to fashion, home goods, and collectibles. We are committed to providing an exceptional experience, both for sellers and buyers.
        </p>
      </section>

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <img
              src="https://www.zoho.com/inventory/case-study/images/maxime-loiselle.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-xl font-medium">Jane Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://fikes.upertis.ac.id/wp-content/uploads/2017/12/instructor4.jpg"
              alt="Team Member"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-xl font-medium">John Smith</h3>
            <p className="text-gray-600">CTO</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCOQcRxJbXl-GCe682FWBItoxN70ufVNHug&s"
              alt="Team Member"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-xl font-medium">Sarah Lee</h3>
            <p className="text-gray-600">Marketing Head</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
