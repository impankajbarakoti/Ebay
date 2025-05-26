import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !message) {
      toast.error('Please fill out all fields!');
    } else {
      toast.success('Message was sent!');
      setFullName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="bg-gray-100 py-12 px-8">
      
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Contact Us</h1>

      
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Get In Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          We're here to help you! Whether you have a question about our products or need assistance, reach out to us, and we’ll get back to you as soon as possible.
        </p>

        <div className="flex justify-center gap-16">
          <div>
            <h3 className="font-semibold text-blue-600">Email</h3>
            <p className="text-gray-700">support@ebay.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-600">Phone</h3>
            <p className="text-gray-700">+1 (800) 123-4567</p>
          </div>
        </div>
      </section>

      
      <section className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">Send Us a Message</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border rounded p-3 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded p-3 focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border rounded p-3 focus:outline-none focus:ring focus:ring-blue-300"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>

     
      <section className="max-w-3xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">Our Location</h2>
        <div className="w-full h-64 rounded overflow-hidden">
  <iframe
    title="Our Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197632331396!2d-122.41941508468118!3d37.77492977975917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c26444a61%3A0x7a0b0d6c6b7277f!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1616178259301!5m2!1sen!2sus"
    width="100%"
    height="100%"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
      </section>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default Contact;
