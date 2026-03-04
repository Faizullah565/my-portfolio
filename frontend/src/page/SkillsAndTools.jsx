import { PercentBadgeIcon } from '@heroicons/react/24/outline'
import aboutMern from '../assets/about-mern.png'
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";

import Skills from './Skills';
const SkillsAndTools = () => {
    const skillsRate = [
        { tech: "JavaScript", rate: "w-9/10", perc: 90 },
        { tech: "React", rate: "w-8/10", perc: 80 },
        { tech: "NodeJs", rate: "w-8/10", perc: 80 },
        { tech: "ExpressJs", rate: "w-7/10", perc: 70 },
        { tech: "MongoDB", rate: "w-7/10", perc: 70 },
        { tech: "BootStrap", rate: "w-8/10", perc: 80 },
        { tech: "Material UI", rate: "w-6/10", perc: 60 },
        { tech: "TailwindCSS", rate: "w-5/10", perc: 50 },
    ]
    return (
        <div id='skills' className="about-page pt-20 min-h-screen  bg-gray-900 text-white p-8">
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            // viewport={{ once: true }}
            >
                <h2 className="flex justify-center items-center text-xl md:text-3xl font-bold text-center text-cyan-500 mb-16">
                    <FaTools className='mr-2'/>
                    Skills & Tools
                </h2>
            </motion.div>
            <div className="md:flex justify-center">

            <div className="about-content md:w-2/3 px-1 mx-2 ">
                <Skills />
            </div>
            <div className="about-skills  md:w-1/3 p-2 mx-2 px-1">
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 text-gray-300">Core Competencies</h3>
                <ul className="tech-skills">
                    {
                        skillsRate.map((tech) => (
                            <li className="tech-list mb-2" key={tech.tech}>
                                <p className='px-1 flex justify-between'>
                                    <span>{tech.tech}</span>
                                    <span>{tech.perc}%</span>
                                </p>
                                <p className='bg-gray-500 rounded-2xl'>
                                    <p className={`bg-cyan-300 rounded-l-2xl min-h-2 text-center text-sm ${tech.rate}`}></p>
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            </div>
        </div>
    )
}

export default SkillsAndTools