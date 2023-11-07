// exp-10  Write a program to implement file system in Node.js
const fs = require("fs");
const path = require("path"); // Use the 'path' module to handle paths

// Define the directory and file paths
const dirpath = path.join(__dirname, 'P');
const filepath = path.join(dirpath, 'sample.txt');

console.log(__dirname);

// Check if the directory exists, and create it if it doesn't
if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath);
}

// Write to the file 'sample.txt'
fs.writeFileSync(filepath, "This is a sample file created");

// Read the content of 'sample.txt' and log it
fs.readFile(filepath, 'utf-8', (err, data) => {
    if (!err) {
        console.log(data);
    } else {
        console.error(err);
    }
});

// Append to the file 'sample.txt'
fs.appendFile(filepath, "\nTo read and append something to these files", (err) => {
    if (!err) {
        console.log("sample.txt file is updated");
    } else {
        console.error(err);
    }
});

// Rename 'sample.txt' to 'example.txt'
fs.rename(filepath, path.join(dirpath, 'example.txt'), (err) => {
    if (!err) {
        console.log("sample.txt file is renamed");
    } else {
        console.error(err);
    }
});

// Delete 'example.txt'
fs.unlink(path.join(dirpath, 'example.txt'), (err) => {
    if (!err) {
        console.log("example.txt file is deleted");
    } else {
        console.error(err);
    }
});
