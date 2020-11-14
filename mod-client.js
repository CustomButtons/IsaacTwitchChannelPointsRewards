const fs = require('fs');
const config = require('./config.json');
console.log('config', config);

if (fs.existsSync(config.commandListFile)) {
    const commandListFileContent = fs.readFileSync(config.commandListFile, 'utf8');
    const commandArray = commandListFileContent.split('\r\n');
    setInterval(() => {
        const randomCommand = commandArray[getRandomInt(0, commandArray.length)];
        console.log('randomCommand', randomCommand);
        fs.appendFileSync(config.dispatchFile, `${randomCommand}\r\n`);
    }, 5000);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
