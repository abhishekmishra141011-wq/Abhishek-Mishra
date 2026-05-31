import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Calendar, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  activeColor: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ activeColor }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '$15,005 - $30,000',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', budget: '$15,005 - $30,000', message: '' });
    }, 1500);
  };

  return (
    <div className="w-full space-y-12 py-6 font-sans">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <h2 className="font-serif text-3xl sm:text-4xl text-primary-dark font-medium tracking-tight">
          Join Us to Design Your Haven
        </h2>
        <p className="text-neutral-400 text-sm font-light">
          Have an upcoming spatial layout modification or a brand new luxury residential blueprint? Let's discuss your material selections.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left column: Agency contact coordinates */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 bg-slate-50 border border-neutral-100/65 rounded-[30px] space-y-8">
            <h3 className="font-serif text-[26px] text-primary-dark font-medium leading-none">
              Contact Channels
            </h3>

            {/* Coordinates */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200/50 flex items-center justify-center flex-shrink-0"
                  style={{ color: activeColor }}
                >
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-neutral-400 tracking-wider">Email Inquiry</h4>
                  <p className="text-sm font-medium text-neutral-700 mt-0.5">collaboration@interno.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200/50 flex items-center justify-center flex-shrink-0"
                  style={{ color: activeColor }}
                >
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-neutral-400 tracking-wider">Call Advisor</h4>
                  <p className="text-sm font-medium text-neutral-700 mt-0.5">+1 (555) 732-9020</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div 
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200/50 flex items-center justify-center flex-shrink-0"
                  style={{ color: activeColor }}
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-neutral-400 tracking-wider">Headquarters</h4>
                  <p className="text-sm font-medium text-neutral-700 mt-0.5">85 Broadway Avenue, Studio 4A, NY 10003</p>
                </div>
              </div>
            </div>
          </div>

          {/* Office hours box */}
          <div className="p-8 border border-neutral-150 rounded-[30px] bg-white flex items-start gap-5">
            <Clock className="w-6 h-6 text-neutral-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-serif text-lg font-medium text-primary-dark">Design Office Hours</h4>
              <p className="text-neutral-500 font-light text-xs sm:text-sm mt-1 leading-relaxed">
                We accept walk-in clients and physical timber catalogs consultations Monday through Friday from <strong>9:00 AM to 6:00 PM EST</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Right column: Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="p-10 border border-emerald-100 rounded-[30px] bg-emerald-50/20 text-center space-y-4 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-serif text-2xl font-semibold text-emerald-800">
                Spatial Request Sent Successfully!
              </h3>
              <p className="text-neutral-500 font-light text-sm max-w-sm leading-relaxed">
                Thank you for contacting Interno. An architectural advisor will review your design goals and send over interactive blueprints in 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-neutral-900 text-white font-medium text-xs rounded-xl hover:bg-neutral-800 transition-colors"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 md:p-10 border border-neutral-100 rounded-[30px] bg-white space-y-6 shadow-sm shadow-[#CDA274]/2">
              <h3 className="font-serif text-2xl text-primary-dark font-medium leading-none pb-2 border-b border-neutral-100">
                Design Inquiry Proposal
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full text-sm px-4 py-3 border border-neutral-250 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-gold"
                    placeholder="e.g. Natasha Chaudhury"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                    Your Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full text-sm px-4 py-3 border border-neutral-250 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-gold"
                    placeholder="e.g. natasha@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                  Estimated Interior Budget Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                  className="w-full text-sm px-4 py-3 border border-neutral-250 rounded-xl bg-white focus:outline-none focus:ring-1 focus:ring-primary-gold cursor-pointer"
                >
                  <option>$5,000 - $15,000 (Consultation & Lighting Details)</option>
                  <option>$15,005 - $30,000 (Single Living Room Refurnish)</option>
                  <option>$30,022 - $60,000 (Comprehensive Kitchen/Apartment CAD)</option>
                  <option>$60,000+ (Elite Full-Villa Turnkey Overhaul)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">
                  Share Your Vision
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full text-sm px-4 py-3 border border-neutral-250 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-gold"
                  placeholder="Describe your design inspirations, preferred timbers, colors, textures..."
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Secure SSL submission. Your design privacy is guaranteed.</span>
                </div>

                <button
                  type="submit"
                  style={{ backgroundColor: activeColor }}
                  disabled={submitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 text-white font-bold text-xs rounded-xl shadow-md select-none cursor-pointer hover:shadow-lg transition-transform hover:scale-[1.01]"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Proposing...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Submit Blueprint Request
                    </>
                  )}
                </button>
              </div>

            </form>
          )}
        </div>
      </div>

    </div>
  );
};
