import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { SciFiCard } from '@/components/ui/SciFiCard'
import { useProjects } from '@/hooks/useProjects'

export default function Projects() {
  const { projects, loading } = useProjects()
  const [closedCards, setClosedCards] = useState(new Set())

  const handleCardClose = (id) => {
    setClosedCards(prev => new Set([...prev, id]))
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-white"
        >
          项目展示
        </motion.h1>
        {loading ? (
          <p className="text-white">加载中...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map(project => !closedCards.has(project.id) && (
              <SciFiCard 
                key={project.id}
                onClose={() => handleCardClose(project.id)}
              >
                <h2 className="text-2xl font-semibold mb-2 text-white">
                  {project.name}
                </h2>
                <p className="text-white/60 mb-4">{project.description}</p>
                <a
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  GitHub
                </a>
              </SciFiCard>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
} 