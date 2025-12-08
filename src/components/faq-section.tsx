import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What courses do you offer at World Blazing Computer Institute?",
    answer:
      "We offer job-oriented IT courses like Full Stack Web Development, Python Programming, Software Testing (Manual + Automation), Data Analytics, Digital Marketing, MS-CIT / MS Office and more. New batches are started regularly for most courses.",
  },
  {
    question: "Are the classes available in online or offline mode?",
    answer:
      "We provide both offline classroom batches at our Hadapsar, Pune center and live online batches. Many courses follow a hybrid model where you can attend in-person or join online as per your convenience.",
  },
  {
    question: "Do you provide placement assistance after course completion?",
    answer:
      "Yes. We help with resume building, interview preparation, mock interviews and job referrals through our network. While we do not guarantee a job, we seriously support you until you are interview-ready.",
  },
  {
    question: "Can I attend a free demo class before enrolling?",
    answer:
      "Absolutely. Most of our courses include a free counseling + demo session so you can understand the teaching style, syllabus and career path before taking a decision.",
  },
  {
    question: "What are the eligibility criteria to join your courses?",
    answer:
      "There is no strict eligibility for most beginner courses. Basic computer knowledge and willingness to learn is enough. For advanced or specialization courses, we recommend some prior programming or domain understanding.",
  },
  {
    question: "Will I receive a certificate after completing the course?",
    answer:
      "Yes, after successfully completing the course and required assessments, you will receive an institute certificate from World Blazing Computer Institute which you can add to your resume and LinkedIn profile.",
  },
  {
    question: "Do you offer EMI or flexible payment options for fees?",
    answer:
      "We understand that fees can be a concern for students. We offer flexible installment (EMI) options on many long-term courses. You can discuss the exact payment plan during counseling at our center.",
  },
];

interface FAQSectionProps {
  className?: string;
}

export default function FAQSection({ className }: FAQSectionProps) {
  return (
    <section
      className={cn(
        "w-full max-w-5xl mx-auto px-4 py-12 md:py-16",
        className,
      )}
    >
      <div className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
          FAQs
        </p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-50">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          Here are some of the most common questions students ask us before
          joining. If you still have a doubt, feel free to contact us anytime.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/70 backdrop-blur-sm px-4 py-3 md:px-5 md:py-4"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
              <span className="text-sm md:text-base font-medium text-neutral-900 dark:text-neutral-100">
                {faq.question}
              </span>
              <span className="shrink-0 rounded-full border border-neutral-300 dark:border-neutral-700 p-1.5 text-neutral-500 group-open:rotate-180 transition-transform">
                <svg
                  className="h-3 w-3 md:h-4 md:w-4"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M4 6L8 10L12 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </summary>
            <div className="mt-2 md:mt-3 text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
