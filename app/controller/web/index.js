const path = require('path');
const rootPath = path.dirname(require.main.filename);
const pathToIndex = path.join(rootPath, '/../', 'public', 'index.html');
module.exports = (req, res) => {
    return res.sendFile(pathToIndex);
};
