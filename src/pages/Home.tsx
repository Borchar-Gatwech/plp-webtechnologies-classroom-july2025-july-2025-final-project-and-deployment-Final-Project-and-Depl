import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, CodeIcon, ServerIcon } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { ProjectCard, Project } from '../components/ui/ProjectCard';
// Sample featured projects data
const featuredProjects: Project[] = [{
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
}];
export function Home() {
  // Animation on scroll effect
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-fadeIn');
        }
      });
    };
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on initial load
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);
  return <div className="w-full bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-blue-600">Web Developer</span> & Designer
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                I create beautiful, functional websites and applications that
                help businesses grow and succeed online.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/projects" size="lg">
                  View My Work
                </Button>
                <Button href="/contact" variant="outline" size="lg">
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" alt="Developer working on code" className="w-full h-auto rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
      {/* Services Preview */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I offer a range of services to help businesses establish a strong
              online presence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md animate-on-scroll">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <CodeIcon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building responsive, performant websites and web applications
                using modern technologies.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md animate-on-scroll" style={{
            animationDelay: '0.2s'
          }}>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <div size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Creating intuitive, engaging user interfaces and experiences
                that delight users.
              </p>
            </div>
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md animate-on-scroll" style={{
            animationDelay: '0.4s'
          }}>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <ServerIcon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Backend Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building robust APIs, databases, and server-side applications to
                power your products.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center animate-on-scroll">
            <Link to="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
              Explore all services
              <ArrowRightIcon size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* Featured Projects */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Take a look at some of my recent work that I'm proud of.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map(project => <ProjectCard key={project.id} project={project} className="animate-on-scroll" />)}
          </div>
          <div className="mt-12 text-center animate-on-scroll">
            <Button href="/projects" variant="outline">
              View All Projects
            </Button>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll">
            Ready to start your project?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-on-scroll">
            I'm currently available for freelance work. Let's discuss your
            project and make something great together.
          </p>
          <Button href="/contact" variant="secondary" size="lg" className="animate-on-scroll">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>;
}