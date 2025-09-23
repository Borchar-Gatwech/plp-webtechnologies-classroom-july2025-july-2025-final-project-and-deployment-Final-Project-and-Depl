import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};
type ProjectCardProps = {
  project: Project;
  className?: string;
};
export function ProjectCard({
  project,
  className = ''
}: ProjectCardProps) {
  return <div className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${className}`}>
      <div className="relative overflow-hidden h-48">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        {project.featured && <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </div>}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => <span key={tag} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
              {tag}
            </span>)}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-3">
            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-blue-600 hover:text-blue-800 transition-colors">
                <ExternalLinkIcon size={16} className="mr-1" />
                Live Demo
              </a>}
            {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                <GithubIcon size={16} className="mr-1" />
                Code
              </a>}
          </div>
        </div>
      </div>
    </div>;
}