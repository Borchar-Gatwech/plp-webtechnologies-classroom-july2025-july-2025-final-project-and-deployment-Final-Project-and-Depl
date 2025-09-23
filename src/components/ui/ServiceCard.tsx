import React from 'react';
export type Service = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
};
type ServiceCardProps = {
  service: Service;
  className?: string;
};
export function ServiceCard({
  service,
  className = ''
}: ServiceCardProps) {
  return <div className={`p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow ${className}`}>
      <div className="mb-4 text-blue-600 dark:text-blue-400">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
    </div>;
}