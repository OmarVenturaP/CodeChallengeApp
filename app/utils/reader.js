const fs = require('fs');

class Reader {
    static readJSONfile(path) {
        const data = fs.readFileSync(path);
        return JSON.parse(data);
    }
}

module.exports = Reader;