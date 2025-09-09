import React from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blogs"; // reuse same data

const LatestBlogsSection = () => {
  const latestBlogs = blogs.slice(0, 3); // take first 3 blogs

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-[#1B4332] to-[#2E7D32] text-white relative">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl -z-10" />

      <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
        Latest Blogs
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {latestBlogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg hover:scale-[1.03] transition duration-300 flex flex-col"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <span className="text-sm text-gray-200">
                {blog.date} • {blog.author}
              </span>
              <h3 className="font-semibold text-lg mt-2 mb-2">{blog.title}</h3>
              <p className="text-sm text-[#FAFAFA]/90 flex-1">{blog.desc}</p>
              <Link
                to={blog.link}
                className="mt-4 inline-block text-sm font-medium text-[#A5D6A7] hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/blogs"
          className="px-6 py-3 rounded-full bg-[#A5D6A7]/20 border border-[#A5D6A7]/40 text-[#A5D6A7] hover:bg-[#A5D6A7]/30 transition"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
};

export default LatestBlogsSection;
