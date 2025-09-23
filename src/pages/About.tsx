import React from 'react';
import { Button } from '../components/ui/Button';
// Skills data
const skills = [{
  category: 'Frontend',
  items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS']
}, {
  category: 'Backend',
  items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'REST API', 'GraphQL']
}, {
  category: 'Tools',
  items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Adobe XD', 'Webpack', 'Jest']
}];
// Experience data
const experiences = [{
  title: 'Senior Frontend Developer',
  company: 'Tech Innovations Inc.',
  period: '2021 - Present',
  description: 'Lead the frontend development team in building scalable web applications. Implemented modern React patterns and improved performance by 40%.'
}, {
  title: 'Web Developer',
  company: 'Digital Solutions Agency',
  period: '2018 - 2021',
  description: 'Developed responsive websites and web applications for various clients. Worked with React, Node.js, and various APIs.'
}, {
  title: 'Junior Developer',
  company: 'StartUp Co.',
  period: '2016 - 2018',
  description: 'Assisted in the development of web applications. Gained experience in HTML, CSS, JavaScript, and basic backend technologies.'
}];
export function About() {
  return <div className="w-full bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 px-4 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Alex Chen - Web Developer" className="w-full h-auto rounded-lg shadow-xl" />
            </div>
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Hello! I'm Alex Chen, a passionate web developer and designer
                with over 5 years of experience creating beautiful, functional
                websites and applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I specialize in building responsive, user-friendly interfaces
                using modern technologies like React, TypeScript, and Tailwind
                CSS. My approach combines technical expertise with an eye for
                design to create exceptional digital experiences.
              </p>
              <div className="flex gap-4">
                <Button href="/contact">Get in Touch</Button>
                <Button href="/projects" variant="outline">
                  View My Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map(skillGroup => <div key={skillGroup.category} className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-blue-600">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(skill => <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {skill}
                    </span>)}
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => <div key={index} className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-blue-600 font-medium">
                    {exp.period}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">
                  {exp.company}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Education Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Education
          </h2>
          <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-bold">
                Bachelor of Science in Computer Science
              </h3>
              <span className="text-blue-600 font-medium">2012 - 2016</span>
            </div>
            <h4 className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">
              University of Technology
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Graduated with honors. Specialized in web development and user
              interface design. Completed a thesis on responsive design patterns
              for modern web applications.
            </p>
          </div>
        </div>
      </section>
      {/* Personal Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                When I'm Not Coding
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                Outside of work, I'm an avid hiker and nature photographer. I
                believe that stepping away from the screen regularly helps me
                maintain creativity and perspective.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                I'm also passionate about teaching and mentoring new developers.
                I volunteer at local coding bootcamps and regularly create
                tutorials for my blog and YouTube channel.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                When I'm not exploring the outdoors or teaching, you'll find me
                experimenting with new technologies or contributing to
                open-source projects.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" alt="Hiking in the mountains" className="w-full h-auto rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in working together?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your vision.
          </p>
          <Button href="/contact" variant="secondary" size="lg">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>;
}