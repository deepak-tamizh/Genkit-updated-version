import { Link, useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { BlogThumbnail } from "../components/BlogThumbnail";
import useSlideUp from "../hooks/useSlideUp";
import logoBrowser from "../assets/images/logo-browser.png";
import { BLOG_POSTS, getPostBySlug } from "../data/blogPosts";
import "./blog.css";

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPost() {
  useSlideUp();
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <>
        <title>Post Not Found</title>
        <link rel="icon" type="image/webp" href={logoBrowser} />
        <NavBar />
        <main>
          <section className="section-1">
            <div className="space-div"></div>
            <div className="tagline-main">
              <div className="tagline">
                <h1>Post Not Found</h1>
              </div>
              <p>That article may have moved or been renamed.</p>
            </div>
          </section>
          <section className="not-found-cta">
            <Link to="/blog">
              <button className="btn-contact">Browse All Posts</button>
            </Link>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const prevPost = BLOG_POSTS[(currentIndex - 1 + BLOG_POSTS.length) % BLOG_POSTS.length];
  const nextPost = BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length];

  return (
    <>
      <title>{post.title}</title>
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
              <span>{post.category}</span>
            </span>
          </div>
          <div className="tagline-main">
            <div className="tagline">
              <h1>{post.title}</h1>
            </div>
            <p>
              {post.author} &middot; {formatDate(post.date)} &middot; {post.readTime}
            </p>
          </div>
        </section>

        <section className="blog-post-thumb-wrap slide-up">
          <BlogThumbnail accent={post.accent} category={post.category} />
        </section>

        <article className="blog-post-body">
          {post.sections.map((section) => (
            <div className="blog-post-section slide-up" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ))}
        </article>

        <section className="blog-nav slide-up">
          <Link to={`/blog/${prevPost.slug}`} className="blog-nav-link">
            <span className="blog-nav-label">&larr; Previous</span>
            <span className="blog-nav-name">{prevPost.title}</span>
          </Link>
          <Link to="/blog" className="blog-nav-all">
            All Posts
          </Link>
          <Link to={`/blog/${nextPost.slug}`} className="blog-nav-link blog-nav-link-right">
            <span className="blog-nav-label">Next &rarr;</span>
            <span className="blog-nav-name">{nextPost.title}</span>
          </Link>
        </section>

        <section className="section-3-blog slide-up">
          <div className="cta-card">
            <h2>
              Want help with your <span>website?</span>
            </h2>
            <p>Let's talk about what a project like this could look like for your business.</p>
            <Link to="/contact">
              <button className="btn-contact">Start a Conversation</button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
