import { useState } from "react";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

function Navbar() {
    const [open, setOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/20 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-2xl font-bold tracking-wide"
                >
                    Endale<span className="text-blue-500">.</span>
                </a>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-blue-400 transition duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/endaleman/endaleman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex text-xl hover:text-blue-400 transition"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex text-xl hover:text-blue-400 transition"
                    >
                        <FaLinkedin />
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-2xl"
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"
                    }`}
            >
                <nav className="flex flex-col px-6 pb-6 gap-4 bg-black/80 backdrop-blur-lg">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-gray-300 hover:text-blue-400 transition"
                        >
                            {link.name}
                        </a>
                    ))}

                    <div className="flex gap-4 pt-4">
                        <a
                            href="https://github.com/endaleman/endaleman"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl hover:text-blue-400 transition"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl hover:text-blue-400 transition"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;