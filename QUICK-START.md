# 🚀 Quick Start Guide

## Instalasi & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Jalankan Aplikasi

```bash
npm start
```

Aplikasi akan terbuka di `http://localhost:3000`

### 3. Format Kode

```bash
npm run format
```

### 4. Lint Kode

```bash
npm run lint
npm run lint:fix  # Auto-fix issues
```

## 🎯 Mengatasi Masalah "Acak Acakan"

### Setup VS Code

1. Install extensions yang diperlukan:
   - ES7+ React/Redux/React-Native snippets
   - Prettier - Code formatter
   - ESLint
   - Auto Rename Tag

2. Restart VS Code setelah install extensions

3. File akan otomatis terformat saat save

### Membuat Component Baru

```bash
# Buat file dengan extension .jsx
touch src/components/NewComponent.jsx
```

### Template Component

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

## 📁 Struktur File yang Terorganisir

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components (Navbar, Footer)
│   └── sections/     # Page sections
├── pages/            # Page components
├── hooks/            # Custom hooks
├── utils/            # Utility functions
├── styles/           # Global styles
└── assets/           # Images, icons, etc.
```

## 🎨 Customization

### Mengubah Warna

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... tambah warna custom
      }
    }
  }
}
```

### Menambah Halaman Baru

1. Buat file di `src/pages/NewPage.jsx`
2. Tambah route di `src/App.js`
3. Tambah link di `src/components/Navbar.js`

## 🔧 Troubleshooting

### Error "react-scripts not found"

```bash
npm install
npm start
```

### File masih "acak acakan"

1. Restart VS Code
2. Check file associations di settings
3. Pastikan extensions sudah terinstall

### Hot reload tidak bekerja

1. Pastikan `npm start` running
2. Save file dengan `Ctrl + S`
3. Check browser console untuk errors

## 📚 Snippets Berguna

- `rafce` → React Arrow Function Component Export
- `rfce` → React Function Component Export
- `rcc` → React Class Component
- `rccp` → React Class Component with PropTypes

## 🎯 Tips Development

1. **Gunakan Snippets**: VS Code snippets akan mempercepat coding
2. **Auto-import**: VS Code akan auto-import components
3. **IntelliSense**: Dapatkan suggestions untuk props dan methods
4. **Error Highlighting**: ESLint akan highlight errors real-time
5. **Format on Save**: Kode akan otomatis terformat saat save

## 🚀 Deployment

### Build untuk Production

```bash
npm run build
```

### Deploy ke Netlify

1. Push ke GitHub
2. Connect repository di Netlify
3. Build command: `npm run build`
4. Publish directory: `build`

### Deploy ke Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

## 📞 Support

Jika ada masalah:

1. Check `README-DEVELOPMENT.md` untuk detail setup
2. Check browser console untuk errors
3. Restart development server: `npm start`

---

**Happy Coding! 🎉**
