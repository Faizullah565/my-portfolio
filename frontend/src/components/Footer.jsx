
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer bg-gray-950'>
            <div className="container md:flex text-center md:justify-between md:px-15 py-5 text-cyan-400 items-center ">
                <h4>©2026faizullah. All rights reserved</h4>
                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/Faizullah565/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                        <FaGithub className="h-4 w-4 text-cyan-400" />
                    </a>
                    <a href="https://www.linkedin.com/in/faizullah565/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                        <FaLinkedin className="h-4 w-4 text-cyan-400" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition duration-300">
                        <FaTwitter className="h-4 w-4 text-cyan-400" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer