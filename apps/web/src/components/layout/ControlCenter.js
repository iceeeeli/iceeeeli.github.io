import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ControlButton = ({ icon, label, active = false, onClick, size = 'normal' }) => {
  const sizeClasses = {
    normal: 'w-[70px] h-[70px]',
    large: 'w-[144px] h-[70px]',
    tall: 'w-[70px] h-[144px]'
  }

  return (
    <button
      onClick={onClick}
      className={`
        ${sizeClasses[size]}
        rounded-2xl flex flex-col items-center justify-center gap-1
        ${active ? 'bg-white/30' : 'bg-white/10'}
        backdrop-blur-md transition-all duration-200
        hover:bg-white/40 hover:scale-105
        border border-white/10
      `}
    >
      <span className="text-2xl">{icon}</span>
      {label && (
        <span className="text-xs text-white/80 font-medium">{label}</span>
      )}
    </button>
  )
}

const Slider = ({ icon, value, onChange }) => (
  <div className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl border border-white/10">
    <span className="text-xl text-white/80">{icon}</span>
    <input 
      type="range" 
      value={value}
      onChange={onChange}
      className="flex-1 h-1 bg-white/20 rounded-full appearance-none cursor-pointer"
    />
  </div>
)

const ControlPanel = ({ isOpen }) => {
  const [wifiOn, setWifiOn] = useState(true)
  const [bluetoothOn, setBluetoothOn] = useState(true)
  const [airplaneMode, setAirplaneMode] = useState(false)
  const [focusMode, setFocusMode] = useState(false)
  const [brightness, setBrightness] = useState(80)
  const [volume, setVolume] = useState(60)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="absolute top-8 right-2 w-[360px] p-4 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10"
        >
          {/* 顶部控制按钮组 */}
          <div className="grid grid-cols-4 gap-3 mb-3">
            <div className="col-span-2">
              <ControlButton 
                icon="📶" 
                label="Wi-Fi"
                active={wifiOn}
                onClick={() => setWifiOn(!wifiOn)}
                size="large"
              />
            </div>
            <ControlButton 
              icon="🔵" 
              label="蓝牙"
              active={bluetoothOn}
              onClick={() => setBluetoothOn(!bluetoothOn)}
            />
            <ControlButton 
              icon="✈️" 
              label="飞行模式"
              active={airplaneMode}
              onClick={() => setAirplaneMode(!airplaneMode)}
            />
          </div>

          {/* 中部控制按钮组 */}
          <div className="grid grid-cols-4 gap-3 mb-3">
            <div className="col-span-2 row-span-2">
              <ControlButton 
                icon="🎵" 
                label="正在播放"
                size="large"
                active={true}
              />
            </div>
            <ControlButton 
              icon="🌙" 
              label="专注"
              active={focusMode}
              onClick={() => setFocusMode(!focusMode)}
            />
            <ControlButton 
              icon="🎮" 
              label="游戏中心"
            />
          </div>

          {/* 亮度和音量控制 */}
          <div className="space-y-3">
            <Slider 
              icon="🔆"
              value={brightness}
              onChange={(e) => setBrightness(e.target.value)}
            />
            <Slider 
              icon="🔊"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function ControlCenter() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-white/10 transition-colors"
      >
        <span className="text-white/80 text-lg">
          {isOpen ? '✕' : ''}
        </span>
      </button>
      <ControlPanel isOpen={isOpen} />
    </div>
  )
} 