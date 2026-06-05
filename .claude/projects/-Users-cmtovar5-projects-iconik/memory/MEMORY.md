# Iconik Project Memory

## Project Overview
- Dance formation choreography tool
- Static frontend (HTML/CSS/JS), no frameworks
- Modules: dot-grid, audio-player, formation-bar, animation, integrated app.html
- 9 dots representing dancers, drag-to-reposition on grid

## User Info
- GitHub: https://github.com/Cmtovar (username: Cmtovar)
- Prefers background agents for long-running tasks
- Prefers localStorage auto-save (no export/import buttons unless asked)
- Wants CI/CD pipeline with version releases on GitHub Pages
- Dance group gets read-only view, user is sole editor for now

## User Preferences
- Commit at EVERY step of progress, not just milestones
- Use agents for fixes and long tasks
- Don't integrate modules into app.html until the module itself is ready
- Separate mm:ss inputs (no colon typing)

## Architecture
- Individual HTML modules are READ ONLY during integration
- Integration happens in app.html
- storage.js utility for localStorage (not wired yet, inlined in app.html)
- Firebase for cloud persistence (CLI installed, needs reauth)

## File Structure
- dot-grid.html: 9-dot formation editor
- audio-player.html: drag-and-drop audio player
- formation-bar.html: timeline with formation blocks + X-crossover transitions
- animation.html: linear interpolation demo
- app.html: integrated app combining all modules
- storage.js: localStorage utility
- audio.mp3: reference audio

## Formation Bar TODO
- Sequential formation labels (1,2,3 for in-place only)
- Drag marker boundaries to adjust timing
- Scroll bar for panning
