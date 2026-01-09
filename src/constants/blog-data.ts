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
  {
  id: '3',
  title: 'Python Classes in Hadapsar Pune – Syllabus, Salary & Career Scope',
  description: 'Looking for Python classes in Hadapsar Pune? Learn syllabus, career scope, salary & why Python is best for beginners.',
  image: '/images/python-classes-hadapsar.png',
  author: 'Monika Waikar',
  date: '1 January 2026',
  slug: 'python-classes-hadapsar-pune',
  content: `
<section class="max-w-4xl mx-auto px-4 py-12">

<h2 class="text-3xl md:text-4xl font-bold mb-4">
Python Classes in Hadapsar Pune 🐍
</h2>

<p class="text-neutral-700 dark:text-neutral-300 mb-6">
Python is one of the most beginner-friendly and high-demand programming languages in India.
If you are searching for Python classes in Hadapsar Pune, this guide will help you understand
syllabus, salary and career scope.
</p>

<h3 class="text-2xl font-semibold mb-3">📘 Python Course Syllabus</h3>
<ul class="list-disc list-inside space-y-2 mb-6">
<li>Python basics & syntax</li>
<li>Control statements & loops</li>
<li>Functions, modules & OOP</li>
<li>File handling & error handling</li>
<li>Mini projects & automation scripts</li>
</ul>

<div class="rounded-xl border p-6 mb-8 bg-white dark:bg-neutral-900">
<h3 class="text-xl font-semibold text-indigo-600 mb-3">
💰 Python Developer Salary in India
</h3>
<ul class="space-y-2">
<li><strong>Fresher:</strong> ₹2.5 – ₹5 LPA</li>
<li><strong>2–4 Years:</strong> ₹6 – ₹10 LPA</li>
<li><strong>Advanced Roles:</strong> ₹12+ LPA</li>
</ul>
</div>

<h3 class="text-2xl font-semibold mb-3">🚀 Career Opportunities</h3>
<ul class="grid sm:grid-cols-2 gap-3 mb-8">
<li>Python Developer</li>
<li>Automation Engineer</li>
<li>Data Analyst</li>
<li>Backend Developer</li>
</ul>

<div class="mt-10 rounded-2xl bg-indigo-600 p-6 text-white text-center">
<h3 class="text-xl font-bold mb-2">Book a Free Python Demo</h3>
<p class="mb-4">Learn Python practically with offline + online training.</p>
<a href="/contact-us" class="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold">
Book Free Demo →
</a>
</div>

</section>
`,
},
{
  id: '4',
  title: 'Data Analyst Career in India – Complete Beginner Guide',
  description: 'Data Analyst career in India explained: salary, skills, roadmap & how beginners can enter analytics.',
  image: '/images/data-analyst-career-india.png',
  author: 'Ajinkya Katre',
  date: '1 January 2026',
  slug: 'data-analyst-career-india',
  content: `
<section class="max-w-4xl mx-auto px-4 py-12">

<h2 class="text-3xl md:text-4xl font-bold mb-4">
Data Analyst Career in India 📊
</h2>

<p class="text-neutral-700 dark:text-neutral-300 mb-6">
Data Analysts help companies make smart decisions using data.
This career is perfect for beginners who like numbers, logic and insights.
</p>

<h3 class="text-2xl font-semibold mb-3">🛠 Skills Required</h3>
<ul class="list-disc list-inside mb-6">
<li>Excel & Advanced Excel</li>
<li>SQL for data queries</li>
<li>Power BI / Tableau</li>
<li>Basic statistics</li>
</ul>

<div class="rounded-xl border p-6 mb-8">
<h3 class="text-xl font-semibold text-indigo-600 mb-3">
💰 Data Analyst Salary in India
</h3>
<ul class="space-y-2">
<li><strong>Fresher:</strong> ₹3 – ₹5.5 LPA</li>
<li><strong>2–4 Years:</strong> ₹6 – ₹10 LPA</li>
<li><strong>Senior Analyst:</strong> ₹12+ LPA</li>
</ul>
</div>

<h3 class="text-2xl font-semibold mb-3">🎯 Who Should Learn Data Analytics?</h3>
<ul class="grid sm:grid-cols-2 gap-3">
<li>BSc / BCom / BA students</li>
<li>Non-IT graduates</li>
<li>Working professionals</li>
<li>Excel users</li>
</ul>

<div class="mt-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-2xl text-center">
<h3 class="text-xl font-bold mb-2">Become Job-Ready Data Analyst</h3>
<p class="mb-4">Learn analytics with real datasets & dashboards.</p>
<a href="/contact-us" class="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold">
Book Free Demo →
</a>
</div>

</section>
`,
},
{
  id: '5',
  title: 'Digital Marketing Career in India – Salary, Skills & Job Roles',
  description: 'Digital marketing career in India explained with salary, skills, job roles & growth opportunities.',
  image: '/images/digital-marketing-career-india.png',
  author: 'Ajinkya Katre',
  date: '2nd January 2026',
  slug: 'digital-marketing-career-india',
  content: `
<section class="max-w-4xl mx-auto px-4 py-12">

<h2 class="text-3xl md:text-4xl font-bold mb-4">
Digital Marketing Career in India 📢
</h2>

<p class="text-neutral-700 dark:text-neutral-300 mb-6">
Digital marketing is one of the fastest-growing careers in India.
Perfect for students interested in marketing, freelancing and business growth.
</p>

<h3 class="text-2xl font-semibold mb-3">🧠 Skills You’ll Learn</h3>
<ul class="list-disc list-inside mb-6">
<li>SEO & Website Optimization</li>
<li>Google Ads & Meta Ads</li>
<li>Social Media Marketing</li>
<li>Analytics & Reporting</li>
</ul>

<div class="rounded-xl border p-6 mb-8">
<h3 class="text-xl font-semibold text-indigo-600 mb-3">
💰 Digital Marketing Salary in India
</h3>
<ul class="space-y-2">
<li><strong>Fresher:</strong> ₹2.5 – ₹4.5 LPA</li>
<li><strong>2–4 Years:</strong> ₹6 – ₹9 LPA</li>
<li><strong>Freelancers:</strong> ₹50k–₹2L/month</li>
</ul>
</div>

<h3 class="text-2xl font-semibold mb-3">🎯 Job Roles</h3>
<ul class="grid sm:grid-cols-2 gap-3 mb-8">
<li>SEO Executive</li>
<li>PPC Specialist</li>
<li>Social Media Manager</li>
<li>Performance Marketer</li>
</ul>

<div class="mt-10 bg-indigo-600 text-white p-6 rounded-2xl text-center">
<h3 class="text-xl font-bold mb-2">Start Digital Marketing Career</h3>
<p class="mb-4">Learn by running real campaigns with expert guidance.</p>
<a href="/contact-us" class="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold">
Book Free Demo →
</a>
</div>

</section>
`,
},
{
  id: '6',
  title: 'Data Analytics Roadmap in 2025 | Skills, Tools, Salary & Career Guide',
  description: 'Complete Data Analytics Roadmap in 2025 with skills, tools, salary insights, and learning path',
  image: '/images/data-analytics-roadmap.png',
  author: 'Ajinkya Katre',
  date: '10 Jan 2026',
  slug: 'data-analytics-roadmap-2025',
  content: `
<section class="max-w-4xl mx-auto px-4 py-12">
  <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
    Data Analytics Roadmap in 2025 📊
  </h2>

  <p class="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-6">
    Data Analytics has become one of the most in-demand careers in 2025 as companies
    rely heavily on data-driven decision making. From startups to MNCs, skilled data
    analysts are playing a critical role in business growth.
  </p>

  <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
    📈 Why Data Analytics Is a High-Demand Career
  </h3>

  <ul class="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300 mb-8">
    <li>Every business generates massive amounts of data</li>
    <li>Companies need insights to improve profits and efficiency</li>
    <li>Strong demand across IT, finance, healthcare, marketing, and e-commerce</li>
  </ul>

  <!-- Salary -->
  <div class="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 mb-8 shadow-sm">
    <h3 class="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
      💰 Data Analyst Salary in India (2025)
    </h3>

    <ul class="space-y-2 text-neutral-700 dark:text-neutral-300">
      <li>
        <strong class="text-neutral-900 dark:text-neutral-100">Fresher:</strong>
        ₹4 – ₹7 LPA
      </li>
      <li>
        <strong class="text-neutral-900 dark:text-neutral-100">2–4 Years Experience:</strong>
        ₹8 – ₹14 LPA
      </li>
      <li>
        <strong class="text-neutral-900 dark:text-neutral-100">Senior / Lead Analyst:</strong>
        ₹18+ LPA
      </li>
    </ul>
  </div>

  <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
    🗺 Step-by-Step Data Analytics Roadmap
  </h3>

  <ul class="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300 mb-8">
    <li>📌 Basics of statistics & mathematics</li>
    <li>📌 Excel & Google Sheets for data handling</li>
    <li>📌 SQL for data extraction and analysis</li>
    <li>📌 Python for data analysis (NumPy, Pandas)</li>
    <li>📌 Data visualization with Power BI / Tableau</li>
    <li>📌 Real-world projects & case studies</li>
  </ul>

  <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
    🛠 Skills Required to Become a Data Analyst
  </h3>

  <ul class="grid sm:grid-cols-2 gap-3 text-neutral-700 dark:text-neutral-300 mb-8">
    <li>✔ Strong analytical thinking</li>
    <li>✔ Excel & SQL expertise</li>
    <li>✔ Python or R basics</li>
    <li>✔ Data visualization & storytelling</li>
  </ul>

  <!-- How to start -->
  <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
    🎓 How to Start a Career in Data Analytics
  </h3>

  <p class="text-neutral-700 dark:text-neutral-300 mb-4">
    You don’t need to be a coding expert to start Data Analytics. With the right roadmap,
    hands-on practice, and mentorship, anyone can build a strong analytics career.
  </p>

  <p class="font-medium text-neutral-900 dark:text-neutral-100 mb-3">
    At <span class="text-indigo-600 dark:text-indigo-400">
      World Blazing Computer Institute, Hadapsar
    </span>, we focus on:
  </p>

  <ul class="list-disc list-inside space-y-2 text-neutral-700 dark:text-neutral-300 mb-8">
    <li>✅ Practical data analytics projects</li>
    <li>✅ Industry-relevant tools & case studies</li>
    <li>✅ Personalized mentorship & career guidance</li>
  </ul>

  <!-- Who should learn -->
  <h3 class="text-2xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">
    🎯 Who Should Learn Data Analytics?
  </h3>

  <ul class="grid sm:grid-cols-2 gap-3 text-neutral-700 dark:text-neutral-300">
    <li>👨‍🎓 Students from any background</li>
    <li>📊 Commerce & management graduates</li>
    <li>👨‍💼 Working professionals</li>
    <li>🔄 Career switchers looking for growth</li>
  </ul>

  <div class="mt-10 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-center text-white shadow-lg">
    <h3 class="text-xl md:text-2xl font-bold mb-2">
      Build Your Data Analytics Career in 2025 🚀
    </h3>
    <p class="text-sm md:text-base mb-4 opacity-90">
      Join the best Data Analytics course in Hadapsar Pune with hands-on training
      and placement support.
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
