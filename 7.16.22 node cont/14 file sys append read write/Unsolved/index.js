//              **** done

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success')
//   );

// fs.readFile('log.txt', 'utf8', (error, data) =>
// error ? console.error(error) : console.log(data)
// );

//        FS Append:
// importing the fs module
const fs = require('fs');

// arg 1 'log.txt' tells what file we want it to look for or create if it doesn't work
// arg 1 can also be a path, otherwize file will be in working directory
// arg 2 `${process.argv[2]}\n` defines the data to be written/appended to the file
// arg 3 is anonymous callback function that checks error conditions / tells what to return
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
// ternary: if error exists, log the error; otherwise, log provided message
  err ? console.error(err) : console.log('Commit logged!')
);

