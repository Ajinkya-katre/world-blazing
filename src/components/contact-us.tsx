"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trackEvent } from "@/lib/analytics";
import coursesData from "@/constants/courses.json";
import * as z from "zod";
import { motion } from "motion/react";
import { Check } from "lucide-react";

import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

/* ================= GOOGLE SHEETS ================= */
const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyjqsJy5Z9IAYKNJKCr2e20dhJ_WZfnW2phJeCOw2_685ZvykwofDmDMtCqWkmSIF1g/exec";

/* ================= FORM SCHEMA ================= */
const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email().optional().or(z.literal("")),
  course: z.string().min(1, "Please select a course"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormData) {
    setLoading(true);
    setError(false);

    try {
      const formData = new FormData();
      Object.entries(data).forEach(([k, v]) =>
        formData.append(k, v ?? "")
      );

      await fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      // Track successful submission in GA
      trackEvent({
        event: "contact_form_submitted",
        category: "conversion",
        label: data.course || "contact_form",
      });

      setSubmitted(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const handleClick = () => {
    const values = form.getValues();
    trackEvent({
      event: "contact_form_click",
      category: "conversion",
      label: values.course || "contact_form",
    });
  };

  return (
    <section className="w-full py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start">

        {/* ================= LEFT SECTION ================= */}
        <div className="space-y-8">

          {/* Header */}
          <div>
            <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300">
              📞 Let’s talk
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Contact Us
            </h2>

            <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-xl">
              Have questions about courses, fees, or batch timings? Reach out to
              World Blazing Computer Institute and our team will help you choose
              the right IT career path.
            </p>
          </div>

          {/* Contact info cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border bg-white/80 p-4 dark:bg-neutral-900/80">
              <p className="text-xs font-semibold uppercase text-neutral-500">
                Call / WhatsApp
              </p>
              <a
                href="tel:+918459816185"
                className="inline-flex mt-2 rounded-full bg-indigo-600 px-5 py-2 text-white font-semibold"
              >
                Call Institute
              </a>
              <p className="mt-1 text-xs text-neutral-500">
                Mon – Sat, 9:00 AM to 8:00 PM
              </p>
            </div>

            <div className="rounded-2xl border bg-white/80 p-4 dark:bg-neutral-900/80">
              <p className="text-xs font-semibold uppercase text-neutral-500">
                Email
              </p>
              <p className="mt-1 font-medium break-all">
                worldblazinginstitute@gmail.com
              </p>
            </div>

            <div className="rounded-2xl border bg-white/80 p-4 sm:col-span-2 dark:bg-neutral-900/80">
              <p className="text-xs font-semibold uppercase text-neutral-500">
                Institute Address
              </p>
              <p className="font-medium">
                Aru Palace Building, 162/A1, Malwadi Road,
                Hadapsar Gaon, Pune – 411028
              </p>
            </div>
          </div>

          {/* Map */}
          <div>
            <p className="text-xs font-semibold uppercase text-neutral-500 mb-2">
              Find us on map
            </p>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border">
              <iframe
                title="World Blazing Computer Institute Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.592981813237!2d73.93112067496244!3d18.50208678258787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14d243a2639%3A0xa550799b8227e301!2sWORLD%20BLAZING%20COMPUTER%20INSTITUTE!5e0!3m2!1sen!2sin!4v1765137627969!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>

          {/* Why contact */}
          <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-300">
            <li>Choosing the right course</li>
            <li>Understanding fees & batch timings</li>
            <li>Booking free demo session</li>
            <li>Placement & career guidance</li>
          </ul>
        </div>

        {/* ================= RIGHT SECTION (FORM) ================= */}
        <div className="rounded-3xl border bg-white/90 p-6 dark:bg-neutral-900/90">

          {submitted ? (
            <div className="text-center py-10">
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full border"
              >
                <Check />
              </motion.div>
              <h3 className="text-2xl font-bold mb-2">
                Thank you!
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                We’ll call or WhatsApp you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup className="space-y-4">
                <h1 className="mt-6 mb-1 font-extrabold text-3xl tracking-tight col-span-full">
          World Blazing Computer Solution
        </h1>
        <h2 className="mt-4 mb-1 font-bold text-2xl tracking-tight col-span-full">
          👉 Book Your Free Demo Class
        </h2>
        <p className="tracking-wide text-muted-foreground mb-5 text-wrap text-sm col-span-full">
          👉 Talk to our trainers, understand the syllabus, career scope, fees,
          and placements before joining — no payment required.
        </p>
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Full Name *</FieldLabel>
                      <Input {...field} />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="phone"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Mobile Number *</FieldLabel>
                      <Input {...field} type="tel" />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              data-invalid={fieldState.invalid}
              className="gap-1 md:col-span-3"
            >
              <FieldLabel htmlFor="email">Email </FieldLabel>
              <Input
                {...field}
                id="email"
                type="text"
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your Email"
              />

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

                <Controller
                  name="course"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Course *</FieldLabel>
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select course" />
                        </SelectTrigger>
                        <SelectContent>
                          {coursesData.map((course) => (
                            <SelectItem key={course.slug} value={course.title}>
                              {course.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name="message"
                  control={form.control}
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>Message (optional)</FieldLabel>
                      <Textarea {...field} rows={3} />
                    </Field>
                  )}
                />

                <Button disabled={loading} onClick={handleClick}>
                  {loading ? "Submitting..." : "Get Call Back"}
                </Button>

                {error && (
                  <p className="text-sm text-red-500">
                    Something went wrong. Please try again.
                  </p>
                )}
              </FieldGroup>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
