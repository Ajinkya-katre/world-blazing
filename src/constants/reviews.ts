// src/data/reviews.ts

export type Review = {
  quote: string;
  name: string;
  title?: string;
  avatar?: string; // optional profile picture
};

export const studentReviews: Review[] = [
  {
    quote:
      "World Blazing Computer Solution helped me transform from a beginner into a confident coder. The teaching style is simple, practical, and very student-friendly.",
    name: "Rahul Patil",
    title: "Full Stack Student",
    avatar: "/reviews/rahul.jpg", 
  },
  {
    quote:
      "Best institute for programming! I learned C, C++, Java & Python here. Teaching staff is very supportive.",
    name: "Sneha K",
    title: "Programming Student",
    avatar: "/reviews/sneha.jpg",
  },
  {
    quote:
      "The placement support and real-life projects boosted my confidence. Highly recommended for IT careers.",
    name: "Vikas More",
    title: "Software Testing Student",
    avatar: "/reviews/vikas.jpg",
  },
  {
    quote:
      "Their online learning sessions during lockdown literally saved my career gap. Very professional approach.",
    name: "Pooja R",
    title: "Online Learning Student",
    avatar: "/reviews/pooja.jpg",
  },
  {
    quote:
      "From basics to advanced topics, every subject was explained so clearly. Perfect institute for beginners.",
    name: "Amit Deshmukh",
    title: "Python Student",
    avatar: "/reviews/amit.jpg",
  },
];
