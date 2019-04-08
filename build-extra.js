'use stritc'

const fs  = require('fs');
const gzipSync = require('zlib').gzipSync;

// List all files in a directory in Node.js recursively in a synchronous fashion
const walkSync = (dir, filelist) => {
  const files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(file => {
    if (file.indexOf('.') !== 0) { // Skip hidden files
      if (fs.statSync(dir + '/' + file).isDirectory()) {
        filelist = walkSync(dir + '/' + file, filelist);
      }
      else {
        filelist.push(dir + '/' + file);
      }
    }
  });
  return filelist;
};

walkSync('dist').forEach(src => {
    // Create compressed version
    if (src.match(/\.(js|css|svg|html|eot|ttf|woff|json)$/)) {
        fs.writeFileSync(src + '.gz', gzipSync(fs.readFileSync(src)));
    }
});