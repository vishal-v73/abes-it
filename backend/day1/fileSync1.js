const fs = require("node:fs");

// Read file
function myReadFile() {
    try {
        const data = fs.readFileSync("dummy.txt", "utf-8");
        console.log("File Data:", data);
    } catch (err) {
        console.log("File Reading error:", err.message);
    }
}

// Write file
const myWriteFile = (data) => {
    try {
        fs.writeFileSync("dummy.txt", data);
        console.log("Successfully written");
    } catch (err) {
        console.log("File writing error:", err.message);
    }
};

// Append file
function myAppendFile(data) {
    try {
        fs.appendFileSync("dummy.txt", data);
        console.log("APPENDED DATA SUCCESSFULLY");
    } catch (err) {
        console.log("File appending error:", err.message);
    }
}

// Delete file
const mydelete = (filename) => {
    try {
        fs.unlinkSync(filename);
        console.log("Successfully Deleted");
    } catch (err) {
        console.log("File deletion error:", err.message);
    }
};


module.exports = {
    myReadFile: myReadFile,
    myWriteFile: myWriteFile,
    myAppendFile: myAppendFile,
    mydelete: mydelete, 
    username: "vishal",
};
