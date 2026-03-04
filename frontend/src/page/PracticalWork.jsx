import { FaBeer } from "react-icons/fa"
import { practicalWorkData } from "../utils/practicalWorkData"
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectDetails from '../components/ProjectDetails'
const PracticalWork = () => {
    const [project, setProject] = useState(null);
    const [open, setOpen] = useState(false);
    return (
        <section id="practical-work" className=" bg-gray-950 pt-20 min-h-screen pb-2">
            <div className="container mx-auto text-white">
                <div className="project-heading flex space-x-2 items-center justify-center">
                    <i class="fa-solid fa-diagram-project text-2xl md:text-3xl mt-1"></i>
                    <h3 className="text-2xl md:text-3xl font-bold  text-center items-center">Practical Work</h3>
                </div>
                <div class="grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-12 
                items-center mt-5 place-content-center p-10">
                    {
                        practicalWorkData.map((project) => (
                            <motion.div
                                key={project.id}
                                className="project-card rounded-2xl cursor-pointer overflow-hidden
                                 bg-gray-900 place-items-center hover:z-0"
                                whileHover={{ y: -3 }}
                                onClick={() =>{ 
                                    setProject(project)
                                    setOpen(true)
                                }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-55 object-cove "
                                />
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-white">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 mt-2 text-sm">
                                        {project.desc}
                                    </p>

                                    {/* tech badges */}
                                    <div className="flex text-cyan-200 flex-wrap gap-2 mt-3">
                                        {project.tech}
                                    </div>
                                    {/* <div className="text-center">

                                        <button
                                            
                                            className="bg-cyan-800 px-4 py-1 rounded-xl mt-4 see-btn btn cursor-pointer"
                                        >
                                             View Project
                                        </button>
                                    </div> */}
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            <ProjectDetails open={open} setOpen={setOpen} project={project} />

        </section>
    )
}

export default PracticalWork