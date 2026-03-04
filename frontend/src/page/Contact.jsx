
import { FaEnvelope, FaGithub, FaLinkedin, FaLocationArrow, FaPhone, FaTwitter } from 'react-icons/fa'
import { MdLocationOn, MdMyLocation, MdPhone } from 'react-icons/md'
import '../styles/Contact.css'
import ContactForm from '../components/ContactForm'
const Contact = () => {
    return (
        <section id='contact' className='contact-page min-h-screen pt-20'>
            <div className="flex justify-center">
                <div className="contact-container text-center">
                    <h3 className='text-lg text-center mt-2 text-cyan-300'>Get in Touch</h3>
                    <h3 className='md:text-5xl text-3xl text-center mt-7 font-serif text-white p-2'>Contect Me</h3>
                    <p className='text-gray-400 mt-7 md:px-10'>I'm currently open to freelance opportunities, full-time positions, and interesting collaborations. Let's discuss how we can work together!</p>
                    <div class="flex flex-col sm:flex-row gap-6 mt-15 justify-center items-center">
                        <span className="email bg-cyan-300 rounded-3xl">
                            <a href="mailto:faizullah.202103408@gcuf.edu.pk">
                                <div class="flex items-center gap-1 px-5 py-3  rounded-full font-medium hover:glow-primary transition-all duration-300 cursor-pointer">
                                    <FaEnvelope />
                                    faizullah.202103408@gcuf.edu.pk
                                </div>
                            </a>
                        </span>
                        <span className="phone-number border border-cyan-400  text-white rounded-3xl">
                            <a href="tel:+923498510153">
                                <div class="flex items-center gap-1 px-5 py-3  bg-primary rounded-full font-medium hover:glow-primary transition-all duration-300 cursor-pointer">
                                    <MdPhone />
                                    +923498510153
                                </div>
                            </a>
                        </span>
                    </div>
                    <div className="location flex justify-center text-2xl mt-10 items-center font-serif text-cyan-400">
                        <MdLocationOn className='mt-1 mr-2'/>
                        Islamabad
                    </div>
                    <div className="flex justify-center space-x-6 my-12 pb-5 ">
                        <a href="https://github.com/Faizullah565/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                            <FaGithub className="h-9 w-9 text-cyan-400" />
                        </a>
                        <a href="https://www.linkedin.com/in/faizullah565/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                            <FaLinkedin className="h-9 w-9 text-cyan-400" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                            <FaTwitter className="h-9 w-9 text-cyan-400" />
                        </a>
                    </div>
                    <hr className='text-cyan-900' />
                </div>
            </div>
            <div className="contact-form mt-5 text-white">
                <ContactForm/>
            </div>
                    <hr className='text-cyan-900 mt-10' />
        </section>
    )
}

export default Contact