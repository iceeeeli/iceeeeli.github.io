import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LaunchScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [showStartup, setShowStartup] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setShowStartup(false)
            setTimeout(onComplete, 1000)
          }, 500)
          return 100
        }
        return prev + 1
      })
    }, 30)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {showStartup && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 startup-bg"
        >
          {/* macOS 风格的启动界面 */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <div className="w-24 h-24 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                <span className="text-4xl">🍎</span>
              </div>
            </motion.div>

            {/* 进度条 */}
            <div className="w-64">
              <div className="h-0.5 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-white"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 