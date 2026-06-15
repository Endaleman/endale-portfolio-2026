import { motion } from "framer-motion";

function Timeline() {
    return (
        <section id="timeline">
            <h2>Experience</h2>

            <div className="timeline">

                <motion.div
                    className="glass timeline-item"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <h3>🎓 Computer Science Graduate</h3>
                    <p>Dilla University</p>
                </motion.div>

                <motion.div
                    className="glass timeline-item"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                >
                    <h3>💻 Software Developer</h3>
                    <p>Web, Android & AI Projects</p>
                </motion.div>

            </div>
        </section>
    );
}

export default Timeline;