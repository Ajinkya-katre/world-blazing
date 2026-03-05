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

/* ---------------- FORM SCHEMA ---------------- */

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone required"),
  email: z.string().optional(),
  course: z.string().min(1, "Please select a course"),
  message: z.string().optional(),
});

type FormDataType = z.infer<typeof formSchema>;

interface ContactUsPageProps {
  scriptUrl?: string;
  linkType?: string;
}

export default function ContactUsPage({ scriptUrl, linkType }: ContactUsPageProps) {

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm<FormDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      course: "",
      message: "",
    },
  });

  /* ---------------- SUBMIT FUNCTION ---------------- */

  async function onSubmit(data: FormDataType) {

    if (!scriptUrl) return;

    try {

      setLoading(true);
      setError(false);

      const formData = new FormData();

      const submissionType = linkType === "contact-us" ? "lead" : "demo";

      Object.entries({
        type: submissionType,
        ...data,
      }).forEach(([key, value]) => {
        formData.append(key, value ?? "");
      });

      await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: submissionType,
          ...data,
        }),
      });

      trackEvent({
        event: "contact_form_submitted",
        category: "conversion",
        label: data.course || "contact_form",
      });

      setSubmitted(true);
      form.reset();

    } catch (err) {
      console.error(err);
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

        {/* LEFT SECTION */}

        <div className="space-y-8">

          <div>

            <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-600">
              📞 Let’s talk
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Contact Us
            </h2>

            <p className="mt-3 text-neutral-600 max-w-xl">
              Have questions about courses, fees, or batch timings? Reach out to
              World Blazing Computer Institute and our team will help you choose
              the right IT career path.
            </p>

          </div>

        </div>

        {/* RIGHT SECTION (FORM) */}

        <div className="rounded-3xl border bg-white p-6">

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

              <p className="text-neutral-600">
                We’ll call or WhatsApp you within 24 hours.
              </p>

            </div>

          ) : (

            <form onSubmit={form.handleSubmit(onSubmit)}>

              <FieldGroup className="space-y-4">

                {/* NAME */}

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

                {/* PHONE */}

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

                {/* EMAIL */}

                <Controller
                  name="email"
                  control={form.control}
                  render={({ field }) => (

                    <Field>

                      <FieldLabel>Email</FieldLabel>

                      <Input {...field} />

                    </Field>

                  )}
                />

                {/* COURSE */}

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
                            <SelectItem
                              key={course.slug}
                              value={course.title}
                            >
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

                {/* MESSAGE */}

                <Controller
                  name="message"
                  control={form.control}
                  render={({ field }) => (

                    <Field>

                      <FieldLabel>Message</FieldLabel>

                      <Textarea {...field} rows={3} />

                    </Field>

                  )}
                />

                <Button
                  type="submit"
                  disabled={loading}
                  onClick={handleClick}
                >
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