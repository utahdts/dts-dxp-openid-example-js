import { useEffect, useState } from "react";

export default function useIsSecure() {
    const [isSecure, setIsSecure] = useState(false);

    const jwt = window.location.hash.split('id_token=').pop();

    if (!jwt) {
        window.location = 'https://login.dev.utah.gov:443/sso/oauth2/authorize?' +
            'client_id=ADD_YOURS_HERE' +
            '&response_type=id_token' +
            '&scope=openid profile directory email' +
            '&nonce=testitout' +
            '&redirect_uri=' + encodeURIComponent('http://localhost:3000');
    }

    useEffect(() => {
        if (jwt && !isSecure) {
            setIsSecure(true);
        }
        if (!jwt && isSecure) {
            setIsSecure(false);
        }
    }, [isSecure, jwt]);

    return isSecure;
};
