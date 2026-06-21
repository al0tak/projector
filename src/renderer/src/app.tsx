import { useEffect, useState } from 'react'
import type React from 'react'
import { LandingScreen } from './components/landing-screen'

export const App: React.FC = () => {
  const [workshopPath, setWorkshopPath] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.api.workshop.current().then((result) => {
      if (result && 'path' in result) setWorkshopPath(result.path)
      setLoading(false)
    })
  }, [])

  if (loading) return null
  if (!workshopPath) return <LandingScreen onReady={setWorkshopPath} />
  return <p>Workshop: {workshopPath}</p>
}
