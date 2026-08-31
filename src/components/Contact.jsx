import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_73rq5xl";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_fqa3cko";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "-08qB3KXILOSJvwRL";

const getContactIcon = (type) => {
  switch (type) {
    case "email":
      return (
        <svg
          className="contact__icon-svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case "phone":
      return (
        <svg
          className="contact__icon-svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      );
    case "location":
    default:
      return (
        <svg
          className="contact__icon-svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
  }
};

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
      <div className="contact__container">
        {/* Background glow orb */}
        <div className="contact__glow" aria-hidden="true" />

        {/* Left Side: Info & Contact Channels */}
        <div className="contact__info">
          <div className="contact__header">
            <p className="eyebrow reveal reveal--from-left" style={{ "--delay": "0.05s" }}>
              {content.eyebrow}
            </p>
            <h2 className="section__title reveal reveal--from-left" style={{ "--delay": "0.15s" }}>
              {content.title}
            </h2>
            <p className="section__subtitle reveal reveal--from-left" style={{ "--delay": "0.25s" }}>
              {content.subtitle}
            </p>
          </div>

          {/* Contact Details List */}
          <div className="contact__details reveal reveal--blur-up" style={{ "--delay": "0.35s" }}>
            {content.details.map((item) => {
              const isLink = Boolean(item.href);

              return (
                <div key={item.label} className="contact__detail-card">
                  <div className={`contact__icon-wrapper contact__icon-wrapper--${item.type || "default"}`}>
                    {getContactIcon(item.type)}
                  </div>
                  <div className="contact__detail-body">
                    <span className="contact__detail-label">{item.label}</span>
                    {isLink ? (
                      <a
                        href={item.href}
                        className="contact__detail-value contact__detail-link"
                        target={item.type === "location" ? "_blank" : undefined}
                        rel={item.type === "location" ? "noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="contact__detail-value">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Live Availability Badge */}
          {content.availability && (
            <div className="contact__availability reveal reveal--blur-up" style={{ "--delay": "0.45s" }}>
              <span className="contact__pulse-dot" />
              <span className="contact__availability-text">{content.availability}</span>
            </div>
          )}
        </div>

        {/* Right Side: Contact Form */}
        <form
          ref={formRef}
          className="contact__form reveal reveal--from-right"
          style={{ "--delay": "0.2s" }}
          onSubmit={handleSubmit}
          aria-busy={status.state === "sending"}
        >
          <div className="form__header">
            <h3 className="form__title">Send a Message</h3>
            <p className="form__subtitle">I typically respond within 24 hours.</p>
          </div>

          <div className="form__row">
            <div className="form__field">
              <label htmlFor="contact-from-name" className="form__label">Your Name</label>
              <input
                id="contact-from-name"
                type="text"
                name="from_name"
                placeholder="John Doe"
                value={formValues.from_name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>
            <div className="form__field">
              <label htmlFor="contact-reply-to" className="form__label">Your Email</label>
              <input
                id="contact-reply-to"
                type="email"
                name="reply_to"
                placeholder="john@example.com"
                value={formValues.reply_to}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="form__field">
            <label htmlFor="contact-subject" className="form__label">Subject</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="Project Inquiry / Job Opportunity"
              value={formValues.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form__field">
            <label htmlFor="contact-message" className="form__label">Message</label>
            <textarea
              id="contact-message"
              rows="5"
              name="message"
              placeholder="Tell me about your project, goals, or timeline..."
              value={formValues.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            className="btn btn--primary contact__submit-btn"
            type="submit"
            disabled={status.state === "sending"}
          >
            <span>{status.state === "sending" ? "Sending Message..." : "Send Message"}</span>
            <svg
              className="btn__icon-svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
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
      </div>
    </section>
  );
};

export default Contact;

