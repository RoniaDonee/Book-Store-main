import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <>
    <Header/>
      <div className="w-full p-6 md:p-12">

      {/* Page Title */}
      <h1 className="text-center text-2xl md:text-3xl font-semibold mb-6">
        Contact Us
      </h1>

      {/* Intro text */}
      <p className="text-center text-gray-900 max-w-7xl  mx-auto mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione,
        officia delectus consequuntur, dicta libero magni omnis architecto
        voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum
        fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Optio maiores fuga, modi vel accusantium magnam 
        ex, ratione aliquam eius odit consequuntur earum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur aperiam impedit illo eius! Earum suscipit facilis ullam blanditiis laboriosam harum ipsum vel nostrum est, non, consequuntur eveniet quae officiis autem.
      </p>

      {/* Contact Info Section */}
      <div className="md:flex justify-evenly items-center my-12">

        {/* Location */}
        <div className="flex  items-center gap-3">
          <div className="bg-gray-200 p-4 rounded-full text-2xl">
            <FaMapMarkerAlt />
          </div>
          <p className="text-gray-700">
            123 Main Street, Apt 4B,
            <br />
            Anytown, CA 91234
          </p>
        </div>

        {/* Phone */}
        <div className="flex  items-center gap-3">
          <div className="bg-gray-200 p-4 rounded-full text-2xl">
            <FaPhoneAlt />
          </div>
          <p className="text-gray-700">+91 9874561230</p>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <div className="bg-gray-200 p-4 rounded-full text-2xl">
            <FaEnvelope />
          </div>
          <p className="text-gray-700">bookstore@gmail.com</p>
        </div>

      </div>

      {/* Form + Map Section */}
      <div className="md:grid grid-cols-2 gap-10 md:px-30 mt-5 md:mt-0 ">

        {/* Contact Form */}
        <div className="bg-gray-200 p-6 rounded-lg">
          <h1 className="text-center font-semibold text-lg mb-4">
            Send me Message
          </h1>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 w-full bg-white border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="p-3 w-full bg-white border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Message"
              className="p-3 w-full bg-white border border-gray-300 rounded-md h-28"
            />
          </div>

          <button className="w-full mt-6 bg-[#1d2538] text-white py-2 rounded-md font-semibold hover:bg-[#131a26] flex justify-center items-center">
            Send <FaPaperPlane className='ms-2'/>
          </button>
        </div>

        {/* Map */}
        <div className="w-full mt-5 md:mt-0">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.2799215121533!2d76.34491087499782!3d10.015860990100551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08730160f0b57f%3A0x4c44da89c7d14cd!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width={"100%"} height={"400px"} style={{border:'0'}}
            loading="lazy" referrerPolicy='no-referrer-when-downgrade'
            allowFullScreen=""
          ></iframe>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact