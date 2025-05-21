const fs = require('fs');

fs.readFile('welcome.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data.toString());
}