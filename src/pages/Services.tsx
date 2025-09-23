import React from 'react';
import { ServiceCard, Service } from '../components/ui/ServiceCard';
import { Button } from '../components/ui/Button';
import { CodeIcon, LayoutIcon, ServerIcon, ShoppingCartIcon, SearchIcon, SmartphoneIcon, CheckIcon } from 'lucide-react';
// Services data
const services: Service[] = [{
  id: 1,
  title: 'Web Development',
  description: 'Custom websites and web applications built with modern frameworks and best practices.',
  icon: <CodeIcon size={32} />
}, {
  id: 2,
  title: 'UI/UX Design',
  description: 'Intuitive and engaging user interfaces designed with your users in mind.',
  icon: <LayoutIcon size={32} />
}, {
  id: 3,
  title: 'Backend Development',
  description: 'Robust server-side applications, APIs, and database solutions.',
  icon: <ServerIcon size={32} />
}, {
  id: 4,
  title: 'E-commerce Solutions',
  description: 'Online stores with secure payment processing and inventory management.',
  icon: <ShoppingCartIcon size={32} />
}, {
  id: 5,
  title: 'SEO Optimization',
  description: 'Improve your website visibility, search engines, and drive organic traffic.',
  icon: <SearchIcon size={32} />
}, {
  id: 6,
  title: 'Mobile App Development',
  description: 'Cross-platform mobile applications that work on iOS and Android devices.',
  icon: <SmartphoneIcon size={32} />
}];
// Process steps
const processSteps = [{
  number: '01',
  title: 'Discovery',
  description: 'We start by understanding your business, goals, and requirements through in-depth consultation.'
}, {
  number: '02',
  title: 'Strategy & Planning',
  description: 'Based on our findings, we develop a comprehensive strategy and project plan.'
}, {
  number: '03',
  title: 'Design & Development',
  description: 'Our team designs and develops your solution with regular updates and feedback sessions.'
}, {
  number: '04',
  title: 'Testing & Launch',
  description: 'Rigorous testing ensures everything works perfectly before we launch your project.'
}, {
  number: '05',
  title: 'Support & Growth',
  description: 'We provide ongoing support and help you evolve your digital presence over time.'
}];
export function Services() {
  return <div className="w-full bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 px-4 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Services</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            I offer a comprehensive range of web development and design services
            to help your business succeed online.
          </p>
          <Button href="/contact" size="lg">
            Get a Free Consultation
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => <ServiceCard key={service.id} service={service} />)}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Process</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I follow a structured approach to ensure every project is
              delivered successfully.
            </p>
          </div>
          <div className="space-y-12">
            {processSteps.map((step, index) => <div key={step.number} className={`flex flex-col md:flex-row gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/5 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="w-full md:w-4/5">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Work With Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I bring a unique combination of technical expertise and creative
              thinking to every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="mt-1 p-1 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                <CheckIcon size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Every project is unique, and I create custom solutions
                  tailored to your specific needs and goals.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 p-1 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                <CheckIcon size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Modern Technologies</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I stay up-to-date with the latest technologies and best
                  practices to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 p-1 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                <CheckIcon size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Clear Communication</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I maintain open and clear communication throughout the
                  project, keeping you informed at every step.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 p-1 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                <CheckIcon size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I respect deadlines and ensure your project is delivered on
                  time and within budget.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 p-1 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                <CheckIcon size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All websites and applications I build are fully responsive and
                  work perfectly on all devices.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="mt-1 p-1 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400">
                <CheckIcon size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I provide continued support after launch to ensure your
                  digital solution remains effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I offer flexible pricing options to accommodate different project
              scopes and budgets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                $1,499
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Perfect for small businesses just starting out.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5 text-green-500" />
                  <span>5-page responsive website</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5 text-green-500" />
                  <span>Basic SEO setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5 text-green-500" />
                  <span>Contact form</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5 text-green-500" />
                  <span>Mobile responsive design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5 text-green-500" />
                  <span>1 month of support</span>
                </li>
              </ul>
              <Button href="/contact" variant="outline" className="w-full">
                Get Started
              </Button>
            </div>

            {/* Professional Package */}
            <div className="p-6 bg-blue-600 text-white rounded-lg shadow-md border border-blue-500 transform scale-105">
              <div className="absolute -top-4 left-0 right-0 text-center">
                <span className="bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <div className="text-3xl font-bold mb-4">$2,999</div>
              <p className="text-blue-100 mb-6">
                Ideal for established businesses looking to grow.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5" />
                  <span>10-page responsive website</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5" />
                  <span>Advanced SEO optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5" />
                  <span>Content management system</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5" />
                  <span>E-commerce functionality</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5" />
                  <span>3 months of support</span>
                </li>
              </ul>
              <Button href="/contact" variant="secondary" className="w-full">
                Get Started
              </Button>
            </div>

            {/* Enterprise Package */}
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">
                Custom
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                For large businesses with complex requirements.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5 text-green-500" />
                  <span>Custom web application</span>
                </li>

                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5 text-green-500" />
                  <span>Advanced features & integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5 text-green-500" />
                  <span>Custom database solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5 text-green-500" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon size={18} className="mt-0.5 text-green-500" />
                  <span>6 months of support</span>
                </li>
              </ul>
              <Button href="/contact" variant="outline" className="w-full">
                Contact for Quote
              </Button>
            </div>
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
              Find answers to common questions about my services.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                How long does it take to complete a website?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                The timeline depends on the complexity of the project. A basic
                website typically takes 2-4 weeks, while more complex projects
                can take 2-3 months or more. I'll provide a detailed timeline
                during our initial consultation.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Do you provide website hosting?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                While I don't provide hosting directly, I can recommend reliable
                hosting providers and help set up your website on your chosen
                platform. I can also provide guidance on selecting the best
                hosting option for your needs.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Will my website be mobile-friendly?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Absolutely! All websites I build are fully responsive and
                optimized for all devices, including smartphones, tablets, and
                desktop computers. This is essential for providing a good user
                experience and for SEO purposes.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="text-xl font-bold mb-2">
                Do you offer maintenance services?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, I offer ongoing maintenance services to keep your website
                secure, up-to-date, and running smoothly. This includes regular
                updates, security monitoring, backups, and technical support.
                Maintenance plans can be customized based on your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Contact me today for a free consultation and let's discuss how I can
            help bring your vision to life.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>;
}