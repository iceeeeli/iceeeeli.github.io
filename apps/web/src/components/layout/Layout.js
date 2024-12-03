import React from 'react'
import { MenuBar } from './MenuBar'
import { Dock } from './Dock'

export function Layout({ children }) {
  return (
    <div className="min-h-screen desktop-bg">
      <MenuBar />
      <main className="pt-7 pb-24">
        {children}
      </main>
      <Dock />
      
      {/* Desktop Icons */}
      <div className="fixed top-12 left-6 space-y-6">
        {/* <DesktopIcon icon="💾" label="我的文档" />
        <DesktopIcon icon="🖼️" label="图片" />
        <DesktopIcon icon="📁" label="下载" /> */}
      </div>
    </div>
  )
}

function DesktopIcon({ icon, label }) {
  return (
    <div className="group flex flex-col items-center gap-1 cursor-default">
      <div className="w-16 h-16 flex items-center justify-center text-3xl">
        {icon}
      </div>
      <div className="px-2 py-0.5 rounded text-sm text-white bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
        {label}
      </div>
    </div>
  )
} 