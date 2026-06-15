import { motion } from "framer-motion";

function About() {
    return (
        <section id="about">
            <motion.div
                className="glass"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2>About Me</h2>

                <p>
                    I am Endale Gezhagn, a Computer Science graduate from Ethiopia.
                    I specialize in React, Django, Android Development, Machine Learning,
                    and Java systems.
                </p>

                <p>
                    I have built projects like Coffee Disease Detection, Car Rental System,
                    and Distributed Chat Applications.
                </p>
            </motion.div>
        </section>
    );
}

export default About;