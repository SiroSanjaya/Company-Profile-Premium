# 🛠️ Setup Guide - Mengatasi Masalah "Acak Acakan"

## ✅ Masalah yang Sudah Diatasi

### 1. Error CSS `border-border` class

- **Masalah**: Class `border-border` tidak didefinisikan di Tailwind
- **Solusi**: Diganti dengan `border-gray-200` yang sudah ada di Tailwind

### 2. Error Prettier Line Endings

- **Masalah**: CRLF vs LF line endings
- **Solusi**: Format semua file dengan `npm run format`

### 3. Konfigurasi Development Environment

- **VS Code Settings**: Auto-format dan file associations
- **ESLint**: Aturan linting yang konsisten
- **Prettier**: Format kode yang rapi

## 🚀 Langkah Setup Lengkap

### 1. Install VS Code Extensions

Buka VS Code dan install extensions berikut:

```
1. ES7+ React/Redux/React-Native snippets
2. Prettier - Code formatter
3. ESLint
4. Auto Rename Tag
5. Tailwind CSS IntelliSense
```

### 2. Restart VS Code

Setelah install extensions, restart VS Code untuk memastikan semua konfigurasi aktif.

### 3. Verifikasi Konfigurasi

File yang sudah dikonfigurasi:

- ✅ `.vscode/settings.json` - VS Code settings
- ✅ `.prettierrc` - Prettier configuration
- ✅ `.eslintrc.json` - ESLint rules
- ✅ `jsconfig.json` - JavaScript configuration

### 4. Test Setup

```bash
# Format semua file
npm run format

# Check linting
npm run lint

# Jalankan aplikasi
npm start
```

## 🎯 Cara Menggunakan JavaScript JSX

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

### Snippets Berguna

- `rafce` → React Arrow Function Component Export
- `rfce` → React Function Component Export
- `rcc` → React Class Component

## 📁 Struktur File yang Terorganisir

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/       # Layout components
│   └── sections/     # Page sections
├── pages/            # Page components
├── hooks/            # Custom hooks
├── utils/            # Utility functions
└── assets/           # Images, icons, etc.
```

## 🔧 Troubleshooting

### Jika file masih "acak acakan":

1. **Restart VS Code** - Tutup dan buka kembali
2. **Reload Window** - `Ctrl + Shift + P` → "Developer: Reload Window"
3. **Check Extensions** - Pastikan semua extensions terinstall
4. **Check File Associations** - File `.jsx` harus dikenali sebagai JavaScript React

### Jika JSX tidak dikenali:

1. Pastikan file extension `.jsx`
2. Check `jsconfig.json` sudah benar
3. Install extension React/Redux snippets

### Jika aplikasi tidak jalan:

```bash
# Install ulang dependencies
npm install

# Clear cache
npm cache clean --force

# Jalankan aplikasi
npm start
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

## 🚀 Development Workflow

### 1. Membuat Component

```bash
# Buat file baru
touch src/components/NewComponent.jsx

# Gunakan snippet
# Ketik 'rafce' dan tekan Tab
```

### 2. Format Kode

- **Auto-format**: File akan otomatis terformat saat save
- **Manual format**: `npm run format`
- **Lint fix**: `npm run lint:fix`

### 3. Hot Reload

- Aplikasi akan auto-reload saat ada perubahan
- Pastikan `npm start` running
- Save file dengan `Ctrl + S`

## 📚 Best Practices

### Naming Convention

- **Components**: PascalCase (e.g., `UserProfile.jsx`)
- **Files**: PascalCase untuk components, camelCase untuk utilities
- **Folders**: kebab-case atau camelCase

### Import/Export

```jsx
// ✅ Good
import React from 'react';
import { motion } from 'framer-motion';

// ✅ Good
export default ComponentName;

// ❌ Avoid
export { ComponentName };
```

### File Organization

- Gunakan folder yang terorganisir
- Pisahkan components berdasarkan fungsi
- Gunakan index files untuk clean imports

## 🎯 Tips Tambahan

1. **Gunakan Snippets**: VS Code snippets akan mempercepat coding
2. **Auto-import**: VS Code akan auto-import components
3. **IntelliSense**: Dapatkan suggestions untuk props dan methods
4. **Error Highlighting**: ESLint akan highlight errors real-time
5. **Format on Save**: Kode akan otomatis terformat saat save

## ✅ Checklist Setup

- [ ] Install VS Code extensions
- [ ] Restart VS Code
- [ ] Run `npm install`
- [ ] Run `npm run format`
- [ ] Run `npm run lint:fix`
- [ ] Run `npm start`
- [ ] Test membuat component baru
- [ ] Test hot reload

## 🎉 Hasil Akhir

Setelah setup ini, coding React dengan JavaScript JSX akan:

- ✅ **Tidak "acak acakan"** lagi
- ✅ **Auto-format** saat save
- ✅ **IntelliSense** yang bekerja dengan baik
- ✅ **Hot reload** yang smooth
- ✅ **Error highlighting** real-time
- ✅ **Snippets** untuk mempercepat coding

**Happy Coding! 🚀**
