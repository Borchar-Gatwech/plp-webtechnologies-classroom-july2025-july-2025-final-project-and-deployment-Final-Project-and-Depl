import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from 'lucide-react';
type FooterProps = {
  darkMode: boolean;
};
export function Footer({
  darkMode
}: FooterProps) {
  return <footer className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">
              Alex<span className="text-blue-600">Chen</span>
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Web Developer & Designer
            </p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="Twitter">
              <TwitterIcon size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="mailto:alex@example.com" className="hover:text-blue-600 transition-colors" aria-label="Email">
              <MailIcon size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Alex Chen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}