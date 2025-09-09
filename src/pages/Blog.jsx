import React from "react";
import blogs from "../data/blogs";

const BlogPage = () => {
  

  return (
    <div className="relative min-h-screen py-16 px-6 bg-gradient-to-b from-[#1B4332] to-black text-white">
      {/* Glass effect */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl -z-10" />

      {/* Page Header */}
      <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">
        Our Blog
      </h1>

      {/* Blog Grid */}
      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {blogs.map((blog, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-lg shadow-lg hover:scale-[1.02] transition duration-300 flex flex-col"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="h-56 w-full object-cover"
              loading="lazy"
            />
            <div className="p-6 flex flex-col flex-1">
              <span className="text-sm text-gray-200">
                {blog.date} • {blog.author}
              </span>
              <h3 className="font-semibold text-xl mt-2 mb-2">{blog.title}</h3>
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
