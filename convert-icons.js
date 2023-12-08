const fs = require('fs');
const path = require('path');

// Define the path to the icons folder
const iconsFolderPath = './src/assets/icons';
const iconFolderStaticPath = 'assets/icons';

const capitalizeString = str => {
  const temp = str.split('');
  temp[0] = temp[0].toUpperCase();
  return temp.join('');
};

const deleteSpecificSymbols = str => {
  const specificSymbols = ['-', '_', ' '];
  let arrString = str.trim().split('');
  arrString = arrString.map((letter, index) => {
    if (specificSymbols.includes(letter)) {
      arrString[index + 1] = arrString[index + 1].toString().toUpperCase();
      return '';
    }

    return letter;
  });

  return arrString.join('');
};

// Read the contents of the icons folder
fs.readdir(iconsFolderPath, (err, files) => {
  if (err) {
    console.error('Error reading icons folder:', err);
    return;
  }

  const iconEnum = {};

  // Iterate through the SVG files and create the enum
  files.forEach(fileName => {
    if (path.extname(fileName) === '.svg') {
      const iconNameCapitalized = capitalizeString(path.basename(fileName, '.svg'));
      const iconName = deleteSpecificSymbols(iconNameCapitalized);
      iconEnum[iconName] = path.join(iconFolderStaticPath, fileName);
    }
  });

  // Convert the enum to a JSON string
  const enumJson = JSON.stringify(iconEnum, null, 4).replaceAll(':', ' = ');

  // Convert JS Object to Enum
  const enumFileContent = `export enum IconEnum ${enumJson}`;

  // Write the enum to a file (e.g., icons.js)
  fs.writeFile('./src/app/common/enums/icons.enum.ts', enumFileContent, writeErr => {
    if (writeErr) {
      console.error('Error writing enum to file:', writeErr);
      return;
    }
    console.log('Enum successfully generated and saved to @core/icons.enum.ts');
  });
});
