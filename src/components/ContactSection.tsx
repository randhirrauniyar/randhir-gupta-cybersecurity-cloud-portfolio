import React, { useState } from 'react';
import {
  Mail,
  Send,
  Copy,
  Check,
  Linkedin,
  Github,
  MessageSquare,
  Terminal,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);

      setTimeout(() => {
        setCopiedEmail(false);
      }, 2500);
    } catch (error) {
      console.error('Failed to copy email:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.message || 'Unable to send your message. Please try again.'
        );
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Contact form error:', error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send your message. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 font-mono text-xs mb-3 shadow-sm">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>10 // GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-heading">
            Let's Build Something Meaningful.
          </h2>

          <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base">
            Interested in cybersecurity, cloud security, AI, web development,
            or collaborative projects? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">

          {/* Direct Channels Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/90">

              <h3 className="text-lg font-bold text-white font-heading mb-4 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Direct Contact Channels</span>
              </h3>

              {/* Email item */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 mb-4">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Primary Email
                </div>

                <div className="flex items-center justify-between gap-2">

                  {/* Email address is still clickable for people who want to use
                      their own email application. The main contact form below
                      does NOT use this link. */}
                  <span className="text-xs sm:text-sm font-mono text-cyan-300 truncate font-semibold">
                    {personalInfo.email}
                  </span>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
                    title="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {copiedEmail && (
                  <div className="text-[10px] font-mono text-emerald-400 mt-1.5 flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>Copied to clipboard</span>
                  </div>
                )}
              </div>

              {/* Social Channels */}
              <div className="space-y-3">

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold">
                      LinkedIn Profile
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400">
                    Connect ➔
                  </span>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-semibold">
                      GitHub Profile
                    </span>
                  </div>

                  <span className="text-xs font-mono text-slate-500 group-hover:text-cyan-400">
                    Follow ➔
                  </span>
                </a>

              </div>

              <div className="mt-6 pt-5 border-t border-slate-800 text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Response Time: Typically within 24–48 hours</span>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/90">

              <h3 className="text-lg font-bold text-white font-heading mb-1 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Send a Message</span>
              </h3>

              <p className="text-xs text-slate-400 mb-6">
                Fill out this form to connect regarding internships, research
                collaborations, or technical projects.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-slate-900/90 border border-cyan-500/30 text-center space-y-4 animate-in fade-in">

                  <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>

                  <h4 className="text-lg font-bold text-white font-heading">
                    Message Sent Successfully!
                  </h4>

                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your message
                    has been sent successfully to{' '}
                    <strong>{personalInfo.email}</strong>.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Your Name *
                      </label>

                      <input
                        type="text"
                        required
                        placeholder="Alex Vance"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                        Your Email *
                      </label>

                      <input
                        type="email"
                        required
                        placeholder="alex@organization.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 font-sans"
                      />
                    </div>

                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Subject / Topic
                    </label>

                    <input
                      type="text"
                      placeholder="Cybersecurity Internship / Project Collaboration"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          subject: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5 uppercase">
                      Message *
                    </label>

                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Randhir, I came across your TLS Fingerprinting research and would like to discuss..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/60 font-sans resize-none"
                    />
                  </div>

                  {/* Error message */}
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="text-[10px] font-mono text-slate-500 text-center pt-1">
                    Your message will be securely delivered directly to my inbox.
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};