import React from 'react'
import Image from 'next/image'
import { FileUploadDemo } from './fileupload'

const ContactUsSection = () => {
    return (
        <div>
            <section className="w-full  py-20 px-6 md:px-14">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* LEFT SECTION */}
                    <div>
                        {/* Icon */}
                        <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center mb-6">
                            <span className="text-2xl">📧</span>
                        </div>

                        <h2 className="text-4xl font-bold mb-4">Contact us</h2>
                        <p className="text-neutral-400 leading-relaxed mb-6">
                            We are always looking for ways to improve our products and
                            services. Contact us and let us know how we can help you.
                        </p>

                        {/* <div className="space-x-4 text-neutral-300">
                                <span>contact@yoursaas.ai</span>
                                <span>•</span>
                                <span>+1 (800) 123 XX21</span>
                                <span>•</span>
                                <span>support@yoursaas.ai</span>
                            </div>
                         */}
                        {/* World Map */}
                        <div className="relative mt-10">
                            <FileUploadDemo />
                        </div>
                    </div>
                        {/* RIGHT SECTION — FORM */}
                        <div className="bg-neutral-900/70 p-8 rounded-3xl border border-neutral-800 relative overflow-hidden">
                            {/* Subtle grid background */}
                            <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] pointer-events-none"></div>

                            <form className="relative space-y-6">
                                {/* Full Name */}
                                <div>
                                    <label className="block mb-2 text-sm text-neutral-300">Full name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-neutral-800 rounded-lg border border-neutral-700 text-white focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block mb-2 text-sm text-neutral-300">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="support@example.com"
                                        className="w-full px-4 py-3 bg-neutral-800 rounded-lg border border-neutral-700 text-white focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                {/* Company */}
                                <div>
                                    <label className="block mb-2 text-sm text-neutral-300">Company</label>
                                    <input
                                        type="text"
                                        placeholder="Your Company Name"
                                        className="w-full px-4 py-3 bg-neutral-800 rounded-lg border border-neutral-700 text-white focus:outline-none focus:border-blue-500"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block mb-2 text-sm text-neutral-300">Message</label>
                                    <textarea
                                        placeholder="Type your message here"
                                        rows={5}
                                        className="w-full px-4 py-3 bg-neutral-800 rounded-lg border border-neutral-700 text-white focus:outline-none focus:border-blue-500 resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUsSection