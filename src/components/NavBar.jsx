import genkitLogo from '../assets/images/genkit-logo-white.webp'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';

const WORK_LINKS = [
    { to: "/portfolio", label: "Portfolio" },
    { to: "/case-studies", label: "Case Studies" },
];

const COMPANY_LINKS = [
    { to: "/industries", label: "Industries" },
    { to: "/technologies", label: "Technologies" },
    { to: "/process", label: "Our Process" },
];

export function NavBar() {

    const [navOpen, setNavOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // "work" | "company" | null
    const [openMobileGroup, setOpenMobileGroup] = useState(null);
    const navRef = useRef(null);

    const toggleNav = () => {
        setNavOpen(!navOpen)
        // Fixes a pre-existing typo ("no-scrool") that meant the body scroll
        // lock never actually applied when the mobile menu was open.
        document.body.classList.toggle('no-scroll', !navOpen)
    }

    // Closed by clicking any nav link directly (covers the vast majority of
    // real navigations) rather than reacting to route changes in an effect,
    // which avoids triggering extra state updates during render.
    const closeEverything = () => {
        setNavOpen(false);
        setOpenDropdown(null);
        setOpenMobileGroup(null);
        document.body.classList.remove('no-scroll');
    }

    // Close an open desktop dropdown when clicking anywhere outside the nav.
    useEffect(() => {
        function handleClickOutside(e) {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setOpenDropdown(null);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = (name) => {
        setOpenDropdown((current) => (current === name ? null : name));
    }

    const toggleMobileGroup = (name) => {
        setOpenMobileGroup((current) => (current === name ? null : name));
    }

    return (
        <>
            <header>
                <nav className="navbar" ref={navRef}>
                    <div className="logo-div">
                        <Link to="/" className='logo-div-link' onClick={closeEverything}><img src={genkitLogo} alt="Genkit-logo" /></Link>
                    </div>
                    <div className="menu-toggle" onClick={toggleNav}>
                        {navOpen ? '✕' : '☰'}
                    </div>
                    <div className={`nav-links ${navOpen ? "active" : ""}`}>
                        <ul>
                            <li><Link to="/" onClick={closeEverything}>Home</Link></li>
                            <li><Link to="/about-us" onClick={closeEverything}>About Us</Link></li>
                            <li><Link to="/service" onClick={closeEverything}>Service</Link></li>

                            {/* Work dropdown — desktop */}
                            <li className="nav-dropdown-item">
                                <button
                                    type="button"
                                    className={`nav-dropdown-trigger ${openDropdown === "work" ? "open" : ""}`}
                                    onClick={() => toggleDropdown("work")}
                                    aria-expanded={openDropdown === "work"}
                                >
                                    Work <span className="nav-caret">&#9662;</span>
                                </button>
                                {openDropdown === "work" && (
                                    <div className="nav-dropdown-panel">
                                        {WORK_LINKS.map((link) => (
                                            <Link to={link.to} key={link.to} onClick={closeEverything}>{link.label}</Link>
                                        ))}
                                    </div>
                                )}

                                {/* Work group — mobile accordion */}
                                <div className="nav-mobile-group">
                                    <button
                                        type="button"
                                        className={`nav-mobile-group-trigger ${openMobileGroup === "work" ? "open" : ""}`}
                                        onClick={() => toggleMobileGroup("work")}
                                    >
                                        Work <span className="nav-caret">&#9662;</span>
                                    </button>
                                    <div className={`nav-mobile-group-panel ${openMobileGroup === "work" ? "open" : ""}`}>
                                        {WORK_LINKS.map((link) => (
                                            <Link to={link.to} key={link.to} onClick={closeEverything}>{link.label}</Link>
                                        ))}
                                    </div>
                                </div>
                            </li>

                            <li><Link to="/pricing" onClick={closeEverything}>Pricing</Link></li>

                            {/* Company dropdown — desktop */}
                            <li className="nav-dropdown-item">
                                <button
                                    type="button"
                                    className={`nav-dropdown-trigger ${openDropdown === "company" ? "open" : ""}`}
                                    onClick={() => toggleDropdown("company")}
                                    aria-expanded={openDropdown === "company"}
                                >
                                    Company <span className="nav-caret">&#9662;</span>
                                </button>
                                {openDropdown === "company" && (
                                    <div className="nav-dropdown-panel">
                                        {COMPANY_LINKS.map((link) => (
                                            <Link to={link.to} key={link.to} onClick={closeEverything}>{link.label}</Link>
                                        ))}
                                    </div>
                                )}

                                {/* Company group — mobile accordion */}
                                <div className="nav-mobile-group">
                                    <button
                                        type="button"
                                        className={`nav-mobile-group-trigger ${openMobileGroup === "company" ? "open" : ""}`}
                                        onClick={() => toggleMobileGroup("company")}
                                    >
                                        Company <span className="nav-caret">&#9662;</span>
                                    </button>
                                    <div className={`nav-mobile-group-panel ${openMobileGroup === "company" ? "open" : ""}`}>
                                        {COMPANY_LINKS.map((link) => (
                                            <Link to={link.to} key={link.to} onClick={closeEverything}>{link.label}</Link>
                                        ))}
                                    </div>
                                </div>
                            </li>

                            <li><Link to="/blog" onClick={closeEverything}>Blog</Link></li>
                            <li><Link to="/contact" onClick={closeEverything}>Contact</Link></li>
                            <li className="nav-cta-item">
                                <Link to="/request-quote" className="nav-cta-btn" onClick={closeEverything}>Get a Quote</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}
