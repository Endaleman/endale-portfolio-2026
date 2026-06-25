import { motion } from "framer-motion";
import {
    FaAndroid,
    FaCar,
    FaRobot,
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
    {
        title: "Coffee Disease Detection",
        description:
            "AI-powered Android application that detects coffee diseases using CNN and MobileNetV2 deep learning models.",
        icon: <FaRobot />,
        tech: ["Android", "Kotlin", "TensorFlow", "CNN"],
        github: "https://github.com/endaleman",
        demo: "#",
    },
    {
        title: "Car Rental System",
        description:
            "Full-stack car rental management platform with booking, authentication, and vehicle management.",
        icon: <FaCar />,
        tech: ["React", "Django", "PostgreSQL"],
        github: "https://github.com/endaleman",
        demo: "#",
    },
    {
        title: "Distributed Chat Application",
        description:
            "Real-time distributed messaging system using Java RMI with public and private chat functionality.",
        icon: <FaAndroid />,
        tech: ["Java", "RMI", "Swing"],
        github: "https://github.com/endaleman",
        demo: "#",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen py-20 px-6"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <p className="text-blue-400 uppercase tracking-wider font-semibold">
                        Portfolio
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        My Projects
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A collection of projects demonstrating my skills in web
                        development, Android applications, artificial intelligence,
                        and software engineering.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -10 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 shadow-xl"
                        >
                            {/* Icon */}
                            <div className="text-5xl text-blue-500 mb-5">
                                {project.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-3">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 mb-5 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 rounded-full text-sm bg-blue-500/20 text-blue-300 border border-blue-400/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition"
                                >
                                    <FaGithub />
                                    Code
                                </a>

                                <a
                                    href={project.demo}
                                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
                                >
                                    <FaExternalLinkAlt />
                                    Demo
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;