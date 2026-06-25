import { motion } from "framer-motion";

const timelineData = [
    {
        year: "2021 - 2025",
        title: "Computer Science Student",
        organization: "Dilla University",
        description:
            "Studied Computer Science with a focus on software engineering, web development, mobile applications, networking, databases, and artificial intelligence.",
    },
    {
        year: "2024",
        title: "Android Developer",
        organization: "Personal Projects",
        description:
            "Developed Android applications using Kotlin and Android Studio, including Recipe Apps and AI-powered solutions.",
    },
    {
        year: "2024 - 2025",
        title: "Machine Learning Developer",
        organization: "Coffee Disease Detection Project",
        description:
            "Built an AI-powered coffee disease detection application using CNN and MobileNetV2 for image classification.",
    },
    {
        year: "2025",
        title: "Full Stack Developer",
        organization: "React & Django Projects",
        description:
            "Developed web applications including Car Rental Systems and Student Management Systems using React and Django.",
    },
    {
        year: "Present",
        title: "Software Developer",
        organization: "Continuous Learning",
        description:
            "Expanding expertise in React, Django, Android Development, Java, Machine Learning, and modern software architectures.",
    },
];

function Timeline() {
    return (
        <section
            id="timeline"
            className="min-h-screen py-20 px-6"
        >
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-blue-400 uppercase tracking-wider font-semibold">
                        My Journey
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-2">
                        Experience & Education
                    </h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A timeline of my academic background, development experience,
                        and technology journey.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative border-l-2 border-blue-500 ml-4 md:ml-0">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                x: index % 2 === 0 ? -50 : 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                            }}
                            className="mb-12 ml-8"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px]" />

                            {/* Card */}
                            <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-xl">
                                <span className="text-blue-400 font-semibold">
                                    {item.year}
                                </span>

                                <h3 className="text-2xl font-bold mt-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-300 font-medium mt-1">
                                    {item.organization}
                                </p>

                                <p className="text-gray-400 mt-3 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                    <div className="bg-white/5 rounded-2xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-blue-500">10+</h3>
                        <p className="text-gray-400">Projects</p>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-blue-500">5+</h3>
                        <p className="text-gray-400">Major Technologies</p>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-blue-500">3+</h3>
                        <p className="text-gray-400">Years Learning</p>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-6 text-center">
                        <h3 className="text-3xl font-bold text-blue-500">100%</h3>
                        <p className="text-gray-400">Commitment</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;