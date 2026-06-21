import { ipcMain } from 'electron'
import { createWorkshop, getCurrentWorkshop, openWorkshop } from './workshop'

export const registerWorkshopIpc = (): void => {
  ipcMain.handle('workshop:create', () => createWorkshop())
  ipcMain.handle('workshop:open', () => openWorkshop())
  ipcMain.handle('workshop:current', () => getCurrentWorkshop())
}
