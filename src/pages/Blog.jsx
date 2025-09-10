import React from "react";
import blogs from "../data/blogs";

const BlogPage = () => {
  

  return (
    <div className="relative min-h-screen py-16 px-6 bg-gradient-to-b from-[#1B4332] to-black text-white">
      {/* Glass effect */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl -z-10" />

      {/* Page Header */}
      <h1 className="mb-12 font-serif text-4xl text-center md:text-5xl">
        Our Blog
      </h1>

      {/* Blog Grid */}
      <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-3">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg hover:scale-[1.02] transition duration-300 flex flex-col"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="object-cover w-full h-56"
              loading="lazy"
            />
            <div className="flex flex-col flex-1 p-6">
              <span className="text-sm text-gray-200">
                {blog.date} • {blog.author}
              </span>
              <h3 className="mt-2 mb-2 text-xl font-semibold">{blog.title}</h3>
              <p className="text-sm text-[#FAFAFA]/90 flex-1">{blog.desc}</p>
              <a
                href={blog.link}
                className="mt-4 inline-block text-sm font-medium text-[#A5D6A7] hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
