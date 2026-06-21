import { dialog } from 'electron'
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { openUserDatabase } from './database'
import { getWorkshopPath, setWorkshopPath } from './workshop-config'

export type WorkshopResult = { path: string } | { error: 'not-a-workshop' } | null

const pickDirectory = async (): Promise<string | null> => {
  const result = await dialog.showOpenDialog({
    properties: ['openDirectory', 'createDirectory']
  })
  if (result.canceled || result.filePaths.length === 0) return null
  return result.filePaths[0]
}

const activate = (path: string): WorkshopResult => {
  openUserDatabase(path)
  setWorkshopPath(path)
  return { path }
}

export const createWorkshop = async (): Promise<WorkshopResult> => {
  const path = await pickDirectory()
  if (!path) return null
  mkdirSync(join(path, 'projects'), { recursive: true })
  return activate(path)
}

export const openWorkshop = async (): Promise<WorkshopResult> => {
  const path = await pickDirectory()
  if (!path) return null
  if (!existsSync(join(path, 'user_data.sqlite'))) return { error: 'not-a-workshop' }
  return activate(path)
}

export const getCurrentWorkshop = (): WorkshopResult => {
  const path = getWorkshopPath()
  if (!path || !existsSync(join(path, 'user_data.sqlite'))) return null
  return activate(path)
}
