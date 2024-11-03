const fs = require('fs');
const path = require('path');

const directoryPath = '/';

const removeUnusedVars = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');

  // A lógica abaixo é uma simplificação, uma regex para encontrar variáveis não utilizadas
  // Você pode personalizar a regex de acordo com suas necessidades
  const unusedVarRegex = /const (\w+)/g;

  const unusedVars = [];
  let match;

  while ((match = unusedVarRegex.exec(content)) !== null) {
    const variable = match[1];
    if (!content.includes(variable + ' ')) {
      unusedVars.push(variable);
    }
  }

  let newContent = content;
  unusedVars.forEach((variable) => {
    const varRegex = new RegExp(`\\s*${variable}\\s*=.*?;?\\s*`, 'g');
    newContent = newContent.replace(varRegex, '');
  });

  fs.writeFileSync(filePath, newContent);
};

const traverseDirectory = (dir) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      traverseDirectory(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.ts')) {
      removeUnusedVars(filePath);
    }
  });
};

traverseDirectory(directoryPath);
