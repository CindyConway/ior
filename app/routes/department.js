
function setup(app) {
    app.get('/department', getDepartments);
}

function getDepartments(req, res) {
    var dept = [
                {"id":"121", "name":"Animal Control"},
                {"id":"122", "name":"Airport Commission"},
                {"id":"123", "name":"Arts Commission"},
                {"id":"124", "name":"Asian Art Commission"},
                {"id":"125", "name":"Board of Supervisors"},
                {"id":"126", "name":"Building Inspection"},
                {"id":"127", "name":"Consumer Assurance"},
                {"id":"128", "name":"City Attorney"},
                {"id":"129", "name":"City Hall"},
                {"id":"130", "name":"Civil Service Commission"},
                {"id":"131", "name":"Controller"},
                {"id":"132", "name":"County Clerk"},
                {"id":"133", "name":"District Attorney"},
                {"id":"134", "name":"Emergency Communication"},
                {"id":"135", "name":"Election"},
                {"id":"121", "name":"Animal Control"},
                {"id":"122", "name":"Airport Commission"},
                {"id":"123", "name":"Arts Commission"},
                {"id":"124", "name":"Asian Art Commission"},
                {"id":"125", "name":"Board of Supervisors"},
                {"id":"126", "name":"Building Inspection"},
                {"id":"127", "name":"Consumer Assurance"},
                {"id":"128", "name":"City Attorney"},
                {"id":"129", "name":"City Hall"},
                {"id":"130", "name":"Civil Service Commission"},
                {"id":"131", "name":"Controller"},
                {"id":"132", "name":"County Clerk"},
                {"id":"133", "name":"District Attorney"},
                {"id":"134", "name":"Emergency Communication"},
                {"id":"135", "name":"Election"},
                {"id":"121", "name":"Animal Control"},
                {"id":"122", "name":"Airport Commission"},
                {"id":"123", "name":"Arts Commission"},
                {"id":"124", "name":"Asian Art Commission"},
                {"id":"125", "name":"Board of Supervisors"},
                {"id":"126", "name":"Building Inspection"},
                {"id":"127", "name":"Consumer Assurance"},
                {"id":"128", "name":"City Attorney"},
                {"id":"129", "name":"City Hall"},
                {"id":"130", "name":"Civil Service Commission"},
                {"id":"131", "name":"Controller"},
                {"id":"132", "name":"County Clerk"},
                {"id":"133", "name":"District Attorney"},
                {"id":"134", "name":"Emergency Communication"},
                {"id":"135", "name":"Election"}
            ];
    res.json(dept);
}

module.exports = setup;