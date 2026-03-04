
import { motion } from "framer-motion";
import "../styles/Education.css";
import { educationData } from "../utils/educationData";
import { FaGraduationCap } from "react-icons/fa";
import Certification from "./Certification";



const Education = () => {
    return (
        <section id="education" className="education-section pt-20 min-h-screen">
            <div className="container mx-auto px-6">

                {/* Heading */}
                <h2 className="text-4xl md:text-2xl font-bold justify-center items-center gap-2 flex text-white mb-16">
                    <FaGraduationCap/>
                    My Education
                </h2>

                {/* Timeline */}
                <div className="relative border-l-2 border-cyan-400 md:flex">

                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="mb-12 ml-6"
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            {/* Dot */}
                            <span className="timeline-dot"></span>

                            {/* Card */}
                            <div className="education-card p-6 rounded-2xl">
                                <h3 className="text-xl font-semibold text-white">
                                    {edu.degree}
                                </h3>

                                <p className="text-cyan-300 font-medium mt-1">
                                    {edu.institute}
                                </p>

                                <p className="text-sm text-gray-400 mt-1">
                                    {edu.year}
                                </p>

                                <p className="text-gray-300 mt-3 leading-relaxed">
                                    {edu.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
            <Certification/>
        </section>
    );
};

export default Education;