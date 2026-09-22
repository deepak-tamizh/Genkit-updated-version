import { useState, useRef, useEffect } from "react";

export default function FAQ({ question, answer }) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (open) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
    }, [open]);

    return (
        <>
            <div className="faq-item-react">
                <div className="faq-header" onClick={() => setOpen(!open)}>
                    <h3>{question}</h3>
                    <span className={`arrow ${open ? "rotate" : ""}`}>&#x276F;</span>
                </div>

                <div
                    className="faq-content"
                    ref={contentRef}
                    style={{ maxHeight: height }}
                >
                    <p>{answer}</p>
                </div>
            </div>
        </>

    );
}
