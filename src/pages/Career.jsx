import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Career = ({ defaultRole }) => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Determine role title from path or prop
  let roleTitle = defaultRole || 'Legal Assistant';
  if (location.pathname.includes('office-assistant')) {
    roleTitle = 'Office Assistant';
  } else if (location.pathname.includes('legal-assistant')) {
    roleTitle = 'Legal Assistant';
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner: Dark Background with Gold Title */}
      <section className="bg-[#16202c] py-12 md:py-16 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#e6ad47] tracking-tight">
            {roleTitle}
          </h1>
        </div>
      </section>

      {/* Main Form Section */}
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-12 md:py-16">
        <div className="max-w-[620px]">
          {submitted ? (
            <div className="p-6 bg-green-50 border border-green-200 text-green-800 rounded-sm text-sm">
              <h3 className="font-bold text-base mb-1">Thank You!</h3>
              <p>Your application for <strong>{roleTitle}</strong> has been received successfully. We will review your details and contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full h-10 border border-gray-300 rounded-[2px] px-3 text-sm focus:outline-none focus:border-blue-600 bg-white"
                    />
                    <span className="text-xs text-gray-500 mt-1 block">First</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full h-10 border border-gray-300 rounded-[2px] px-3 text-sm focus:outline-none focus:border-blue-600 bg-white"
                    />
                    <span className="text-xs text-gray-500 mt-1 block">Last</span>
                  </div>
                </div>
              </div>

              {/* Phone Number Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-10 border border-gray-300 rounded-[2px] px-3 text-sm focus:outline-none focus:border-blue-600 bg-white"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-10 border border-gray-300 rounded-[2px] px-3 text-sm focus:outline-none focus:border-blue-600 bg-white"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="bg-[#3b6ea5] hover:bg-[#315b89] text-white px-6 py-2 text-sm font-medium rounded-[2px] shadow-sm transition-colors cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Career;
