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

## Architecture
- Individual HTML modules are READ ONLY, integration happens in app.html
- storage.js utility for localStorage (not wired into modules yet, inlined in app.html)
- Supabase or Firebase TBD for cloud persistence
- audio.mp3 downloaded via yt-dlp

## File Structure
- dot-grid.html: 9-dot formation editor
- audio-player.html: drag-and-drop audio player
- formation-bar.html: timeline with formation blocks + X-crossover transitions
- animation.html: linear interpolation demo
- app.html: integrated app combining all modules
- storage.js: localStorage utility
- audio.mp3: reference audio
