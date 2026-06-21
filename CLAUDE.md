# Projector

A personal project managing desktop application that users run locally on their devices.

For the tech stack, scripts, and dependencies, see `package.json`.

## Workshop

A **workshop** is a user-chosen directory that serves as the root sandbox for everything the app does. The app only reads and writes inside the active workshop — its contents are the user's data, in plain folders and SQLite files with no proprietary format. Layout:

- `workshop/projects/` — one folder per project (e.g. `projects/my-new-app/`), each holding that project's assets and its own SQLite database.
- `workshop/user_data.sqlite` — global user settings and data, kept at the workshop root so it survives app deletion and can be migrated by copying the workshop.

The path to the active workshop is persisted outside any workshop, in Electron's `userData` directory (`config.json`), so the app reopens the last workshop on launch instead of prompting again.

## Conventions

- Keep every diff minimal.
- No comments in code. The code should be readable enough to understand without them.
- Avoid default exports; prefer named exports.
- Name files in kebab-case (e.g. `custom-component.tsx`, not `CustomComponent.tsx`). This applies to all files, including components and hooks.
- Use arrow functions, not function declarations.
- Type React components as `React.FC` (e.g. `export const App: React.FC = () => {...}`).
