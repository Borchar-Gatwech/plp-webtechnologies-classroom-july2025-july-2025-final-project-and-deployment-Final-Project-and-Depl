import React from 'react';
import { Link } from 'react-router-dom';
type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  className?: string;
  onClick?: () => void;
};
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external = false,
  className = '',
  onClick,
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-gray-800 hover:bg-gray-900 text-white',
    outline: 'border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white'
  };
  const sizeStyles = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3'
  };
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  if (href) {
    if (external) {
      return <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer" {...props}>
          {children}
        </a>;
    }
    return <Link to={href} className={buttonClasses} {...props}>
        {children}
      </Link>;
  }
  return <button className={buttonClasses} onClick={onClick} {...props}>
      {children}
    </button>;
}