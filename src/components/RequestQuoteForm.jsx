import { useState } from "react";

export function RequestQuoteForm() {
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  // Same timeout-guarded fetch pattern used by the existing ContactForm,
  // so submissions fail gracefully instead of hanging indefinitely.
  const fetchWithTimeout = (url, options, timeout = 12000) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    return fetch(url, { ...options, signal: controller.signal }).finally(() =>
      clearTimeout(id)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    // Same Web3Forms access key already wired up for the site's Contact form,
    // so quote requests land in the same place the team already checks.
    formData.append("access_key", "28cb935b-e79f-4479-9e3a-9f87ba942747");
    formData.append("subject", "New Quote Request from Website");

    try {
      const response = await fetchWithTimeout(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        },
        12000
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        e.target.reset();
        setFileName("");
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
      className={`quote-form-wrap
        ${status === "loading" ? "loader-style" : ""}
        ${status === "success" || status === "error" ? "message" : ""}
      `}
    >
      {/* FORM */}
      {status === "" && (
        <div className="quote-details-div">
          <h5>Tell Us About Your Project</h5>

          <form onSubmit={handleSubmit}>
            <div className="name-div">
              <div>
                <span>First Name *</span>
                <label htmlFor="quote-first-name" className="visually-hidden">First Name</label>
                <input type="text" id="quote-first-name" name="First Name" required />
              </div>
              <div>
                <span>Last Name *</span>
                <label htmlFor="quote-last-name" className="visually-hidden">Last Name</label>
                <input type="text" id="quote-last-name" name="Last Name" required />
              </div>
            </div>

            <div className="quote-same-layout">
              <span>Company</span>
              <label htmlFor="quote-company" className="visually-hidden">Company</label>
              <input type="text" id="quote-company" name="Company" />
            </div>

            <div className="name-div">
              <div>
                <span>Email *</span>
                <label htmlFor="quote-email" className="visually-hidden">Email</label>
                <input type="email" id="quote-email" name="Email" required />
              </div>
              <div>
                <span>Phone *</span>
                <label htmlFor="quote-phone" className="visually-hidden">Phone</label>
                <input type="text" id="quote-phone" name="Phone" required />
              </div>
            </div>

            <div className="name-div">
              <div>
                <span>Budget *</span>
                <label htmlFor="quote-budget" className="visually-hidden">Budget</label>
                <select id="quote-budget" name="Budget" required defaultValue="">
                  <option value="" disabled>Select a range</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 - $2,500">$1,000 – $2,500</option>
                  <option value="$2,500 - $5,000">$2,500 – $5,000</option>
                  <option value="$5,000 - $10,000">$5,000 – $10,000</option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>
              <div>
                <span>Timeline *</span>
                <label htmlFor="quote-timeline" className="visually-hidden">Timeline</label>
                <select id="quote-timeline" name="Timeline" required defaultValue="">
                  <option value="" disabled>Select a timeline</option>
                  <option value="ASAP / Rush">ASAP / Rush</option>
                  <option value="2-4 Weeks">2–4 Weeks</option>
                  <option value="1-2 Months">1–2 Months</option>
                  <option value="3+ Months">3+ Months</option>
                  <option value="Flexible / Not Sure">Flexible / Not Sure</option>
                </select>
              </div>
            </div>

            <div className="quote-same-layout">
              <span>Project Type *</span>
              <label htmlFor="quote-project-type" className="visually-hidden">Project Type</label>
              <select id="quote-project-type" name="Project Type" required defaultValue="">
                <option value="" disabled>Select a project type</option>
                <option value="Business Website">Business Website</option>
                <option value="E-commerce Website">E-commerce Website</option>
                <option value="Portfolio Website">Portfolio Website</option>
                <option value="Restaurant Website">Restaurant Website</option>
                <option value="Real Estate Website">Real Estate Website</option>
                <option value="Custom Application">Custom Application</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="text-area-div">
              <span>Requirements *</span>
              <label htmlFor="quote-requirements" className="visually-hidden">Requirements</label>
              <textarea
                name="Requirements"
                id="quote-requirements"
                placeholder="Tell us what you're trying to build, who it's for, and anything else that would help us scope it accurately..."
                required
              ></textarea>
            </div>

            <div className="file-upload-div">
              <span>Attach a File (optional)</span>
              <label htmlFor="quote-file" className="file-upload-label">
                <span className="file-upload-btn">Choose File</span>
                <span className="file-upload-name">{fileName || "No file chosen"}</span>
              </label>
              <input
                type="file"
                id="quote-file"
                name="Attachment"
                className="file-upload-input"
                onChange={(e) => setFileName(e.target.files[0]?.name || "")}
              />
              <p className="file-upload-hint">
                Briefs, references, or existing brand assets — PDF, DOC, or image files.
              </p>
            </div>

            <div className="contact-btn-div">
              <button className="submit-btn">Request My Quote</button>
            </div>
          </form>
        </div>
      )}

      {/* LOADER */}
      {status === "loading" && (
        <div className="quote-details-div">
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
        <div className="quote-details-div">
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
            <p>Your quote request has been sent. We'll be in touch shortly.</p>

            <button className="sam-btn" onClick={resetForm}>
              Submit another request
            </button>
          </div>
        </div>
      )}

      {/* ERROR */}
      {status === "error" && (
        <div className="quote-details-div">
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
