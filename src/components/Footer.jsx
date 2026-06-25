import { FaGithub, FaTelegram, FaLinkedin, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";
function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center"
                >
                    <h3 className="text-2xl font-bold mb-2">
                        Endale Gezhagn
                    </h3>

                    <p className="text-gray-400 mb-6">
                        Full Stack Developer • Android Developer • AI Enthusiast • Django Developer
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4 mb-6">
                        <a
                            href="https://github.com/endaleman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition duration-300 text-xl"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition duration-300 text-xl"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://t.me/endalegeze"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition duration-300 text-xl"
                        >
                            <FaTelegram />
                        </a>
                    </div>

                    {/* Phone Number */}
                    <div className="flex items-center gap-2 text-gray-300 mb-6">
                        <FaPhone className="text-blue-400" />
                        <a
                            href="tel:+251909902014"
                            className="hover:text-blue-400 transition"
                        >
                            +251 909 902 014
                        </a>
                    </div>

                    <div className="w-32 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-5" />

                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Endale Gezhagn. All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
export default Footer;
