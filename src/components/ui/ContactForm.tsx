import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './Button';
import { CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    reset
  } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      reset();
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  return <div className="w-full">
      {submitStatus === 'success' && <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg flex items-center">
          <CheckCircleIcon size={20} className="mr-2" />
          <span>Thank you! Your message has been sent successfully.</span>
        </div>}
      {submitStatus === 'error' && <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg flex items-center">
          <AlertCircleIcon size={20} className="mr-2" />
          <span>Something went wrong. Please try again later.</span>
        </div>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input id="name" type="text" className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 ${errors.name ? 'border-red-500' : 'border-gray-300'}`} placeholder="Your name" {...register('name', {
          required: 'Name is required'
        })} />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input id="email" type="email" className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 ${errors.email ? 'border-red-500' : 'border-gray-300'}`} placeholder="Your email address" {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address'
          }
        })} />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <input id="subject" type="text" className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`} placeholder="Subject of your message" {...register('subject', {
          required: 'Subject is required'
        })} />
          {errors.subject && <p className="mt-1 text-sm text-red-600">
              {errors.subject.message}
            </p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea id="message" rows={5} className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 ${errors.message ? 'border-red-500' : 'border-gray-300'}`} placeholder="Your message" {...register('message', {
          required: 'Message is required',
          minLength: {
            value: 10,
            message: 'Message should be at least 10 characters'
          }
        })} />
          {errors.message && <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>}
        </div>
        <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </div>;
}