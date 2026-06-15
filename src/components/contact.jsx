import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setStatus("Message sent successfully ✅");
                    form.current.reset();
                },
                () => {
                    setStatus("Failed to send message ❌");
                }
            );
    };

    return (
        <section id="contact">
            <motion.div
                className="glass contact-box"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
            >
                <h2>Contact Me</h2>

                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Your Name"
                        required
                    />

                    <input
                        type="email"
                        name="from_email"
                        placeholder="Your Email"
                        required
                    />

                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Your Message"
                        required
                    />

                    <button className="btn" type="submit">
                        <FaPaperPlane /> Send Message
                    </button>
                </form>

                <p className="status">{status}</p>
            </motion.div>
        </section>
    );
}

export default Contact;