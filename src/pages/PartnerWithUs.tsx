import { useState } from "react";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import rdLabHands from "@/assets/rd-lab-hands.jpg";

const enquiryTypes = [
  "General Inquiry",
  "Business Development",
  "Investor Relations",
  "Media & Press",
  "Careers",
  "Partnering & CDMO",
];

const offices = [
  {
    city: "Hyderabad, India",
    address: "AMOGEN Biosciences Pvt. Ltd., Genome Valley, Shamirpet, Hyderabad, Telangana 500078, India",
    phone: "+91 40 2345 6789",
    mapQuery: "Genome+Valley+Hyderabad+India",
  },
  {
    city: "Boston, Massachusetts USA",
    address: "AMOGEN Biosciences Inc., 200 State Street, 13th Floor, Boston, MA 02109, USA",
    phone: "+1 617 555 0100",
    mapQuery: "200+State+Street+Boston+MA",
  },
  {
    city: "Basel, Switzerland",
    address: "AMOGEN Biosciences AG, Aeschenvorstadt 36, 4051 Basel, Switzerland",
    phone: "+41 61 555 0200",
    mapQuery: "Aeschenvorstadt+36+Basel+Switzerland",
  },
];

const PartnerWithUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    enquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="partner" />

      {/* Hero + Form Section */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ backgroundColor: "hsl(var(--primary))" }}
      >
        {/* Subtle decorative circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full border border-primary-foreground/5" />
          <div className="absolute top-1/2 -left-20 w-[300px] h-[300px] rounded-full border border-primary-foreground/5" />
          <div className="absolute -bottom-20 left-1/3 w-[400px] h-[400px] rounded-full border border-primary-foreground/5" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-32 md:py-40">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            {/* Left: Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.08] mb-8">
                Get in touch
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-6 max-w-lg">
                Have a question for us? Need a clarification? Please fill out
                our contact form.
              </p>
              <p className="text-base text-primary-foreground/60 leading-relaxed mb-6 max-w-lg">
                When you contact AMOGEN Biosciences using this contact form, we
                will process your personal data for the purpose of handling your
                inquiry.
              </p>
              <p className="text-base text-primary-foreground/60 leading-relaxed max-w-lg">
                You can read more about our personal data management in our{" "}
                <a
                  href="#"
                  className="text-primary-foreground underline underline-offset-4 decoration-primary-foreground/40 hover:decoration-primary-foreground/80 transition-colors"
                >
                  Privacy Notice
                </a>
                .
              </p>
            </motion.div>

            {/* Right: Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-card rounded-2xl shadow-2xl p-8 md:p-10 lg:p-12">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <ArrowRight size={24} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Thank you
                    </h3>
                    <p className="text-muted-foreground">
                      Your message has been received. We'll get back to you
                      shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-0">
                    {/* Name */}
                    <div className="border-b border-border py-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                        <label className="text-xs uppercase tracking-[0.15em] font-bold text-foreground/50 sm:w-40 shrink-0">
                          Name<span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Enter your name"
                          value={form.name}
                          onChange={handleChange}
                          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none py-1"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="border-b border-border py-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                        <label className="text-xs uppercase tracking-[0.15em] font-bold text-foreground/50 sm:w-40 shrink-0">
                          Email Address<span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Enter your email"
                          value={form.email}
                          onChange={handleChange}
                          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none py-1"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div className="border-b border-border py-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                        <label className="text-xs uppercase tracking-[0.15em] font-bold text-foreground/50 sm:w-40 shrink-0">
                          Company<span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          placeholder="Enter a company"
                          value={form.company}
                          onChange={handleChange}
                          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none py-1"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="border-b border-border py-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                        <label className="text-xs uppercase tracking-[0.15em] font-bold text-foreground/50 sm:w-40 shrink-0">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Enter phone number"
                          value={form.phone}
                          onChange={handleChange}
                          className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none py-1"
                        />
                      </div>
                    </div>

                    {/* Enquiry Type */}
                    <div className="border-b border-border py-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                        <label className="text-xs uppercase tracking-[0.15em] font-bold text-foreground/50 sm:w-40 shrink-0">
                          Type of Enquiry<span className="text-destructive">*</span>
                        </label>
                        <select
                          name="enquiryType"
                          required
                          value={form.enquiryType}
                          onChange={handleChange}
                          className="flex-1 bg-transparent text-sm text-foreground focus:outline-none py-1 appearance-none cursor-pointer"
                        >
                          <option value="" disabled>
                            Select department
                          </option>
                          {enquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="border-b border-border py-4">
                      <label className="text-xs uppercase tracking-[0.15em] font-bold text-foreground/50 block mb-2">
                        Message<span className="text-destructive">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        placeholder="Enter your message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none resize-y"
                      />
                    </div>

                    {/* Privacy + Submit */}
                    <div className="pt-6">
                      <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
                        By clicking "Send" you confirm you have read and
                        understood our{" "}
                        <a
                          href="#"
                          className="text-foreground underline underline-offset-2"
                        >
                          Privacy Notice
                        </a>
                        .
                      </p>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        Send <ArrowRight size={14} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices Section */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-16">
              Global Offices
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <ScrollReveal key={office.city} delay={i * 0.1}>
                <div className="group relative bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-lg transition-shadow duration-300">
                  {/* Map Embed */}
                  <div className="h-48 bg-muted overflow-hidden">
                    <iframe
                      title={office.city}
                      src={`https://maps.google.com/maps?q=${office.mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                      className="w-full h-full border-0 grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6 md:p-8">
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {office.city}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {office.address}
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href={`tel:${office.phone.replace(/\s/g, "")}`}
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <Phone size={14} />
                        {office.phone}
                      </a>
                      <a
                        href={`https://maps.google.com/?q=${office.mapQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        <MapPin size={14} />
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Banner */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "hsl(var(--section-cream))" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* Left: Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={rdLabHands}
                  alt="Researcher working on laptop"
                  className="w-full h-[340px] md:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>

              {/* Right: Text + CTA + decorative arc */}
              <div className="relative">
                <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-foreground leading-[1.12] mb-5">
                  Stay up to date with<br />AMOGEN Bio Pharma.
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
                  Join our email list to receive press releases and company
                  updates directly to your inbox
                </p>
                <Link
                  to="/news"
                  className="inline-flex items-center gap-2.5 px-7 py-3 text-sm font-semibold uppercase tracking-[0.1em] rounded-full border-2 border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                >
                  Subscribe to News <ArrowRight size={15} />
                </Link>

                {/* Decorative arc */}
                <svg
                  className="absolute -bottom-16 right-0 w-36 h-36 md:w-48 md:h-48 text-foreground/80 pointer-events-none"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M180 20 C180 100, 100 180, 20 180"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default PartnerWithUs;
