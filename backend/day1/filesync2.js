const { myReadFile, myWriteFile, myAppendFile, mydelete, username } = require("./fileSync1");

const data = "MY FSD CLASS";
myReadFile();
// Write to file
myWriteFile(data);

// Read file
myReadFile();

// Append to file
myAppendFile(data);

// Read file again
myReadFile();

// Delete file
mydelete("dummy.txt");

console.log("User name =", username);
