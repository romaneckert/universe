const path = require('path');
const rootPath = path.dirname(require.main.filename);
const config = require('../../config');

module.exports = (req, res, next) => {

    let countryCode = req.params.country;
    let languageCode = req.params.language;

    if('object' === typeof config.locales[countryCode] && 'object' === typeof config.locales[countryCode][languageCode]) {
        return res.sendFile(path.join(rootPath, '/../', 'public', countryCode, languageCode, 'index.html'));
    }

    next();
};
