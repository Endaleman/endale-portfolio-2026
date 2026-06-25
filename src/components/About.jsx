import { motion } from "framer-motion";
import aboutBg from "../assets/background2.jpg";

function About() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center px-6 py-20 bg-cover bg-center bg-no-repeat relative"
            style={{
                backgroundImage: `url(${aboutBg})`,
            }}
        >
            <div className="absolute inset-0 bg-black/75"></div>

            <motion.div
                className="relative z-10 max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <span className="text-blue-400 font-semibold tracking-wider uppercase">
                    About Me
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">
                    Endale Gezhagn
                </h2>

                <p className="text-lg text-gray-300 leading-relaxed mb-5">
                    I am a Computer Science graduate and passionate Software
                    Developer from Ethiopia. I specialize in Web Development,
                    Android Development, Machine Learning, and Enterprise
                    Software Solutions.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                    I enjoy building modern applications that solve real-world
                    problems using technologies such as React, Django, Java,
                    Kotlin, Python, and Machine Learning.
                </p>
            </motion.div>
        </section>
    );
}

export default About;