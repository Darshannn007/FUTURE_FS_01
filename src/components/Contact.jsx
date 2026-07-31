import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_73rq5xl";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_fqa3cko";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "-08qB3KXILOSJvwRL";

const Contact = ({ content }) => {
  const formRef = useRef(null);
  const [formValues, setFormValues] = useState({
    from_name: "",
    reply_to: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current || status.state === "sending") {
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        state: "error",
        message: "Email service is not configured. Please try later.",
      });
      return;
    }

    setStatus({ state: "sending", message: "Sending your message..." });

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      setStatus({
        state: "success",
        message: "Thanks! I will get back to you soon.",
      });
      setFormValues({
        from_name: "",
        reply_to: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact__info">
        <p className="eyebrow reveal reveal--from-left" style={{ "--delay": "0.05s" }}>{content.eyebrow}</p>
        <h2 className="section__title reveal reveal--from-left" style={{ "--delay": "0.15s" }}>{content.title}</h2>
        <p className="section__subtitle reveal reveal--from-left" style={{ "--delay": "0.25s" }}>{content.subtitle}</p>
        <div className="contact__details reveal reveal--blur-up" style={{ "--delay": "0.35s" }}>
          {content.details.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
      <form
        ref={formRef}
        className="contact__form reveal reveal--from-right"
        style={{ "--delay": "0.15s" }}
        onSubmit={handleSubmit}
        aria-busy={status.state === "sending"}
      >
        <div className="form__row">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formValues.from_name}
            onChange={handleChange}
            autoComplete="name"
            required
          />
          <input
            type="email"
            name="reply_to"
            placeholder="Your Email"
            value={formValues.reply_to}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formValues.subject}
          onChange={handleChange}
          required
        />
        <textarea
          rows="5"
          name="message"
          placeholder="Your Message"
          value={formValues.message}
          onChange={handleChange}
          required
        />
        <button
          className="btn btn--primary"
          type="submit"
          disabled={status.state === "sending"}
        >
          {status.state === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status.message && (
          <p
            className={`contact__status contact__status--${status.state}`}
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
