// storage.js — Shared persistence utility for iconik modules
// Each module uses a unique storageKey to avoid collisions.

const IconikStorage = {
  // Auto-save data to localStorage
  save(key, data) {
    try {
      localStorage.setItem(`iconik_${key}`, JSON.stringify(data));
    } catch (e) {
      console.warn('localStorage save failed:', e);
    }
  },

  // Load data from localStorage, returns null if not found
  load(key) {
    try {
      const raw = localStorage.getItem(`iconik_${key}`);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      console.warn('localStorage load failed:', e);
      return null;
    }
  },

  // Export data as a downloadable JSON file
  exportJSON(key, data, filename) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || `iconik_${key}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  },

  // Import data from a JSON file, returns a Promise with parsed data
  importJSON() {
    return new Promise((resolve, reject) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = '.json';
      input.addEventListener('change', () => {
        const file = input.files[0];
        if (!file) return reject(new Error('No file selected'));
        const reader = new FileReader();
        reader.onload = () => {
          try {
            resolve(JSON.parse(reader.result));
          } catch (e) {
            reject(new Error('Invalid JSON file'));
          }
        };
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsText(file);
      });
      input.click();
    });
  },

  // Create export/import buttons and append to a container element
  // onChange is called with the imported data
  createUI(container, key, getDataFn, onImportFn) {
    const wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;gap:6px;';

    const btnExport = document.createElement('button');
    btnExport.textContent = 'Export';
    btnExport.addEventListener('click', () => {
      IconikStorage.exportJSON(key, getDataFn());
    });

    const btnImport = document.createElement('button');
    btnImport.textContent = 'Import';
    btnImport.addEventListener('click', async () => {
      try {
        const data = await IconikStorage.importJSON();
        onImportFn(data);
      } catch (e) {
        console.warn('Import cancelled or failed:', e.message);
      }
    });

    wrap.appendChild(btnExport);
    wrap.appendChild(btnImport);
    container.appendChild(wrap);
    return wrap;
  }
};

// Make available as module or global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IconikStorage;
}
