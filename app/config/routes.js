module.exports = {
    //admin routes
    '/api/admin/' : {
        method: 'get',
        controller: require('../controller/admin/index'),
        roles: ['admin']
    },
    // user routes
    '/api/user/' : {
        method: 'get',
        controller: require('../controller/user/overview'),
        roles: ['admin', 'user']
    },
    '/api/user/sign-up/' : {
        method: 'post',
        controller: require('../controller/user/sign-up'),
    },
    '/api/user/sign-in/' : {
        method: 'post',
        controller: require('../controller/user/sign-in'),
    },
    '/api/user/sign-out/' : {
        method: 'get',
        controller: require('../controller/user/sign-out'),
        roles: ['admin', 'user']
    },
    '/api/user/password-reset/' : {
        method: 'post',
        controller: require('../controller/user/password-reset'),
        roles: ['admin', 'user']
    },
    '*' : {
        method: 'get',
        controller: require('../controller/web/index')
    }
};
