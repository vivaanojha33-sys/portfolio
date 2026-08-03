import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './icons/SocialIcons';
import { SectionWrapper, SectionHeading } from './SectionWrapper';
import { personalInfo } from '../data/portfolio';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
    }
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: 'Location', value: personalInfo.location, href: null },
    { icon: LinkedInIcon, label: 'LinkedIn', value: 'Connect on LinkedIn', href: personalInfo.linkedin },
    { icon: GitHubIcon, label: 'GitHub', value: 'View my repositories', href: personalInfo.github },
  ];

  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          subtitle="Contact"
          title="Let's Work Together"
          description="Have a project in mind or looking for a senior engineer? I'd love to hear from you."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-2"
          >
            {contactItems.map((item) => (
              <div key={item.label} className="glass flex items-center gap-4 rounded-xl p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-violet-500/20">
                  <item.icon className="h-5 w-5 text-violet-400" />
                </div>
                <div>
                  <p className="text-xs tracking-wider text-zinc-500 uppercase">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-medium text-zinc-300 transition hover:text-violet-400"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-zinc-300">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="glass rounded-xl p-6">
              <p className="mb-2 text-sm font-medium text-emerald-400">{personalInfo.availability}</p>
              <p className="text-sm text-zinc-400">
                Open to full-time opportunities, contract work, and consulting engagements in full-stack
                development and cloud architecture.
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass lg:col-span-3 rounded-2xl p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-400">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-zinc-400">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                placeholder="Project inquiry"
              />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-zinc-600 outline-none transition focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/30"
                placeholder="Tell me about your project..."
              />
            </div>

            {status === 'success' && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
                <CheckCircle size={18} />
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <AlertCircle size={18} />
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:shadow-violet-500/40 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === 'loading' ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
}
