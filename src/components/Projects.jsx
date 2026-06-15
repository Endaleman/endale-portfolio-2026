import { motion } from "framer-motion";
import { FaAndroid, FaCar, FaRobot } from "react-icons/fa";

const projects = [
    {
        title: "Coffee Disease Detection",
        desc: "AI-powered Android app using CNN & MobileNetV2",
        icon: <FaRobot />,
    },
    {
        title: "Car Rental System",
        desc: "Full-stack Django + React platform",
        icon: <FaCar />,
    },
    {
        title: "Distributed Chat App",
        desc: "Java RMI real-time chat system",
        icon: <FaAndroid />,
    },
];

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="project-grid">
                {projects.map((p, i) => (
                    <motion.div
                        key={p.title}
                        className="glass project-card"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                    >
                        <div className="project-icon">{p.icon}</div>
                        <h3>{p.title}</h3>
                        <p>{p.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Projects;