import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Layout } from '@/components/layout/Layout'
import { CreatePostForm } from '@/components/blog/CreatePostForm'
import { SciFiCard } from '@/components/ui/SciFiCard'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`)
      const data = await response.json()
      setPosts(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('获取博客列表失败:', error)
      setPosts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 sci-fi-bg min-h-screen">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold neon-text"
          >
            博客文章
          </motion.h1>
          <CreatePostForm onSuccess={fetchPosts} />
        </div>
        {loading ? (
          <p className="text-white">加载中...</p>
        ) : posts.length > 0 ? (
          <motion.div 
            className="grid gap-6"
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {posts.map(post => (
              <SciFiCard key={post.id}>
                <h2 className="text-2xl font-semibold mb-2 text-cyan-400">
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-4">{post.content}</p>
                <div className="text-sm text-cyan-200">
                  发布于 {new Date(post.created_at).toLocaleDateString()}
                </div>
              </SciFiCard>
            ))}
          </motion.div>
        ) : (
          <p className="text-white">暂无博客文章</p>
        )}
      </div>
    </Layout>
  )
} 