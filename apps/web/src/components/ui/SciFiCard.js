import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

export function SciFiCard({ children, className = '', onClose }) {
  const [isMaximized, setIsMaximized] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [isClosed, setIsClosed] = useState(false)

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      setIsClosed(true)
      if (onClose) onClose()
    }, 300)
  }

  const handleMinimize = () => {
    setIsMinimized(true)
  }

  const handleMaximize = () => {
    setIsMaximized(!isMaximized)
  }

  const handleDockClick = () => {
    setIsMinimized(false)
    setIsClosing(false)
  }

  if (isClosed) {
    return null
  }

  const cardContent = (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isClosing ? 0 : 1, 
        y: 0,
        scale: isMinimized ? 0.1 : 1
      }}
      className={`
        window-card rounded-lg overflow-hidden transition-all duration-300
        ${isMaximized ? 'window-maximized' : ''}
        ${isMinimized ? 'window-minimized' : ''}
        ${className}
      `}
      style={{
        ...(isMaximized ? {
          height: 'calc(100vh - 47px)', // 7px (顶部) + 40px (底部) = 47px
          top: '7px'
        } : {})
      }}
    >
      {/* 窗口标题栏 */}
      <motion.div 
        className="window-titlebar h-8 flex items-center"
        layout="position"
      >
        <div className="window-controls">
          <button 
            className="window-control window-close"
            onClick={handleClose}
            title="关闭"
          />
          <button 
            className="window-control window-minimize"
            onClick={handleMinimize}
            title="最小化"
          />
          <button 
            className="window-control window-maximize"
            onClick={handleMaximize}
            title="最大化"
          />
        </div>
      </motion.div>

      {/* 内容区域 */}
      <motion.div 
        className="p-6 overflow-auto"
        layout="position"
        style={{
          maxHeight: isMaximized ? 'calc(100vh - 87px)' : undefined // 47px + 40px (标题栏高度)
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )

  // 如果窗口被最小化，在Dock中显示一个图标
  const dockIcon = isMinimized && !isClosed && (
    <motion.div
      initial={{ scale: 0.5, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.5, y: 100 }}
      onClick={handleDockClick}
      className="cursor-pointer"
    >
      <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
        📄
      </div>
    </motion.div>
  )

  return (
    <>
      {!isMinimized && cardContent}
      {typeof window !== 'undefined' && dockIcon && createPortal(
        <div className="fixed bottom-20 right-6">
          {dockIcon}
        </div>,
        document.body
      )}
    </>
  )
} 