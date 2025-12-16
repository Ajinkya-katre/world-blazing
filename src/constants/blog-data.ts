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
    title: 'Best IT Courses in Hadapsar Pune | World Blazing Computer Institute 🎓',
    description: 'Best IT Courses in Hadapsar Pune | World Blazing Computer Institute',
    image: '/images/logical.png',
    author: 'Monika Waikar',
    date: '17 December 2025',
    slug: 'best-it-courses-hadapsar-pune',
    content: `
      <section class="max-w-4xl mx-auto px-4 py-12">
  <!-- Title -->
  <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
    Best IT Courses in Hadapsar Pune 🌟
  </h2>

  <p class="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
    Hadapsar has quickly become one of Pune's fastest-growing education and IT hubs.
    With increasing demand for skilled professionals in software development, data analytics,
    and digital marketing, choosing the right IT course in Hadapsar Pune is crucial for students
    and working professionals.
  </p>

  <p class="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
    At <span class="font-semibold text-indigo-600 dark:text-indigo-400">
      World Blazing Computer Institute
    </span>,
    we help students build practical skills that align with real industry requirements.
  </p>

  <!-- Section -->
  <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
    Top IT Courses in Hadapsar Pune 📚
  </h3>

  <!-- Course Card -->
  <div class="space-y-8">
    <!-- Full Stack -->
    <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
      <h4 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
        1. Full Stack Web Development Course 💻
      </h4>
      <p class="text-neutral-700 dark:text-neutral-300 mb-3">
        This course is ideal for students who want to become complete web developers.
      </p>

      <p class="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
        You’ll learn:
      </p>
      <ul class="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
        <li>HTML, CSS, JavaScript</li>
        <li>React & modern frontend frameworks</li>
        <li>Backend basics</li>
        <li>Real-world projects</li>
      </ul>

      <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
        Perfect for freshers, career switchers, and engineering students.
      </p>
    </div>

    <!-- Python -->
    <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
      <h4 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
        2. Python Programming Course 🐍
      </h4>
      <p class="text-neutral-700 dark:text-neutral-300 mb-3">
        Python is one of the most in-demand programming languages in India.
      </p>

      <p class="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
        Career paths:
      </p>
      <ul class="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
        <li>Python Developer</li>
        <li>Automation Engineer</li>
        <li>Data Analyst</li>
      </ul>
    </div>

    <!-- Data Analytics -->
    <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
      <h4 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
        3. Data Analytics Course 📈
      </h4>
      <p class="text-neutral-700 dark:text-neutral-300 mb-3">
        Companies rely on data to make smarter business decisions.
      </p>

      <p class="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
        Skills covered:
      </p>
      <ul class="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
        <li>Excel & SQL</li>
        <li>Power BI / Tableau</li>
        <li>Real business datasets</li>
      </ul>
    </div>

    <!-- Digital Marketing -->
    <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
      <h4 class="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
        4. Digital Marketing Course 📢
      </h4>
      <p class="text-neutral-700 dark:text-neutral-300 mb-3">
        Ideal for students interested in marketing, freelancing, or business growth.
      </p>

      <p class="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
        Learn:
      </p>
      <ul class="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
        <li>SEO</li>
        <li>Google Ads</li>
        <li>Social Media Marketing</li>
        <li>Website optimization</li>
      </ul>
    </div>
  </div>

  <!-- Why Choose -->
  <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mt-12 mb-4">
    Why Choose World Blazing Computer Institute in Hadapsar? 🤔
  </h3>

  <ul class="grid sm:grid-cols-2 gap-3 text-neutral-700 dark:text-neutral-300">
    <li>✅ Small batches</li>
    <li>✅ Practical hands-on training</li>
    <li>✅ Offline + Online learning</li>
    <li>✅ Personal mentorship</li>
    <li>✅ Affordable fees</li>
    <li>✅ Strong student reviews</li>
  </ul>

  <!-- CTA -->
  <div class="mt-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-center text-white shadow-lg">
    <h3 class="text-xl md:text-2xl font-bold mb-2">
      Book a Free Demo Class 📅
    </h3>
    <p class="text-sm md:text-base mb-4 opacity-90">
      Searching for the best computer institute in Hadapsar Pune?
      Visit our campus or book a free demo today.
    </p>

    <a
      href="/contact-us"
      class="inline-flex items-center justify-center rounded-lg bg-white px-6 py-2 font-semibold text-indigo-600 hover:bg-neutral-100 transition"
    >
      Book Free Demo →
    </a>
  </div>
</section>
 `,
  },
  {
    id: '2',
    title: 'Full Stack Developer Career in 2025 | Skills, Salary & Course Guide',
    description: 'Full Stack Developer Career in 2025 | Skills, Salary & Course Guide',
    image: '/images/full-stack-development.png',
    author: 'Ajinkya Katre',
    date: '17 December 2025',
    slug: 'full-stack-developer-career-2025',
    content: `
      <section class="max-w-4xl mx-auto px-4 py-12">
  <!-- Title -->
  <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
    Full Stack Developer Career in 2025 🚀
  </h2>

  <p class="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
    With the rapid growth of startups and software companies, Full Stack Development
    has become one of the most reliable and future-proof IT careers in 2025.
  </p>

  <!-- Why demand -->
  <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
    💼 Why Full Stack Developers Are in Demand
  </h3>

  <ul class="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300 mb-8">
    <li>Companies prefer developers who can handle both frontend & backend</li>
    <li>High demand in startups, product companies, and IT services</li>
    <li>Faster career growth with multiple job opportunities</li>
  </ul>

  <!-- Salary -->
  <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 mb-8 shadow-sm">
    <h3 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
      💰 Full Stack Developer Salary in India (2025)
    </h3>

    <ul class="space-y-2 text-neutral-700 dark:text-neutral-300">
      <li>
        <strong class="text-neutral-900 dark:text-neutral-100">Fresher:</strong>
        ₹3.5 – ₹6 LPA
      </li>
      <li>
        <strong class="text-neutral-900 dark:text-neutral-100">2–4 Years Experience:</strong>
        ₹7 – ₹12 LPA
      </li>
      <li>
        <strong class="text-neutral-900 dark:text-neutral-100">Senior Developers:</strong>
        ₹15+ LPA
      </li>
    </ul>
  </div>

  <!-- Skills -->
  <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
    🛠 Skills Required to Become a Full Stack Developer
  </h3>

  <ul class="grid sm:grid-cols-2 gap-3 text-neutral-700 dark:text-neutral-300 mb-8">
    <li>✔ HTML, CSS, JavaScript</li>
    <li>✔ React or modern frontend frameworks</li>
    <li>✔ Backend fundamentals</li>
    <li>✔ Git & deployment basics</li>
  </ul>

  <!-- How to start -->
  <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
    🎓 How to Start Full Stack Development
  </h3>

  <p class="text-neutral-700 dark:text-neutral-300 mb-4">
    Self-learning is possible, but offline practical training with mentorship
    accelerates growth and builds real-world confidence.
  </p>

  <p class="font-medium text-neutral-900 dark:text-neutral-100 mb-3">
    At <span class="text-indigo-600 dark:text-indigo-400">
      World Blazing Computer Institute, Hadapsar
    </span>, we focus on:
  </p>

  <ul class="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300 mb-8">
    <li>✅ Project-based learning</li>
    <li>✅ One-to-one doubt solving</li>
    <li>✅ Industry-oriented syllabus</li>
  </ul>

  <!-- Who should learn -->
  <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
    ✨ Who Should Learn Full Stack Development?
  </h3>

  <ul class="grid sm:grid-cols-2 gap-3 text-neutral-700 dark:text-neutral-300">
    <li>👨‍🎓 Engineering students</li>
    <li>👨‍💼 Non-IT graduates</li>
    <li>👔 Working professionals</li>
    <li>🔄 Career switchers</li>
  </ul>

  <!-- CTA -->
  <div class="mt-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-center text-white shadow-lg">
    <h3 class="text-xl md:text-2xl font-bold mb-2">
      Start Your Full Stack Career Today 🚀
    </h3>
    <p class="text-sm md:text-base mb-4 opacity-90">
      Join the best Full Stack course in Hadapsar Pune with practical training
      and placement guidance.
    </p>

    <a
      href="/contact-us"
      class="inline-flex items-center justify-center rounded-lg bg-white px-6 py-2 font-semibold text-indigo-600 hover:bg-neutral-100 transition"
    >
      Book Free Demo →
    </a>
  </div>
</section>

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
