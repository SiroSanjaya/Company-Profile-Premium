# Formatting Guide - Premium React Template

## 🎯 Tujuan

Guide ini dibuat untuk mencegah error ESLint Prettier yang sering muncul saat development.

## 🚀 Script yang Tersedia

### Format & Lint

```bash
# Format semua file dengan Prettier
npm run format

# Cek format tanpa mengubah file
npm run format:check

# Jalankan ESLint
npm run lint

# Jalankan ESLint dengan auto-fix
npm run lint:fix

# Jalankan format + lint fix
npm run fix-all

# Cek format + lint tanpa mengubah file
npm run check-all
```

### Development

```bash
# Start development server dengan auto-format
npm run dev

# Start development server biasa
npm start

# Setup awal (format + lint + fix line endings)
npm run setup
```

## 🔧 Konfigurasi

### Prettier (.prettierrc)

- `printWidth`: 80 karakter per baris
- `tabWidth`: 2 spasi
- `singleQuote`: true (gunakan single quote)
- `trailingComma`: "es5"
- `endOfLine`: "lf" (Linux/Mac line endings)

### ESLint (.eslintrc.js)

- Extends dari `react-app` dan `react-app/jest`
- Warning untuk unused variables
- Auto-fix untuk formatting issues

### VSCode Settings (.vscode/settings.json)

- Format on save otomatis
- ESLint auto-fix on save
- Prettier sebagai default formatter

### EditorConfig (.editorconfig)

- Konsistensi formatting di semua editor
- 2 spasi untuk indent
- LF line endings

## 📝 Cara Penggunaan

### 1. Sebelum Development

```bash
npm run fix-all
```

### 2. Saat Development

```bash
npm run dev
```

Script ini akan otomatis format dan lint sebelum start server.

### 3. Sebelum Commit

```bash
npm run check-all
```

Pastikan tidak ada formatting issues.

### 4. Jika Ada Error

```bash
npm run fix-all
```

Ini akan memperbaiki semua formatting issues.

## 🚨 Troubleshooting

### Error Prettier

Jika muncul error Prettier:

1. Jalankan `npm run format`
2. Jalankan `npm run lint:fix`
3. Atau langsung `npm run fix-all`

### Line Ending Issues

Jika ada masalah line endings:

```bash
npm run fix-line-endings
```

### VSCode Extension

Pastikan install extension:

- Prettier - Code formatter
- ESLint

## 💡 Tips

1. **Gunakan `npm run dev`** - otomatis format + lint sebelum start
2. **Format on Save** - VSCode akan otomatis format saat save
3. **Pre-commit Hook** - bisa ditambahkan untuk auto-format sebelum commit
4. **Team Consistency** - semua anggota tim gunakan konfigurasi yang sama

## 🔄 Auto-format Workflow

1. Tulis code
2. Save file (otomatis format)
3. Jalankan `npm run dev` (otomatis format + lint)
4. Commit code

Dengan workflow ini, kamu tidak akan pernah lagi mengalami error Prettier!
