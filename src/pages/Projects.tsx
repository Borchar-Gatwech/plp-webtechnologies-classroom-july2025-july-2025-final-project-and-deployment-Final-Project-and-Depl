import React, { useEffect, useState } from 'react';
import { ProjectCard, Project } from '../components/ui/ProjectCard';
// Sample projects data
const allProjects: Project[] = [{
  id: 1,
  title: 'E-commerce Platform',
  description: 'A fully responsive e-commerce platform with cart functionality and payment integration.',
  image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
  tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com',
  featured: true
}, {
  id: 2,
  title: 'Task Management App',
  description: 'A drag-and-drop task management application with team collaboration features.',
  image: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  tags: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com',
  featured: true
}, {
  id: 3,
  title: 'Fitness Tracking Mobile App',
  description: 'A mobile application for tracking workouts, nutrition, and fitness goals.',
  image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  tags: ['React Native', 'Redux', 'Firebase', 'Health API'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com'
}, {
  id: 4,
  title: 'Weather Dashboard',
  description: 'A weather dashboard with location search and 7-day forecast visualization.',
  image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
  tags: ['JavaScript', 'Chart.js', 'Weather API', 'CSS3'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com'
}, {
  id: 5,
  title: 'Real Estate Listing Platform',
  description: 'A platform for browsing and listing properties with map integration.',
  image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
  tags: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com'
}, {
  id: 6,
  title: 'Blog CMS',
  description: 'A content management system for blogs with markdown support and SEO tools.',
  image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com'
}];
// Get all unique tags from projects
const allTags = Array.from(new Set(allProjects.flatMap(project => project.tags)));
export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [searchQuery, setSearchQuery] = useState('');
  // Filter projects based on active tag and search query
  useEffect(() => {
    let result = allProjects;
    if (activeFilter) {
      result = result.filter(project => project.tags.includes(activeFilter));
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(project => project.title.toLowerCase().includes(query) || project.description.toLowerCase().includes(query) || project.tags.some(tag => tag.toLowerCase().includes(query)));
    }
    setFilteredProjects(result);
  }, [activeFilter, searchQuery]);
  return <div className="w-full bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 px-4 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my portfolio of web development and design projects. Each
            project represents a unique challenge and solution.
          </p>
        </div>
      </section>
      {/* Filter and Search Section */}
      <section className="py-8 px-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Tag Filters */}
            <div className="flex flex-wrap gap-2">
              <button onClick={() => setActiveFilter(null)} className={`px-3 py-1 text-sm rounded-full transition-colors ${activeFilter === null ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>
                All
              </button>
              {allTags.map(tag => <button key={tag} onClick={() => setActiveFilter(tag)} className={`px-3 py-1 text-sm rounded-full transition-colors ${activeFilter === tag ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>
                  {tag}
                </button>)}
            </div>
            {/* Search */}
            <div className="relative">
              <input type="text" placeholder="Search projects..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full md:w-64 p-2 pl-8 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800" />
              <svg className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          {filteredProjects.length === 0 ? <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => <ProjectCard key={project.id} project={project} />)}
            </div>}
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a project in mind?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life.
          </p>
          <a href="/contact" className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors">
            Get in Touch
          </a>
        </div>
      </section>
    </div>;
}