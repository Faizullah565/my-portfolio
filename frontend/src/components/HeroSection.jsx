
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profilePicture from '../assets/ProfilePicture.png'
import { Link } from "react-scroll";
import '../styles/HeroSection.css'
import { ImNewTab } from "react-icons/im";
import { FaPhone } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white pt-15 min-h-screen flex items-center justify-center">
      <div className="mx-auto w-8/10 px-4 sm:px-6 lg:px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text and CTAs Section */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <p className="text-xl mb-4">Hello, I'm</p>
          <h1 className="text-cyan-300 text-5xl lg:text-7xl font-bold mb-6 font-serif">
            Faizullah
          </h1>
          <h2 className="text-3xl lg:text-4xl font-semibold mb-8 text-gray-300">
            MERN Stack Junior Developer
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-lg mx-auto md:mx-0">
            Crafting innovative solutions to solve real-world problems with robust backends and captivating frontends.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <Link
              to="practical-work"
              className="bg-cyan-700 flex items-center hover:bg-cyan-800 text-white font-bold py-3 px-8 rounded-xl cursor-pointer shadow-lg transition duration-300"
            >
              <ImNewTab className='mr-1'/>
              View Projects
            </Link>
            <Link
              to="contact"
              className="bg-gray-700 flex items-center hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-xl cursor-pointer shadow-lg transition duration-300"
            >
              <FaPhone className='mr-1'/>
              Get In Touch
            </Link>
          </div>
          
        </div>

        {/* Image/Illustration Section */}
        <div className="md:w-1/2 flex justify-center">
          {/* Replace with your image, 3D model, or illustration */}
          <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-700 rounded-full flex items-center justify-center shadow-2xl">
            {/* Placeholder for an image */}
            <img src={profilePicture} alt="" className='rounded-full w-150' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
