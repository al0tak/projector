import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('api', {
  workshop: {
    create: () => ipcRenderer.invoke('workshop:create'),
    open: () => ipcRenderer.invoke('workshop:open'),
    current: () => ipcRenderer.invoke('workshop:current')
  }
})
