
function setup(app) {
    app.post('/login', postLogin);
}

function postLogin(req, res) {
    var user = {"id":"123", "user":"cindy", "role":"admin"};
    res.json(user);
}

module.exports = setup;