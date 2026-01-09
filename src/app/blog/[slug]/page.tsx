'use client';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { IconArrowLeft } from '@tabler/icons-react';
import { getBlogPostBySlug } from '@/constants/blog-data';
import Image from 'next/image';

export default function BlogPost() {
    const params = useParams();
    const slug = params.slug as string;
    const result = getBlogPostBySlug(slug);

    // Next.js sometimes serializes server values as strings
    let post = result;
    if (typeof result === "string") {
        post = JSON.parse(result);
    }

    if (!post) {
        notFound();
    }

    return (
        <div className=" min-h-screen">
            <div className="sticky top-0 z-0 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link href="/blog" className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline" aria-label='blog'>
                        <IconArrowLeft className="w-5 h-5"/>
                        Back to Blog
                    </Link>
                </div>
            </div>

            <div className="w-full h-[300px] pt-8 flex justify-center align-center overflow-hidden">
                <Image src={post.image} alt={post.title} height={300} width={600} className=" object-cover" />
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400 mb-4">
                        <span>👤 {post.author}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6">{post.title}</h1>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                    <div className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300" dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                    <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold" aria-label='back to all posts'>
                        ← Back to all posts
                    </Link>
                </div>
            </div>
        </div>
    );
}
