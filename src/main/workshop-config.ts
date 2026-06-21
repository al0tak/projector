import { app } from 'electron'
import { existsSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

type Config = {
  workshopPath: string | null
}

const configPath = (): string => join(app.getPath('userData'), 'config.json')

const readConfig = (): Config => {
  const path = configPath()
  if (!existsSync(path)) return { workshopPath: null }
  try {
    return JSON.parse(readFileSync(path, 'utf8')) as Config
  } catch {
    return { workshopPath: null }
  }
}

export const getWorkshopPath = (): string | null => readConfig().workshopPath

export const setWorkshopPath = (workshopPath: string): void => {
  writeFileSync(configPath(), JSON.stringify({ workshopPath }, null, 2))
}
