import React from 'react'
import { useRouter } from 'next/router'
import { ControlCenter } from './ControlCenter'

export function MenuBar() {
  const router = useRouter()
  const currentTime = new Date().toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit'
  })

  return (
    <div className="fixed top-0 left-0 right-0 h-7 bg-black/30 backdrop-blur-xl z-50">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left */}
        <div className="flex items-center gap-2 text-sm text-white/80">
          <span className="font-semibold">ICE</span>
          <span className="cursor-pointer hover:text-white">文件</span>
          <span className="cursor-pointer hover:text-white">编辑</span>
          <span className="cursor-pointer hover:text-white">查看</span>
          <span className="cursor-pointer hover:text-white">窗口</span>
          <span className="cursor-pointer hover:text-white">帮助</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <span>🔋 100%</span>
            <span>📶</span>
            <span>{currentTime}</span>
            <ControlCenter />
          </div>
        </div>
      </div>
    </div>
  )
} 