//encoding:utf - 8
login_info = JSON.parse(localStorage.getItem("login_info"));
window.onload = function () {
    if (login_info_expired()) {
        window.location.href = base_url + "login.html"
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
function login_info_expired() {
    return (login_info == null || (new Date().getTime().toString() - login_info.updated_at) > 60 * 60 * 1000)
}