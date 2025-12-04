export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  slug: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Changelog for 2024',
    description: 'Explore the latest updates and enhancements in our 2024 changelog. Discover new features and improvements that enhance user experience.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
    author: 'Ajinkya katre',
    date: 'January 01, 2024',
    slug: 'changelog-2024',
    content: `
      <h2>What's New in 2024</h2>
      <p>We're excited to announce a series of major updates and enhancements that we've been working on throughout the year. These improvements focus on enhancing user experience, performance, and introducing innovative new features.</p>
      
      <h3>Major Updates</h3>
      <ul>
        <li><strong>Performance Improvements:</strong> We've optimized our platform to load 40% faster than before</li>
        <li><strong>New UI Components:</strong> Fresh, modern components for a better user experience</li>
        <li><strong>Enhanced Analytics:</strong> Better insights into your learning progress</li>
        <li><strong>Mobile Optimization:</strong> Fully responsive design for all devices</li>
      </ul>
      
      <h3>Bug Fixes</h3>
      <p>We've addressed numerous bugs and improved overall stability across the platform.</p>
    `,
  },
  {
    id: '2',
    title: 'Understanding React Hooks',
    description: 'A comprehensive guide to understanding and using React Hooks in your projects. Master the fundamentals of modern React development.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    author: 'Ajinkya Katre',
    date: 'January 05, 2024',
    slug: 'react-hooks-guide',
    content: `
      <h2>Master React Hooks</h2>
      <p>React Hooks have revolutionized how we write React components. Learn the fundamentals and advanced patterns.</p>
      
      <h3>Basic Hooks</h3>
      <ul>
        <li><strong>useState:</strong> Managing component state</li>
        <li><strong>useEffect:</strong> Handling side effects</li>
        <li><strong>useContext:</strong> Global state management</li>
      </ul>
      
      <h3>Advanced Hooks</h3>
      <p>Explore custom hooks, useReducer, and other advanced patterns for building scalable applications.</p>
    `,
  },
  {
    id: '3',
    title: 'CSS Grid Layout',
    description: 'Learn how to create complex layouts easily with CSS Grid. Master the fundamentals and build responsive designs efficiently.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
    author: 'Ajinkya Katre',
    date: 'January 10, 2024',
    slug: 'css-grid-layout',
    content: `
      <h2>Master CSS Grid</h2>
      <p>CSS Grid is a powerful tool for creating complex layouts. Learn how to build responsive designs with ease.</p>
      
      <h3>Grid Basics</h3>
      <ul>
        <li><strong>Grid Container:</strong> Creating the grid</li>
        <li><strong>Grid Items:</strong> Placing content</li>
        <li><strong>Grid Lines:</strong> Understanding the structure</li>
      </ul>
      
      <h3>Advanced Techniques</h3>
      <p>Build responsive grids that adapt to any screen size using modern CSS features.</p>
    `,
  },
];

/**
 * Get a single blog post by slug
 */
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return BLOG_POSTS.find((post) => post.slug === slug);
};

/**
 * Get all blog posts
 */
export const getAllBlogPosts = (): BlogPost[] => {
  return BLOG_POSTS;
};

/**
 * Get featured blog post (first one)
 */
export const getFeaturedBlogPost = (): BlogPost => {
  return BLOG_POSTS[0];
};

/**
 * Get more blog posts (excluding featured)
 */
export const getMoreBlogPosts = (): BlogPost[] => {
  return BLOG_POSTS.slice(1);
};
