import React from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blogs"; // reuse same data

const LatestBlogsSection = () => {
  const latestBlogs = blogs.slice(0, 3); // take first 3 blogs

  return (
    <section className="relative px-6 py-16 text-white">
      <div className="absolute inset-0 bg-white/10 backdrop-blur-2xl -z-10" />

      <h2 className="mb-12 font-serif text-3xl text-center md:text-4xl">
        Latest Blogs
      </h2>

      <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
        {latestBlogs.map((blog) => (
          <div
            key={blog.id}
            className="rounded-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg hover:scale-[1.03] transition duration-300 flex flex-col"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="object-cover w-full h-48"
              loading="lazy"
            />
            <div className="flex flex-col flex-1 p-6">
              <span className="text-sm text-gray-200">
                {blog.date} • {blog.author}
              </span>
              <h3 className="mt-2 mb-2 text-lg font-semibold">{blog.title}</h3>
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

      <div className="mt-12 text-center">
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
