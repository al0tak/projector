export type WorkshopResult = { path: string } | { error: 'not-a-workshop' } | null

export type Api = {
  workshop: {
    create: () => Promise<WorkshopResult>
    open: () => Promise<WorkshopResult>
    current: () => Promise<WorkshopResult>
  }
}

declare global {
  interface Window {
    api: Api
  }
}
