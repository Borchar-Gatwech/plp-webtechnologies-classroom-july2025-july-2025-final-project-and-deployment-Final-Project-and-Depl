import React, { lazy } from 'react';
import { ContactForm } from '../components/ui/ContactForm';
import { MailIcon, PhoneIcon, MapPinIcon, ClockIcon } from 'lucide-react';
export function Contact() {
  return <div className="w-full bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 px-4 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to learn more about my services? I'd
            love to hear from you.
          </p>
        </div>
      </section>
      {/* Contact Information and Form */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Contact Information */}
            <div className="w-full md:w-1/3">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a href="mailto:alex@example.com" className="text-blue-600 hover:underline">
                      alex@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a href="tel:+15551234567" className="text-blue-600 hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p>San Francisco, California</p>
                    <p>United States</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                    <ClockIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Working Hours</h3>
                    <p>Monday - Friday: 9am - 5pm</p>
                    <p>Weekend: By appointment</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-medium mb-3">Connect with me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" aria-label="GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" aria-label="Twitter">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Find Me Here
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm based in San Francisco, but work with clients worldwide.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968236!2d-122.43759999999999!3d37.75769999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1620841837185!5m2!1sen!2sca" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" title="Map showing location of San Francisco"></iframe>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Answers to common questions about working with me.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                What information should I provide for a project quote?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                To provide an accurate quote, it helps to include details about
                your project scope, desired features, timeline, and any specific
                requirements. The more information you provide, the more
                accurate the estimate will be.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                How quickly do you respond to inquiries?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                I typically respond to all inquiries within 24 hours during
                business days. For urgent matters, please indicate this in your
                message and I'll prioritize your request.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Do you work with international clients?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! I work with clients from around the world. We can
                communicate via email, video calls, or your preferred method to
                accommodate different time zones and language preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
}