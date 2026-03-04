
import { motion } from "framer-motion";
import "../styles/Certification.css";
// import { FaCertificate } from "react-icons/fa";
import { PiCertificateDuotone } from "react-icons/pi";

const certData = [
  {
    title: "MERN Stack Development",
    org: "Coursera",
    year: "2024",
    link: "#",
  },
  {
    title: "AI & Machine Learning Basics",
    org: "Google",
    year: "2024",
    link: "#",
  },
  {
    title: "Responsive Web Design",
    org: "freeCodeCamp",
    year: "2023",
    link: "#",
  },
];

const Certification = () => {
  return (
    <section id="certifications" className="cert-section">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-2xl font-bold items-center gap-2 justify-center text-white mb-10 flex">
            <PiCertificateDuotone className="mt-1"/>
           Certifications
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certData.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card p-6 rounded-2xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-white">
                {cert.title}
              </h3>

              <p className="text-cyan-300 mt-2 font-medium">
                {cert.org}
              </p>

              <p className="text-gray-400 text-sm mt-1">
                {cert.year}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-sm text-cyan-400 hover:text-cyan-300"
              >
                View Certificate →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;