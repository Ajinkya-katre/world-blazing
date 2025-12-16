"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { salaryData } from "@/constants/salary-data";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function SalaryComparisonChart() {
  const data = {
    labels: salaryData.experienceLevels,
    datasets: salaryData.courses.map((course) => ({
      label: course.name,
      data: course.salaries,
      backgroundColor: course.color,
      borderRadius: 8,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          boxWidth: 14,
        },
      },
      tooltip: {
        callbacks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          label: (ctx: any) => `₹${ctx.raw} LPA`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          callback: (value: any) => `₹${value}L`,
        },
        grid: {
          color: "rgba(0,0,0,0.05)",
        },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-50">
            📊 IT Career Salary Comparison (India – 2025)
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Compare average salary growth across popular IT career paths based on
            experience level. This helps students choose the right course with
            long-term career potential.
          </p>
        </div>

        <div className="relative h-[420px] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm">
          <Bar data={data} options={options} />
        </div>

        <p className="mt-4 text-base text-neutral-500 dark:text-neutral-400 text-center">
          *Salary figures are approximate averages based on Indian job portals
          (Glassdoor, AmbitionBox, Indeed). Actual salary may vary based on
          skills, company, and location.
        </p>
      </div>
    </section>
  );
}
