const fs = require('fs');
const path = require('path');

const fsExtra = {
  unlinkSync(p) {
    return fs.unlinkSync(p);
  },
  existsSync(p) {
    return fs.existsSync(p);
  },
  readdirSync(dir) {
    return fs.readdirSync(dir);
  },
  mkdirSync(dir) {
    if (fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      return;
    }
    dir.split(path.sep).forEach((part, index) => {
      if (!part) return;
      const partialPath = dir
        .split(path.sep)
        .slice(0, index + 1)
        .join(path.sep);
      if (!fs.existsSync(partialPath)) {
        fs.mkdirSync(partialPath, { recursive: true });
      }
    });
  },
  readFileSync(file) {
    return fs.readFileSync(file, 'utf8');
  },
  writeFileSync(file, content) {
    if (!fs.existsSync(path.dirname(file))) {
      fsExtra.mkdirSync(path.dirname(file));
    }
    return fs.writeFileSync(file, content, {});
  },
  copyFileSync(src, dest) {
    if (!fs.existsSync(path.dirname(dest))) {
      fsExtra.mkdirSync(path.dirname(dest));
    }
    return fs.copyFileSync(src, dest);
  },
};

module.exports = fsExtra;
