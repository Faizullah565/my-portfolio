import { motion } from "framer-motion";
import "../styles/Skills.css";

const skillsData = [
  {
    title: "Frontend Technologies",
    skills: [
      "React.js",
      "Context API",
      "Bootstrap",
      "Redux, Redux Toolkit",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
    ],
  },
  {
    title: "Backend Technologies",
    skills: [
      "Node.js",
      "Express.js",
      "JWT Authentication",
      "Postman",
      "Thunder Client",
    ],
  },
  {
    title: "Database & Storage",
    skills: ["MongoDB", "Cloudinary"],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container mx-auto px-1">

        {/* Heading */}
        {/* <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Skills & Tools
        </h2> */}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              className="skills-card p-6 rounded-2xl"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-cyan-300 mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;