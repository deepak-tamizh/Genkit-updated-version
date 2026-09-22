import FAQ from "./Faq";

export default function FAQList() {
    const faqs = [
        {
            q: "How do I get started with Genkit?",
            a: "You can reach us through our website, email, or social media. Our team will connect with you to understand your requirements and guide you through the next steps."
        },
        
        // {
        //     q: "What services do you provide?",
        //     a: "We provide web development, design, branding, marketing, and more."
        // },
        {
            q: "How long does it take to build a website?",
            a: "Project timelines vary based on complexity. A standard website typically takes 1–2 weeks, while advanced or custom-built platforms may take 3–8 weeks."
        },
        {
            q: "What expertise does the Genkit team offer?",
            a: "Genkit is powered by young, skilled professionals specializing in web development, design, branding, marketing, content creation, and digital strategy."
        },
        {
            q: "What if I’m not satisfied with the final output?",
            a: "Your satisfaction is our priority. We offer revisions within the agreed project scope to ensure the final output meets your expectations."
        },
        {
            q: "Can Genkit help my business even if I’m just starting out?",
            a: "Absolutely. Many of our clients are early-stage startups. We guide you from the basics — brand identity, website setup, marketing strategies — to complete digital growth. Our goal is to help you launch strong and scale confidently."
        },
        {
            q: "Will I receive support after the project is completed?",
            a: "Yes. We offer continued support, updates, and maintenance to ensure your website or digital assets perform smoothly."
        }
    ];

    return (
        <div className="faq-wrapper-react">
            {faqs.map((f, i) => (
                <div className="faq-item-container" key={i}>
                    <FAQ question={f.q} answer={f.a} />
                    <p></p>
                </div>
                
            ))}
        </div>
    );
}
