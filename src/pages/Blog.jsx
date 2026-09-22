import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { BlogThumbnail } from "../components/BlogThumbnail";
import useSlideUp from "../hooks/useSlideUp";
import logoBrowser from "../assets/images/logo-browser.png";
import { BLOG_POSTS, BLOG_CATEGORIES } from "../data/blogPosts";
import "./blog.css";

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function Blog() {
  useSlideUp();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <title>Blog</title>
      <link rel="icon" type="image/webp" href={logoBrowser} />

      <NavBar />
      <main>
        <section className="section-1">
          <div className="space-div"></div>
          <div className="icon-div">
            <span className="icon-content">
              <lord-icon
                src="https://cdn.lordicon.com/fwkrbvja.json"
                trigger="in"
                delay="500"
                stroke="bold"
                state="in-reveal"
                colors="primary:#808080,secondary:#808080"
                style={{ width: "2.5rem", height: "3rem" }}
              ></lord-icon>
              <span>Blog</span>
            </span>
          </div>
          <div className="tagline-main">
            <div className="tagline">
              <h1>
                Ideas Worth
                <br />
                Building On.
              </h1>
            </div>
            <p>Web Development. Marketing. Business.</p>
          </div>
        </section>

        <section className="section-2-blog">
          <div className="filter-tabs">
            <button
              className={`filter-tab ${activeCategory === "All" ? "active" : ""}`}
              onClick={() => setActiveCategory("All")}
            >
              All
            </button>
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="blog-grid">
            {filteredPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} className="blog-card slide-up" key={post.slug}>
                <div className="blog-card-thumb">
                  <BlogThumbnail accent={post.accent} category={post.category} />
                  <span
                    className="blog-category-pill"
                    style={{ color: post.accent, borderColor: post.accent }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className="blog-card-body">
                  <h4>{post.title}</h4>
                  <p>{post.excerpt}</p>
                  <div className="blog-card-meta">
                    <span>{post.author}</span>
                    <span className="meta-dot">&middot;</span>
                    <span>{formatDate(post.date)}</span>
                    <span className="meta-dot">&middot;</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <p className="no-results">No posts in this category yet — check back soon.</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
