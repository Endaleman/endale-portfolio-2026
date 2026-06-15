import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer className="glass footer">
            <h3>Endale Gezhagn</h3>

            <p>Software Developer | Android | AI | Django</p>

            <div className="socials">
                <a href="https://github.com/endaleman">
                    <FaGithub />
                </a>

                <a href="#">
                    <FaLinkedin />
                </a>

                <a href="#">
                    <FaTelegram />
                </a>
            </div>

            <p className="copy">
                © {new Date().getFullYear()} All Rights Reserved
            </p>
        </footer>
    );
}

export default Footer;