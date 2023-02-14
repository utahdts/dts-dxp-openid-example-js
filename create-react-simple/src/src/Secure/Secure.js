import gotoPage from "../util/gotoPage";
import useIsSecure from "../util/useIsSecure";

const propTypes = {};
const defaultProps = {};

function Secure() {
    const isSecure = useIsSecure();
    return (
        <div>
            {isSecure ? <>
                Secured Page<br />
                <button onClick={() => window.location = 'https://login.dev.utah.gov:443/sso/UI/Logout?goto=' + encodeURIComponent('http://localhost:3000')}>Log Out</button>
                <br />
            </> : 'Not Allowed'}

            <button onClick={() => window.location = gotoPage('home')}>Go Home</button>
        </div>
    );
}

Secure.propTypes = propTypes;
Secure.defaultProps = defaultProps;

export default Secure;
