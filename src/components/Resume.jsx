import { FaDownload, FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

function Resume() {
    return (
        <section
            id="resume"
            className="min-h-screen py-20 px-6"
        >
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-14">
                    <p className="text-blue-400 uppercase tracking-wider font-semibold">
                        Professional Experience
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Work Experience
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl"
                >
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-blue-400">
                            Junior Software Engineer
                        </h3>

                        <p className="text-gray-400 mt-1">
                            Antai Ahun Tech PLC • 1 Year
                        </p>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-5">
                        Worked as a Junior Software Engineer contributing to
                        enterprise-level software systems. Participated in
                        software development, debugging, testing, and system
                        enhancement activities while collaborating with senior
                        developers and project teams.
                    </p>

                    <div className="space-y-4 text-gray-300">
                        <div>
                            ✅ Contributed to the Ministry of Education (MOE)
                            Learning Management System (LMS).
                        </div>

                        <div>
                            ✅ Participated in the Addis Ababa Science and
                            Technology University (AASTU) Student Information
                            Management System (SIM).
                        </div>

                        <div>
                            ✅ Worked on software maintenance, bug fixing,
                            feature implementation, and database integration.
                        </div>

                        <div>
                            ✅ Strengthened skills in software engineering,
                            teamwork, problem-solving, and enterprise system
                            development.
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Resume;