const path = require('path');
const fs = require('fs-extra');

const webRootPath = path.resolve(path.join(__dirname, '..'));
const houseCarlPath = path.resolve(path.join(webRootPath, '..', 'housecarl'));

if (!fs.existsSync(houseCarlPath)) {
  throw new Error('Cannot find housecarl');
}

const fromBuildPath = path.join(webRootPath, 'build');
const toBuildPath = path.join(houseCarlPath, 'housecarl', 'library', 'server', 'build');

if (!fs.existsSync(fromBuildPath)) {
  throw new Error(`Cannot find build path: ${fromBuildPath}`);
}

if (fs.existsSync(toBuildPath)) {
  console.log('\nEmptying contents of directory:', toBuildPath);
} else {
  console.log('\nCreating directory:', toBuildPath);
}

// this creates the directory if it doesn't already exist
fs.emptyDirSync(toBuildPath);

console.log('\nCopying housecarl web app to housecarl cli...\n\n\tFrom:', fromBuildPath, '\n\n\tTo:', toBuildPath);

fs.copySync(fromBuildPath, toBuildPath);

console.log('\nSuccess!');
