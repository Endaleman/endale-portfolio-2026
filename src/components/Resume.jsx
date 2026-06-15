import { motion } from "framer-motion";
import { FaDownload, FaFilePdf } from "react-icons/fa";

function Resume() {
    return (
        <section id="resume">
            <motion.div
                className="glass resume-box"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <FaFilePdf className="resume-icon" />

                <h2>My Resume</h2>

                <p>
                    Download my CV to learn more about my skills, projects, and experience.
                </p>

                <a
                    href="/cv.pdf"
                    download="Endale_Gezhagn_CV.pdf"
                    className="btn"
                >
                    <FaDownload /> Download CV
                </a>
            </motion.div>
        </section>
    );
}

export default Resume;