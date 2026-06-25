import { motion } from "framer-motion";

const skills = [
    { name: "React", level: 90 },
    { name: "Django", level: 95 },
    { name: "Python", level: 95 },
    { name: "Java", level: 90 },
    { name: "Kotlin", level: 90 },
    { name: "Machine Learning", level: 80 },
    { name: "Spring Boot", level: 80 },
    { name: "MySQL", level: 85 },
];
const techStack = [
    "React",
    "Django",
    "Python",
    "Java",
    "Kotlin",
    "Machine Learning",
    "Spring Boot",
    "MySQL",
    "Android Studio",
    "Firebase",
    "Tailwind CSS",
    "Git & GitHub",
];
function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen py-20 px-6"
        >
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <p className="text-blue-400 uppercase tracking-wider font-semibold">
                        My Expertise
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Skills & Technologies
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Technologies and tools I use to build web applications,
                        Android applications, machine learning solutions, and
                        enterprise software systems.
                    </p>
                </div>

                {/* Skills Card */}
                <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl">
                    <div className="space-y-8">
                        {skills.map((skill, index) => (
                            <div key={skill.name}>
                                {/* Skill Header */}
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-lg">
                                        {skill.name}
                                    </span>

                                    <span className="text-blue-400 font-semibold">
                                        {skill.level}%
                                    </span>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{
                                            width: `${skill.level}%`,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 1.2,
                                            delay: index * 0.1,
                                        }}
                                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Technology Tags */}
                    <div className="mt-12">
                        <h3 className="text-xl font-semibold mb-4 text-blue-400">
                            Technologies & Tools
                        </h3>

                        <div className="flex flex-wrap gap-3">
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/20 text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                    <div className="text-center bg-white/5 rounded-2xl p-6 backdrop-blur-lg">
                        <h3 className="text-3xl font-bold text-blue-500">
                            10+
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Projects
                        </p>
                    </div>

                    <div className="text-center bg-white/5 rounded-2xl p-6 backdrop-blur-lg">
                        <h3 className="text-3xl font-bold text-blue-500">
                            1
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Year Experience
                        </p>
                    </div>

                    <div className="text-center bg-white/5 rounded-2xl p-6 backdrop-blur-lg">
                        <h3 className="text-3xl font-bold text-blue-500">
                            15+
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Technologies
                        </p>
                    </div>

                    <div className="text-center bg-white/5 rounded-2xl p-6 backdrop-blur-lg">
                        <h3 className="text-3xl font-bold text-blue-500">
                            100%
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Dedication
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skills;