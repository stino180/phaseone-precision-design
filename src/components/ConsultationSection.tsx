import { ArrowRight, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ConsultationSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert(formData);

      if (error) throw error;

      toast({ title: "Message sent!", description: "We'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again or email us directly.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="consultation" className="py-24 md:py-32 bg-primary">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60 mb-4 text-center">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight text-balance text-center">
            Ready to elevate your digital presence?
          </h2>
          <p className="mt-6 text-primary-foreground/70 text-lg leading-relaxed max-w-lg mx-auto text-center">
            Book a free discovery call to discuss your project. No obligations, just clarity.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Info */}
            <div className="flex flex-col justify-center gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary-foreground/80" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-1">Email</p>
                  <a href="mailto:jstrongmgmt@gmail.com" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                    jstrongmgmt@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary-foreground/80" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-1">Phone</p>
                  <a href="tel:+17732347823" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                    (773) 234-7823
                  </a>
                </div>
              </div>

              <a
                href="mailto:jstrongmgmt@gmail.com"
                className="mt-4 inline-flex items-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-primary-foreground/90 transition-colors group w-fit"
              >
                Schedule a Discovery Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/40 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-2 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-primary-foreground/5 border border-primary-foreground/15 text-primary-foreground px-4 py-3 text-sm placeholder:text-primary-foreground/30 focus:outline-none focus:border-primary-foreground/40 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm font-medium tracking-wider uppercase hover:bg-primary-foreground/90 transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
