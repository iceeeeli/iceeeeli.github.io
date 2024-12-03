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
    </div>
  )
} 