

function GetToken() {
    return new Promise(function(resolve, reject) {
        request('https://merlin.mobius.umsystem.edu/iii/sierra-api/v4/token', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(body);
            } else {
                reject(response);
            }
        })
    })
}
module.exports = GetToken;