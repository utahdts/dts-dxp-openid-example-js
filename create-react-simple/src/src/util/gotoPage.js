export default function gotoPage(page) {
    return window.url = window.location.protocol + "//" + window.location.host + "?page=" + page + window.location.hash;
};
