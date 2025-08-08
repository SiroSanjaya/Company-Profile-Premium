# 🚀 Line Endings Guide

## Masalah yang Sering Terjadi

File dengan line endings yang salah (CRLF di Windows vs LF di Unix) bisa menyebabkan:

- ESLint errors dengan pesan "Delete `␍`"
- Prettier formatting issues
- Git conflicts
- Compilation errors

## ✅ Solusi Permanen

### 1. **Git Configuration**

```bash
# Set Git untuk tidak auto-convert line endings
git config --global core.autocrlf false
```

### 2. **File .gitattributes**

Sudah dibuat dengan konfigurasi yang benar untuk enforce LF line endings.

### 3. **VS Code Settings**

Sudah dikonfigurasi di `.vscode/settings.json`:

- `"files.eol": "\n"` - Force LF line endings
- `"editor.formatOnSave": true` - Auto format saat save
- `"editor.codeActionsOnSave": { "source.fixAll.eslint": true }` - Auto fix ESLint

### 4. **Prettier Configuration**

Sudah dikonfigurasi di `.prettierrc`:

- `"endOfLine": "lf"` - Force LF line endings

## 🛠️ Scripts yang Tersedia

### **Fix Line Endings Manual**

```bash
npm run fix-line-endings
```

### **Setup Project (Recommended)**

```bash
npm run setup
```

_Ini akan:_

1. Fix semua line endings
2. Format semua file dengan Prettier
3. Fix semua ESLint issues

### **Development Workflow**

```bash
npm run predev
```

_Sebelum mulai coding, jalankan ini untuk memastikan semua file sudah benar._

## 🔧 Cara Pakai

### **Untuk Development Harian:**

1. **VS Code akan auto-fix** saat save (karena settings sudah dikonfigurasi)
2. **Jika ada error**, jalankan: `npm run setup`
3. **Sebelum commit**, jalankan: `npm run predev`

### **Untuk Team Collaboration:**

1. **Clone project baru** → `npm run setup`
2. **Setelah pull changes** → `npm run fix-line-endings`
3. **Sebelum push** → `npm run predev`

## 🚨 Troubleshooting

### **Jika masih ada error line endings:**

```bash
# Fix semua line endings
npm run fix-line-endings

# Format dan lint
npm run format
npm run lint:fix

# Atau langsung
npm run setup
```

### **Jika VS Code tidak auto-format:**

1. Install extension: **Prettier** dan **ESLint**
2. Restart VS Code
3. Pastikan settings di `.vscode/settings.json` sudah benar

### **Jika Git masih bermasalah:**

```bash
# Reset Git attributes
git add .gitattributes
git commit -m "Update .gitattributes"

# Re-checkout semua file
git rm --cached -r .
git reset --hard
```

## 📋 Checklist

- [ ] Git config: `core.autocrlf false`
- [ ] File `.gitattributes` ada dan benar
- [ ] VS Code settings dikonfigurasi
- [ ] Prettier config: `"endOfLine": "lf"`
- [ ] Scripts di `package.json` tersedia
- [ ] Team members tahu cara pakai scripts

## 🎯 Keuntungan Setup Ini

1. **No more line ending errors** 🎉
2. **Auto-format on save** di VS Code
3. **Consistent code style** di semua file
4. **Easy team collaboration**
5. **Prevent future issues**

---

**Note:** Script `fix-line-endings.js` akan otomatis fix semua file dengan ekstensi `.js`, `.jsx`, `.ts`, `.tsx`, `.css`, `.scss`, `.html`, `.json`, `.md`.
