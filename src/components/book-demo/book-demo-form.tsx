import ContactUsSection from "../../components/contact-us";

export default function BookDemoForm() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      {/* Left content */}
      {/* <div>
        <h2 className="text-2xl font-bold mb-4">
          Why Book a Demo?
        </h2>

        <ul className="space-y-3 text-neutral-700 dark:text-neutral-300">
          <li>✅ Understand course syllabus clearly</li>
          <li>✅ Meet real trainers</li>
          <li>✅ See practical projects</li>
          <li>✅ Career guidance session</li>
          <li>✅ No pressure to join</li>
        </ul>

        <a
          href="https://wa.me/918459816185?text=Hello%20I%20want%20to%20book%20a%20free%20demo%20class"
          target="_blank"
          className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-500"
        >
          📲 Book via WhatsApp
        </a>
      </div> */}

      {/* Google Form Embed */}
      {/* <div className="rounded-xl overflow-hidden border shadow"> */}
        <ContactUsSection scriptUrl="https://script.google.com/macros/s/AKfycbwbOGYEzpxerAll1enPNGe2eY4qsYljbFb4H4lWXu94ps4Vl6_be-KB1rVu3s820elK/exec" />
      {/* </div> */}
    </section>
  );
}
