import { useState } from "react";

export function ContactForm() {
    const [status, setStatus] = useState("");
    const [message, setMessage] = useState("");

    // TIMEOUT FETCH FIX
    const fetchWithTimeout = (url, options, timeout = 8000) => {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeout);

        return fetch(url, { ...options, signal: controller.signal }).finally(() =>
            clearTimeout(id)
        );
    };

    // FORM SUBMIT
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.target);
        formData.append("access_key", "28cb935b-e79f-4479-9e3a-9f87ba942747");

        try {
            const response = await fetchWithTimeout(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                },
                8000 // timeout 8 seconds
            );

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                e.target.reset();
            } else {
                setStatus("error");
                setMessage(result.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("error");

            if (error.name === "AbortError") {
                setMessage("Request timed out. Please try again.");
            } else {
                setMessage("Network error. Please check your internet.");
            }
        }
    };

    const resetForm = () => {
        setStatus("");
        setMessage("");
    };

    return (
        <div
            className={`over-flow-div
        ${status === "loading" ? "loader-style" : ""} 
        ${(status === "success" || status === "error") ? "message" : ""}
      `}
        >
            {/* FORM */}
            {status === "" && (
                <div className="contact-details-div">
                    <h5>Start a Conversation</h5>

                    <form onSubmit={handleSubmit}>
                        <div className="name-div">
                            <div>
                                <span>First Name *</span>
                                <label htmlFor="First-Name" className="visually-hidden">Email</label>
                                <input type="text" id="First-Name" name="First Name" required />
                            </div>
                            <div>
                                <span>Last Name *</span>
                                <label htmlFor="Last-Name" className="visually-hidden">Last Name</label>
                                <input type="text" id="Last-Name" name="Last Name" required />
                            </div>
                        </div>

                        <div className="contact-same-layout">
                            <span>Email *</span>
                            <label htmlFor="Email" className="visually-hidden">Email</label>
                            <input type="email" id="Email" name="Email" required />
                        </div>

                        <div className="contact-same-layout">
                            <span>Phone *</span>
                            <label htmlFor="Phone" className="visually-hidden">Phone</label>
                            <input type="text" id="Phone" name="Phone" required />
                        </div>

                        <div className="contact-same-layout">
                            <span>How Can We Support You? *</span>
                            <label htmlFor="service" className="visually-hidden">Select a Service</label>
                            <select id="service" name="Service" required>
                                <option value="">Select a Service</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Graphic Designing">Graphic Designing</option>
                                <option value="Video Editing">Video Editing</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="text-area-div">
                            <span>Message *</span>
                            <label htmlFor="Message-Text-Area" className="visually-hidden">Text Area</label>
                            <textarea
                                name="Message"
                                id="Message-Text-Area"
                                placeholder="Let us know how we can support you..."
                                required
                            ></textarea>
                        </div>

                        <div className="contact-btn-div">
                            <button className="submit-btn">Submit</button>
                        </div>
                    </form>
                </div>
            )}

            {/* LOADER */}
            {status === "loading" && (
                <div className="contact-details-div">
                    <div className="loader-con">
                        {[0, 1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="pfile" style={{ "--i": i }}></div>
                        ))}
                    </div>
                    <div className="loader-text">
                        <h3>Sending...</h3>
                    </div>
                </div>
            )}

            {/* SUCCESS */}
            {status === "success" && (
                <div className="contact-details-div">
                    <div className="success-message">
                        <lord-icon
                            src="https://cdn.lordicon.com/apmrcxtj.json"
                            trigger="in"
                            delay="500"
                            state="in-reveal"
                            colors="primary:#000000,secondary:#228B22"
                            style={{ width: "70px", height: "70px" }}
                        ></lord-icon>

                        <h3>Thank You!</h3>
                        <p>Your message has been sent successfully!</p>

                        <button className="sam-btn" onClick={resetForm}>
                            Send another message
                        </button>
                    </div>
                </div>
            )}

            {/* ERROR */}
            {status === "error" && (
                <div className="contact-details-div">
                    <div className="error-message">
                        <lord-icon
                            src="https://cdn.lordicon.com/lltgvngb.json"
                            trigger="in"
                            stroke="bold"
                            state="hover-oscillate"
                            colors="primary:#000000,secondary:#911710"
                            style={{ width: "70px", height: "70px" }}
                        ></lord-icon>

                        <h3>Error</h3>
                        <p>{message}</p>

                        <button className="try-again-btn" onClick={resetForm}>
                            Try Again
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
