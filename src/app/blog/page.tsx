'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import { BLOG_POSTS } from '@/constants/blog-data';
import Image from 'next/image';

const blogPosts = Array.isArray(BLOG_POSTS) ? BLOG_POSTS : [];

export function Blog() {
  if (!blogPosts.length) {
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Blog</h2>
          <p>No posts found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-neutral-900 dark:text-white">
            Blog
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Discover insightful resources and expert advice from our seasoned team to elevate your knowledge.
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id ?? post.slug} href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group cursor-pointer h-full flex flex-col rounded-2xl bg-neutral-100 dark:bg-neutral-900 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <motion.div whileHover={{ scale: 1.03 }} className="relative h-48 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </motion.div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span>👤</span>
                    <span className="text-base text-neutral-600 dark:text-neutral-400">{post.author}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-neutral-900 dark:text-white">{post.title}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400 text-base mb-6 flex-1">{post.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">{post.date}</span>
                    <motion.div whileHover={{ x: 5 }} className="text-blue-600 dark:text-blue-400">
                      <IconArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
