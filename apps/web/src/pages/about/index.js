import React from 'react'
import { Layout } from '@/components/layout/Layout'

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">关于我</h1>
        <div className="prose lg:prose-xl">
          <p>这里是关于我的介绍...</p>
          <h2>技能</h2>
          <ul>
            <li>前端开发: React, Next.js, TypeScript</li>
            <li>后端开发: Node.js, Python</li>
            <li>其他技能...</li>
          </ul>
          <h2>联系方式</h2>
          <p>
            Email: your.email@example.com<br />
            GitHub: <a href="https://github.com/yourusername">@yourusername</a>
          </p>
        </div>
      </div>
    </Layout>
  )
} 