'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Building, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    teamSize: '',
    message: '',
    subscribe: true
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      // In a real app, you would submit the form data to your API
      console.log('Submitting contact form:', formData);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Our Sales Team</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Let us help you find the right plan for your creator journey. Our team is ready to answer your questions.
          </p>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="container mx-auto px-6 max-w-6xl py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {isSubmitted ? (
              <div className="bg-white rounded-md shadow-sm border border-gray-200 p-8 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
                <p className="text-gray-600 mb-6">
                  Your message has been sent successfully. A member of our sales team will get back to you within 24 hours.
                </p>
                <Link 
                  href="/" 
                  className="inline-block bg-black hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-md"
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <div className="bg-white rounded-md shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name*
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Work Email*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company/Organization*
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      >
                        <option value="">Select your role</option>
                        <option value="creator">Creator</option>
                        <option value="business_owner">Business Owner</option>
                        <option value="marketing">Marketing</option>
                        <option value="sales">Sales</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-1">
                        Team Size
                      </label>
                      <select
                        id="teamSize"
                        name="teamSize"
                        value={formData.teamSize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      >
                        <option value="">Select team size</option>
                        <option value="1">Just me</option>
                        <option value="2-5">2-5 people</option>
                        <option value="6-10">6-10 people</option>
                        <option value="11-50">11-50 people</option>
                        <option value="50+">50+ people</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      How can we help you?*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      placeholder="Tell us about your needs and questions..."
                    ></textarea>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="subscribe"
                        name="subscribe"
                        type="checkbox"
                        checked={formData.subscribe}
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="subscribe" className="text-gray-700">
                        Keep me updated on new features, best practices, and creator success stories.
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 px-4 bg-black hover:bg-gray-800 text-white font-medium rounded-md disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Contact Sales'}
                    </button>
                    <p className="text-sm text-gray-500 mt-2">
                      By submitting this form, you agree to our <Link href="/privacy" className="underline">Privacy Policy</Link>.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-md shadow-sm border border-gray-200 p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">Email</h3>
                    <p className="text-sm text-gray-600 mt-1">sales@patreonclone.com</p>
                    <p className="text-sm text-gray-600">support@patreonclone.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                    <p className="text-sm text-gray-600 mt-1">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-600">Mon-Fri, 9am-5pm PT</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Building className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">Headquarters</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      123 Creator Avenue<br />
                      San Francisco, CA 94107<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-900">Live Chat</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Our live chat is available Monday through Friday, 9am-5pm PT.
                    </p>
                    <button className="mt-2 inline-flex items-center text-sm font-medium text-black hover:text-gray-800">
                      Start a chat <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Looking for help?</h3>
                <p className="text-gray-600 mb-4">
                  If you&apos;re looking for general support rather than sales assistance, please visit our Help Center.
                </p>
                <Link 
                  href="/help-center" 
                  className="inline-flex items-center text-black font-medium hover:text-gray-800"
                >
                  Visit Help Center <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">What types of organizations use PatreonClone?</h3>
              <p className="text-gray-600">
                PatreonClone is used by a wide range of creators and organizations, from individual artists and content creators to larger creative teams, non-profits, educational institutions, and businesses with subscription-based content models.
              </p>
            </div>
            
            <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Do you offer custom pricing for larger organizations?</h3>
              <p className="text-gray-600">
                Yes, we offer custom pricing plans for larger organizations with specific needs. Our sales team can work with you to create a tailored solution that fits your requirements and budget.
              </p>
            </div>
            
            <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Is there a free trial available?</h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial on our Pro and Business plans. You can explore all features during this period with no commitment. If you need more time to evaluate, our sales team can arrange an extended trial.
              </p>
            </div>
            
            <div className="bg-white rounded-md shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Can I change plans or cancel my subscription?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade, downgrade, or cancel your subscription at any time. When upgrading, you&apos;ll get immediate access to new features. When downgrading or canceling, changes will take effect at the end of your current billing cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="container mx-auto px-6 max-w-6xl py-16">
        <div className="bg-black text-white rounded-lg overflow-hidden">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who are building sustainable businesses with PatreonClone.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/signup" 
                className="bg-white text-black hover:bg-gray-100 font-medium py-3 px-8 rounded-md"
              >
                Sign Up Free
              </Link>
              <Link 
                href="/pricing" 
                className="bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-md"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
