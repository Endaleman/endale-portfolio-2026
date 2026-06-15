import { motion } from "framer-motion";

const skills = [
    { name: "React", level: 90 },
    { name: "Django", level: 95 },
    { name: "Python", level: 95 },
    { name: "Java", level: 85 },
    { name: "Kotlin", level: 90 },
    { name: "Machine Learning", level: 80 },
];

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>

            <div className="glass">
                {skills.map((skill, i) => (
                    <div key={skill.name} className="skill-item">
                        <div className="skill-top">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>

                        <div className="progress">
                            <motion.div
                                className="progress-bar"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                transition={{ duration: 1 }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;