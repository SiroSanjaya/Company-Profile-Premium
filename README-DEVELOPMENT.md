# Development Guide - React JSX Setup

## 🎯 Mengatur Default JavaScript JSX

### 1. VS Code Extensions yang Diperlukan

Install extension berikut di VS Code:

- **ES7+ React/Redux/React-Native snippets**
- **Prettier - Code formatter**
- **ESLint**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**

### 2. Konfigurasi File yang Sudah Dibuat

#### `.vscode/settings.json`

- Mengatur semua file `.js` dan `.jsx` sebagai JavaScript React
- Auto-format saat save
- File nesting untuk organisasi yang lebih baik
- Exclude folder yang tidak perlu

#### `.prettierrc`

- Format kode yang konsisten
- Single quotes untuk string
- Tab width 2 spaces
- Print width 80 characters

#### `.eslintrc.json`

- Aturan linting untuk React
- Warning untuk unused variables
- Error untuk prefer const

#### `jsconfig.json`

- Konfigurasi JavaScript modern
- Support untuk JSX
- Module resolution yang benar

### 3. Cara Menggunakan

#### Membuat Component Baru

```bash
# Buat file baru dengan extension .jsx
touch src/components/NewComponent.jsx
```

#### Template Component JSX

```jsx
import React from 'react';

const NewComponent = () => {
  return (
    <div className="container">
      <h1>Hello World</h1>
    </div>
  );
};

export default NewComponent;
```

### 4. Shortcuts VS Code

#### Snippets yang Berguna

- `rafce` → React Arrow Function Component Export
- `rfce` → React Function Component Export
- `rcc` → React Class Component
- `rccp` → React Class Component with PropTypes

#### Keyboard Shortcuts

- `Ctrl + Shift + P` → Command Palette
- `Ctrl + ,` → Settings
- `Ctrl + K, Ctrl + F` → Format Document
- `Ctrl + Shift + I` → Format Selection

### 5. Best Practices

#### Naming Convention

- Components: PascalCase (e.g., `UserProfile.jsx`)
- Files: PascalCase untuk components, camelCase untuk utilities
- Folders: kebab-case atau camelCase

#### File Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components
│   └── features/     # Feature-specific components
├── pages/            # Page components
├── hooks/            # Custom hooks
├── utils/            # Utility functions
├── styles/           # Global styles
└── assets/           # Images, icons, etc.
```

#### Import/Export

```jsx
// ✅ Good
import React from 'react';
import { motion } from 'framer-motion';

// ✅ Good
export default ComponentName;

// ❌ Avoid
export { ComponentName };
```

### 6. Troubleshooting

#### Jika file masih "acak acakan":

1. Restart VS Code
2. Reload window: `Ctrl + Shift + P` → "Developer: Reload Window"
3. Check file associations di settings

#### Jika JSX tidak dikenali:

1. Pastikan file extension `.jsx`
2. Check `jsconfig.json` sudah benar
3. Install extension React/Redux snippets

### 7. Hot Reload

Aplikasi akan auto-reload saat ada perubahan file. Pastikan:

- `npm start` sudah running
- File disimpan dengan `Ctrl + S`
- Browser terbuka di `http://localhost:3000`

### 8. Debugging

- Install React Developer Tools di browser
- Gunakan `console.log()` untuk debugging
- Check browser console untuk errors

## 🚀 Tips Tambahan

1. **Gunakan Snippets**: VS Code snippets akan mempercepat coding
2. **Auto-import**: VS Code akan auto-import components yang digunakan
3. **IntelliSense**: Dapatkan suggestions untuk props dan methods
4. **Error Highlighting**: ESLint akan highlight errors secara real-time

Dengan setup ini, coding React dengan JavaScript JSX akan lebih terorganisir dan tidak "acak acakan" lagi! 🎉
