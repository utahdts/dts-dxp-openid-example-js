document.getElementById('log-me-in').onclick = e => {
    window.location = 'https://login.dev.utah.gov:443/sso/oauth2/authorize?' + 
        'client_id=add_your_own' + 
        '&response_type=id_token' + 
        '&scope=openid' + 
        // add these for more info! ' profile directory email' + 
        '&nonce=testitout' + 
        '&20profile%20email%20directory' + 
        '&redirect_uri=' + encodeURIComponent('http://localhost/openid-example/plain-js/index.html');
};

// https://stackoverflow.com/questions/38552003/how-to-decode-jwt-token-in-javascript-without-using-a-library
function parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

const jwt = window.location.hash.split('=').pop();
if (jwt) {
    const parsedJwt = parseJwt(jwt);
    console.log(parsedJwt);
    if (parsedJwt.nonce !== 'testitout') {
        alert('you have a bad nonce!');
    }


    // store in local storage...
    // send to server: header => 'Bearer: ' + jwt
    /*
        fetch(
            'https://myurl.utah.gov', 
            {
                method: "GET",
                headers: {
                    "Content-type": "application/json;charset=UTF-8",
                    "Authorization": "Bearer " + jwt
                }
            }
        )
        .then(response => response.json()) 
        .then(json => console.log(json)); 
        .catch(err => console.log(err));

    */
}
