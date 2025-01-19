const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const filesInFolder = fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true}, (err, files) => {
    if (err) {
      console.error('Ошибка при чтении директории:', err);
      return;
    }
    for (const file of files) {
        if (file.isFile()) {
            const fileName = file.name;
            const fileExtension = path.extname(file.name);
            const fullPath = path.join(__dirname, 'secret-folder', file.name)
            console.log(fullPath);
            const fileStats = fs.stat(fullPath, (err, stats) => {
                if (err) {
                  console.error(`Ошибка: ${err.message}`);
                }
                console.log(`${fileName} - ${fileExtension} - ${stats.size / 1000} кБ`);
              });
        }
    }
  });

