import useIsMobile from "../hooks/useIsMobile";
import useSlideUp from "../hooks/useSlideUp";
import checkCircle from "../assets/images/home/check-circle.png";
import rightArrow from "../assets/images/home/right-arrow.png";
import { ContactForm } from "./ContactForm";
import { Link } from "react-router-dom";

export function ContactSection() {
  const isMobile = useIsMobile();
  useSlideUp();

  return (
    <>
      <section className="section-7">
        <div className="main-content-div">
          <div className="back-div">
            <div className="top-div">
              <h2>
                Start Your Journey <br /> With Us.
              </h2>
            </div>
            <div className="bottom-div">
              <p>
                Excellence isn’t optional — it’s our standard.{" "}
                {isMobile ? "" : <br />}
                Connect with us to elevate your vision into reality.
              </p>

              <h6 className="typing-effect">
                Email us at :
                <a href="mailto:genkit.tech@gmail.com">genkit.tech@gmail.com</a>
              </h6>

              <h5>Why it Matters ?</h5>
              <div className="btm-content-wrap">
                <div className="btm-content-div">
                  <ul className="tick-ul">
                    <li>
                      <img src={checkCircle} alt="tick" loading="lazy" />
                      <p>Tailored Solutions</p>
                    </li>
                    <li>
                      <img src={checkCircle} alt="tick" loading="lazy" />
                      <p>
                        {isMobile ? "Client focused" : "Client-First Approach"}
                      </p>
                    </li>
                    <li>
                      <img src={checkCircle} alt="tick" loading="lazy" />
                      <p>
                        {isMobile ? "Steady Partner" : "Reliable Partnership"}
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="btm-content-div">
                  <ul className="tick-ul">
                    <li>
                      <img src={checkCircle} alt="tick" loading="lazy" />
                      <p>Transparent Policies</p>
                    </li>
                    <li>
                      <img src={checkCircle} alt="tick" loading="lazy" />
                      <p>
                        {isMobile ? "Creative Edge" : "Creative Excellence"}
                      </p>
                    </li>
                    <li>
                      <img src={checkCircle} alt="tick" loading="lazy" />
                      <p>Trusted Support</p>
                    </li>
                  </ul>
                </div>
              </div>

              <h5 className="h5-contact">Let's Work Together</h5>

              <div className="contact-content-wrap">
                <div className="contact-content">
                  <h4>1</h4>
                  <div>
                    <span>Say Hello !</span>
                    <p>We’re quick to reply and happy to help.</p>
                  </div>
                </div>
                <div className="contact-img-div">
                  <img src={rightArrow} alt="Right-arrow" loading="lazy" />
                </div>
                <div className="contact-content">
                  <h4>2</h4>
                  <div>
                    <span>Explore Ideas</span>
                    <p>Share your vision, we’ll guide the path.</p>
                  </div>
                </div>
                <div className="contact-img-div">
                  <img src={rightArrow} alt="Right-arrow" loading="lazy" />
                </div>
                <div className="contact-content">
                  <h4>3</h4>
                  <div>
                    <span>Start Building</span>
                    <p>Your go-ahead put us in Motion.</p>
                  </div>
                </div>
              </div>

              <p className="quote-form-nudge">
                Already know your budget and timeline? <Link to="/request-quote">Request a formal quote</Link> instead.
              </p>
            </div>
          </div>
        </div>

        {isMobile ? (
          <div className="slide-up">
            <ContactForm />
          </div>
        ) : (
          <ContactForm />
        )}
      </section>
    </>
  );
}
