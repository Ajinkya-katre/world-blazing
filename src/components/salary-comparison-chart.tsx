"use client";

import { useRef, useEffect, useMemo } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import { salaryData } from "@/constants/salary-data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

export default function SalaryComparisonChart() {
  const data = useMemo(
    () => ({
      labels: salaryData.experienceLevels,
      datasets: salaryData.courses.map((course) => ({
        label: course.name,
        data: course.salaries,
        borderColor: course.color,
        backgroundColor: course.color,
        tension: 0.35,
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: false,
      })),
    }),
    []
  );

  const options = useMemo(
    () => ({
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
    }),
    []
  );

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartRef = useRef<ChartJS | null>(null);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    chartRef.current?.destroy();

    chartRef.current = new ChartJS(ctx, {
      type: "line",
      data,
      options,
    });

    return () => {
      chartRef.current?.destroy();
      chartRef.current = null;
    };
  }, [data, options]);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            📊 IT Career Salary Comparison (India – 2025)
          </h2>
          <p className="mt-3 text-sm md:text-base text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            Compare average salary growth across popular IT career paths based on
            experience level.
          </p>
        </div>

        <div className="relative h-[420px] rounded-2xl border p-6">
          <canvas ref={canvasRef} />
        </div>
      </div>
    </section>
  );
}
