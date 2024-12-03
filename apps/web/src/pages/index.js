import React from 'react'
import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { SciFiCard } from '@/components/ui/SciFiCard'
import { usePosts } from '@/hooks/usePosts'
import { useProjects } from '@/hooks/useProjects'

export default function Home() {
  const { posts, loading: postsLoading } = usePosts()
  const { projects, loading: projectsLoading } = useProjects()

  return (
    <Layout>
      <div className="gradient-bg min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-12 gradient-text text-center"
          >
            欢迎来到我的个人网站
          </motion.h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold mb-6 glow-text">最新博客</h2>
              {postsLoading ? (
                <div className="text-white/60">加载中...</div>
              ) : posts.length > 0 ? (
                <motion.div 
                  className="space-y-6"
                  variants={{
                    show: {
                      transition: { staggerChildren: 0.1 }
                    }
                  }}
                  initial="hidden"
                  animate="show"
                >
                  {posts.slice(0, 3).map(post => (
                    <SciFiCard key={post.id}>
                      <h3 className="text-xl font-medium text-white mb-2">
                        {post.title}
                      </h3>
                      <p className="text-white/60">
                        {post.content.slice(0, 100)}...
                      </p>
                    </SciFiCard>
                  ))}
                </motion.div>
              ) : (
                <div className="text-white/60">暂无博客文章</div>
              )}
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold mb-6 glow-text">项目展示</h2>
              {projectsLoading ? (
                <div className="text-white/60">加载中...</div>
              ) : projects.length > 0 ? (
                <motion.div 
                  className="space-y-6"
                  variants={{
                    show: {
                      transition: { staggerChildren: 0.1 }
                    }
                  }}
                  initial="hidden"
                  animate="show"
                >
                  {projects.slice(0, 3).map(project => (
                    <SciFiCard key={project.id}>
                      <h3 className="text-xl font-medium text-white mb-2">
                        {project.name}
                      </h3>
                      <p className="text-white/60">{project.description}</p>
                    </SciFiCard>
                  ))}
                </motion.div>
              ) : (
                <div className="text-white/60">暂无项目</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
} 