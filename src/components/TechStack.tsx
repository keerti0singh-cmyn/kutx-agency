'use client'

import { motion } from 'framer-motion'

const TechStack = () => {
  const techCategories = [
    {
      title: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
    },
    {
      title: 'Backend',
      technologies: ['Node.js', 'Supabase', 'PostgreSQL', 'REST APIs', 'GraphQL']
    },
    {
      title: 'AI & Automation',
      technologies: ['OpenAI', 'n8n', 'Zapier', 'Custom AI Models', 'Machine Learning']
    },
    {
      title: 'DevOps',
      technologies: ['Vercel', 'Netlify', 'GitHub Actions', 'Docker', 'CI/CD']
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-purple to-neon-blue bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Powered by the latest technologies for optimal performance and scalability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4 neon-text">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center space-x-2 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                    <span className="text-sm">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">
              And Many More...
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Git', 'Webpack', 'Jest', 'Cypress', 'Storybook', 'ESLint', 'Prettier', 'VS Code'].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-neon-purple/20 text-neon-purple rounded-full text-sm border border-neon-purple/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack