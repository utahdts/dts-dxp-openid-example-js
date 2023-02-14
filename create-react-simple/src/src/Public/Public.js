import gotoPage from "../util/gotoPage";

const propTypes = {};
const defaultProps = {};

function Public() {

  return (
    <div>
      Public Page
      <br />
      <button onClick={() => window.location = gotoPage('secure')}>Go Secure</button>
    </div>
  );
}

Public.propTypes = propTypes;
Public.defaultProps = defaultProps;

export default Public;
