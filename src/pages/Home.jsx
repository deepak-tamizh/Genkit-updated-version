import { NavBar } from "../components/NavBar";
import { useState, useEffect } from "react";
import slide_1 from "../assets/images/home/team-collaboration-workspace-meeting.webp";
import slide_2 from "../assets/images/home/business-team-conference-meeting-1.webp";
import slide_3 from "../assets/images/home/business-team-handshake-meeting.webp";
import slide_4 from "../assets/images/home/modern-office-team-working.webp";
import webDevelopment from "../assets/images/home/computer.png";
import graphicDesign from "../assets/images/home/graphic-design.png";
import videoEditing from "../assets/images/home/video-editing.png";
import logoBrowser from "../assets/images/logo-browser.png";
import { CounterSection } from "../components/CounterSection";
import { WhyExpandableText } from "../components/WhyExpandableText";
import { Footer } from "../components/Footer";
import useSlideUp from "../hooks/useSlideUp";
import useIsMobile from "../hooks/useIsMobile";
import useTypingEffect from "../hooks/typingEffect";
import "./home.css";
import { ContactSection } from "../components/ContactSection";
import { ProjectThumbnail } from "../components/ProjectThumbnail";
import { PROJECTS } from "../data/projects";
import { Link } from "react-router-dom";

export function Home() {
  const isMobile = useIsMobile();
  useSlideUp();
  useTypingEffect();

  const images = [
    {
      img: slide_1,
      alt: "Team collaborating at a workspace with laptops, notes, and marketing charts",
    },
    {
      img: slide_2,
      alt: "Business team having a meeting in a conference room with laptops and presentation screen",
    },
    {
      img: slide_3,
      alt: "Business team meeting around a table with two colleagues shaking hands",
    },
    {
      img: slide_4,
      alt: "Employees working together in a modern office with computers and laptops",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <link rel="icon" type="image/webp" href={logoBrowser} />
      <NavBar />
      <main>
        <section className="section-1">
          <div className="space-div"></div>
          <div className="icon-div">
            <span className="icon-content">
              <lord-icon
                src="https://cdn.lordicon.com/jeuxydnh.json"
                trigger="in"
                delay="1000"
                stroke="bold"
                state="partial-role"
                colors="primary:#808080,secondary:#808080"
                style={{ width: "2.5rem", height: "3rem" }}
              ></lord-icon>
              <span>Home</span>
            </span>
          </div>
          <div className="tagline-main">
            <div className="tagline">
              <h1>
                Empowering Your Business with
                <br />
                Smart Solutions
              </h1>
            </div>
            <p>Delivering Value with Precision.</p>
          </div>
        </section>

        <section className="section-2">
          <div className="leftside-content">
            <div>
              <p>
                We are your one stop destination for everything your business
                needs to grow from stunning websites to strong digital presence
                and impactful content. Our services are designed to help small
                and mid-sized businesses thrive in today’s digital world. We
                provide clever, dependable, and reasonably priced solutions that
                are suited to your objectives, regardless of how big or small
                you are. We take care of the tech, creative, and digital work so
                you can focus on running your business. With us, your brand gets
                the attention, performance, and support it deserves.
              </p>
              <div className="btn-div">
                <Link to="/contact">
                  <button className="btn-contact">We're Here to Help</button>
                </Link>
                <Link to="/service">
                  <button className="btn-service">Expertise</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="rightside-content">
            <div className="slides">
              {images.map((obj, index) => {
                const isFirst = index === 0;
                return (
                  <img
                    key={index}
                    className={`slide ${
                      index === currentSlide ? "active" : ""
                    }`}
                    src={obj.img}
                    alt={obj.alt}
                    loading= { isFirst ? 'eager' : '' }
                    fetchPriority= { isFirst ? 'high' : 'auto' }
                    decoding="async"
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-3">
          <CounterSection />
        </section>

        <section className="section-4 slide-up">
          <h2>
            What <span>make us </span> <br />
            Different!
          </h2>
          <div className="uni-div-main">
            <div className="uni-content-wrapper slide-up">
              <lord-icon
                src="https://cdn.lordicon.com/eaegfqtv.json"
                trigger="hover"
                colors="primary:#121331,secondary:#808080"
                style={{
                  width: isMobile ? "265px" : "80px",
                  height: isMobile ? "90px" : "80px",
                }}
              ></lord-icon>
              <div className="uni-content-div">
                <h3>Cost Effective</h3>
                <p>
                  We deliver affordable, high quality digital solutions.
                  {isMobile ? "" : <br />}
                  Smart solutions, real results all within your budget.
                </p>
              </div>
            </div>
            <div className="uni-content-wrapper slide-up">
              <lord-icon
                src="https://cdn.lordicon.com/fjvfsqea.json"
                trigger="hover"
                colors="primary:#121331,secondary:#808080"
                style={{
                  width: isMobile ? "215px" : "80px",
                  height: isMobile ? "100px" : "80px",
                }}
              ></lord-icon>
              <div className="uni-content-div">
                <h3>Transparency</h3>
                <p>
                  What you see is what you get. {isMobile ? "" : <br />}
                  We believe trust starts with complete transparency.
                </p>
              </div>
            </div>
            <div className="uni-content-wrapper slide-up">
              <lord-icon
                src="https://cdn.lordicon.com/jdgfsfzr.json"
                trigger="hover"
                colors="primary:#121331,secondary:#808080"
                style={{
                  width: isMobile ? "220px" : "80px",
                  height: isMobile ? "90px" : "80px",
                }}
              ></lord-icon>
              <div className="uni-content-div">
                <h3>Powered by Youth</h3>
                <p>
                  Young minds, sharper ideas. {isMobile ? "" : <br />}
                  We blend curiosity with skill to build impactful solutions.
                </p>
              </div>
            </div>
            <div className="uni-content-wrapper slide-up">
              <lord-icon
                src="https://cdn.lordicon.com/fwkrbvja.json"
                trigger="hover"
                colors="primary:#121331,secondary:#808080"
                style={{
                  width: isMobile ? "253px" : "80px",
                  height: isMobile ? "90px" : "80px",
                }}
              ></lord-icon>
              <div className="uni-content-div">
                <h3>Innovation & Creative</h3>
                <p>
                  We don’t follow trends we set them. {isMobile ? "" : <br />}
                  Our ideas are original, bold, and built to make you stand out.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-5 slide-up">
          <h2 className="title">
            Core <span>Services</span>
          </h2>
          <div className="solutions-grid slide-up">
            <div className="solution-card">
              <div className="icon">
                <img src={webDevelopment} alt="Web Computer" loading="lazy" />
              </div>
              <h2>Web Development</h2>
              <p>
                We build user-friendly websites that boost your brand and bring
                your ideas to life with creativity and technology.
              </p>
            </div>
            <div className="solution-card">
              <div className="icon">
                <img
                  src={graphicDesign}
                  alt="Graphic Designing"
                  loading="lazy"
                />
              </div>
              <h2>Graphic Desgin</h2>
              <p>
                We create bold, memorable designs that bring your brand alive
                with vibrant color and clear storytelling always.
              </p>
            </div>
            <div className="solution-card">
              <div className="icon">
                <img src={videoEditing} alt="Video Editing" loading="lazy" />
              </div>
              <h2>Video Editing</h2>
              <p>
                We craft engaging videos that blend visuals and sound to capture
                attention and genuinely tell your story authentically.
              </p>
            </div>
          </div>
          <div className="button-wrapper">
            <Link to="/service">
              <button className="view-all">View Solutions</button>
            </Link>
          </div>
        </section>

        <section className="section-6">
          <h2>Why us</h2>
          <div className="why-div">
            <WhyExpandableText />
          </div>
        </section>

        <section className="section-7 slide-up">
          <h2 className="title">
            Featured <span>Work</span>
          </h2>
          <div className="featured-work-grid slide-up">
            {PROJECTS.slice(0, 3).map((project) => (
              <Link to={`/case-studies/${project.id}`} className="featured-work-card" key={project.id}>
                <div className="featured-work-thumb">
                  <ProjectThumbnail layout={project.layout} accent={project.accent} title={project.name} />
                </div>
                <div className="featured-work-body">
                  <span className="featured-work-industry" style={{ color: project.accent }}>
                    {project.industry}
                  </span>
                  <h3>{project.name}</h3>
                  <p>{project.headlineResult}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="button-wrapper">
            <Link to="/portfolio">
              <button className="view-all">View Full Portfolio</button>
            </Link>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
