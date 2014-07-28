
function setup(app) {
    app.get('/user', getUsers);
}

function getUsers(req, res) {
    var user = {"id":"123", "role":"admin"};
    res.json(user);
}

module.exports = setup;