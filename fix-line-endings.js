const fs = require('fs');
const path = require('path');

// Function to recursively find all files
function findFiles(dir, extensions) {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      // Skip node_modules and .git
      if (file !== 'node_modules' && file !== '.git') {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else {
      // Check if file has the right extension
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });

  return results;
}

// Function to fix line endings
function fixLineEndings(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    // Replace all CRLF (\r\n) with LF (\n)
    const fixedContent = content.replace(/\r\n/g, '\n');

    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔧 Fixing line endings...\n');

const extensions = [
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.css',
  '.scss',
  '.html',
  '.json',
  '.md',
];
const files = findFiles('.', extensions);

let fixedCount = 0;
let totalCount = 0;

files.forEach(file => {
  totalCount++;
  if (fixLineEndings(file)) {
    fixedCount++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Total files checked: ${totalCount}`);
console.log(`   Files fixed: ${fixedCount}`);
console.log(`   Files unchanged: ${totalCount - fixedCount}`);

if (fixedCount > 0) {
  console.log('\n🎉 Line endings have been fixed!');
} else {
  console.log('\n✨ All files already have correct line endings!');
}
