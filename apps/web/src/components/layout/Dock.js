import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'

const DockItem = ({ href, icon, label, isActive }) => {
  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <Link href={href}>
        <div className={`
          w-12 h-12 rounded-2xl flex items-center justify-center
          bg-white/10 backdrop-blur-md border border-white/20
          ${isActive ? 'bg-white/20' : 'hover:bg-white/15'}
          transition-all duration-300
        `}>
          {icon}
        </div>
        {/* Tooltip */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="px-3 py-1 rounded-md bg-gray-800 text-white text-sm whitespace-nowrap">
            {label}
          </div>
        </div>
        {/* Dot indicator */}
        {isActive && (
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
            <div className="w-1 h-1 rounded-full bg-white" />
          </div>
        )}
      </Link>
    </motion.div>
  )
}

export function Dock() {
  const router = useRouter()
  
  const menuItems = [
    { href: '/', icon: '🏠', label: '主页' },
    { href: '/blog', icon: '📝', label: '博客' },
    { href: '/projects', icon: '💻', label: '项目' },
    { href: '/about', icon: '👤', label: '关于' },
  ]

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2">
      <div className="
        px-4 py-2 rounded-2xl
        bg-white/30 backdrop-blur-xl
        border border-white/20
        shadow-2xl
      ">
        <div className="flex items-center gap-3">
          {menuItems.map((item) => (
            <DockItem
              key={item.href}
              {...item}
              isActive={router.pathname === item.href}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 