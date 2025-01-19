const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

stdout.write('Здравствуйте! Введите пожалуйста текст, который вы бы хотели сохранить. \nДля выхода вы можете ввести слово "exit" или использовать комбинацию клавиш: ctrl + C\n');
process.on('exit', () => stdout.write('Вы вышли из режима записи текста. Всего доброго!'));

// fs.writeFile(
//     path.join(__dirname, 'notes.txt'),
//     '',
//     (err) => {
//       if (err) throw err;
//       console.log('');
//     },
//   );

// stdin.on("data", (data) => {
//   const dataStringified = data.toString();
//   if (dataStringified.trim() === 'exit') {
//     stdout.write('Вы вышли из режима записи текста. Всего доброго!')
//     process.exit();
//   }
//   fs.appendFile(
//     path.join(__dirname, 'notes.txt'),
//     dataStringified,
//     (err) => {
//       if (err) throw err;
//       console.log('В файл notes.txt были внесены изменения');
//     },
//   );
// });

// process.on('SIGINT', () => {
//     stdout.write('Вы вышли из режима записи текста. Всего доброго!')
//     process.exit();
//   });

const output = fs.createWriteStream(path.join(__dirname, 'notes.txt'));
stdin.on("data", (data) => {
  const dataStringified = data.toString();
  if (dataStringified.trim() === 'exit') {
    stdout.write('Вы вышли из режима записи текста. Всего доброго!')
    process.exit();
  }
  output.write(data);
});

process.on('SIGINT', () => {
    stdout.write('Вы вышли из режима записи текста. Всего доброго!')
    process.exit();
  });