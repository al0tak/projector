import Database from 'better-sqlite3'
import { join } from 'path'

let connection: Database.Database | null = null

export const openUserDatabase = (workshopPath: string): Database.Database => {
  if (connection) connection.close()
  connection = new Database(join(workshopPath, 'user_data.sqlite'))
  connection.exec(
    'CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY, value TEXT)'
  )
  return connection
}
