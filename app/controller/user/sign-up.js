const core = require('../../core');

module.exports = (req, res) => {

    console.log(req.body.password);

    core.service.bcrypt.hash(req.body.password, 10, (err, hash) => {

        if (err) {
            console.log(err);
            return res.json({
                errors: {
                    hashPassword: true
                }
            });
        }

        var user = new core.model.user({
            email: req.body.email,
            password: hash,
            role: 'user'
        });

        user.save((err) => {
            if (err) {
                return res.json({
                    errors: {
                        saveUser: true
                    }
                });
            }
            core.service.accessToken.addCookie(user, res);
            return res.json({
                errors: {}
            });
        });
    });
}
