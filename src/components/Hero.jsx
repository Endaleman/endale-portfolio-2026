import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import profileImg from "../assets/profile3.jpg";
import backgroundImg from "../assets/background2.jpg";

function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${backgroundImg})`,
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <motion.div
                className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Profile Image */}
                <div className="flex justify-center">
                    <img
                        src={profileImg}
                        alt="Endale Gezhagn"
                        className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-2xl"
                    />
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                    <p className="text-blue-400 font-semibold tracking-wider uppercase mb-3">
                        Welcome to My Portfolio
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 text-white">
                        Hi, I'm{" "}
                        <span className="text-blue-500">
                            Endale Gezhagn
                        </span>
                    </h1>

                    <div className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6 h-12">
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
                                "React Developer",
                                1500,
                            ]}
                            repeat={Infinity}
                        />
                    </div>

                    <p className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        I build modern web applications, Android systems,
                        machine learning solutions, and scalable software that
                        solve real-world problems.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
                        <div>
                            <h3 className="text-3xl font-bold text-blue-500">
                                10+
                            </h3>
                            <p className="text-gray-300">Projects</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-blue-500">
                                5+
                            </h3>
                            <p className="text-gray-300">Technologies</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-blue-500">
                                3+
                            </h3>
                            <p className="text-gray-300">Years Learning</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold text-white"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-xl border border-blue-500 hover:bg-blue-500/10 transition font-semibold text-white"
                        >
                            Contact Me
                        </a>

                        <a
                            href="/Endale_Gezhagn_CV.pdf"
                            download
                            className="px-8 py-3 rounded-xl border border-gray-500 hover:border-blue-500 transition font-semibold text-white"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;