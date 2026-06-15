import { useState } from "react";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="navbar glass">
            <h2 className="logo">Endale</h2>

            <nav className={open ? "nav active" : "nav"}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>

            <div className="nav-right">
                <a
                    href="https://github.com/endaleman/endaleman"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>

                <button className="menu-btn" onClick={() => setOpen(!open)}>
                    {open ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </header>
    );
}

export default Navbar;