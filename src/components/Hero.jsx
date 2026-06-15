import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section id="home" className="hero">
            <motion.div
                className="glass hero-box"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <img
                    src="/profile.jpg"
                    alt="profile"
                    className="profile-img"
                />

                <h1>Hi, I'm Endale Gezhagn</h1>

                <TypeAnimation
                    sequence={[
                        "Software Developer",
                        1500,
                        "Android Developer",
                        1500,
                        "Django Developer",
                        1500,
                        "Machine Learning Engineer",
                        1500,
                    ]}
                    repeat={Infinity}
                />

                <p>
                    I build modern web apps, Android systems, and AI-powered solutions.
                </p>

                <div className="hero-btns">
                    <a href="#projects" className="btn">View Projects</a>
                    <a href="#contact" className="btn-outline">Contact Me</a>
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;