import { useState, useEffect } from 'react'
import { LaunchScreen } from '@/components/launch/LaunchScreen'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const [isLaunching, setIsLaunching] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  // 预加载资源
  useEffect(() => {
    const preloadResources = async () => {
      // 预加载图片
      const imageUrls = [
        '/images/logo.png',
        // 添加其他需要预加载的图片
      ]
      
      await Promise.all(
        imageUrls.map(url => {
          return new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = resolve
            img.onerror = reject
            img.src = url
          })
        })
      )

      // 预加载视频
      const video = document.createElement('video')
      await new Promise((resolve, reject) => {
        video.oncanplaythrough = resolve
        video.onerror = reject
        video.src = '/videos/launch.mp4'
        video.load()
      })

      setIsLoaded(true)
    }

    preloadResources()
  }, [])

  if (isLaunching) {
    return (
      <LaunchScreen 
        onComplete={() => setIsLaunching(false)} 
      />
    )
  }

  return <Component {...pageProps} />
} 