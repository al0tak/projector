import { useState } from 'react'
import type React from 'react'

type LandingScreenProps = {
  onReady: (path: string) => void
}

export const LandingScreen: React.FC<LandingScreenProps> = ({ onReady }) => {
  const [error, setError] = useState<string | null>(null)

  const handle = async (action: typeof window.api.workshop.create): Promise<void> => {
    const result = await action()
    if (!result) return
    if ('error' in result) {
      setError('That folder is not a workshop.')
      return
    }
    setError(null)
    onReady(result.path)
  }

  return (
    <div>
      <button onClick={() => handle(window.api.workshop.create)}>
        Create new workshop
      </button>
      <button onClick={() => handle(window.api.workshop.open)}>
        Open existing workshop
      </button>
      {error && <p>{error}</p>}
    </div>
  )
}
