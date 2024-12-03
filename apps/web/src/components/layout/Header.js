import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          个人网站
        </Link>
        <div className="flex gap-4">
          <Link href="/blog">博客</Link>
          <Link href="/projects">项目</Link>
          <Link href="/about">关于</Link>
          <Button variant="outline">登录</Button>
        </div>
      </nav>
    </header>
  )
} 