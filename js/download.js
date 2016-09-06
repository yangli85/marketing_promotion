function plat_form() {
    var u = navigator.userAgent, app = navigator.appVersion;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1)
        return "android"
    else if (u.indexOf('iPhone') > -1)
        return "iphone"
    else if (u.indexOf('iPad') > -1)
        return "ipad"
    else
        return "unknow"
}
function download_url(plat_form) {
    if (plat_form == "android")
        return base_url + "apk/my_designers_1.apk";
    else if (plat_form == "iphone")
        return "https://itunes.apple.com/cn/app/wo-de-she-ji-shi/id1100090041?mt=8";
    else if (plat_form == "ipad")
        return false;
    else
        return false
}

function download_state(c_id, mobile_type, href) {
    var args = {
        c_id: c_id
    }
    var posting = $.post(api_base_url + "commissioner/update_be_scanned_times", args);
    posting.done(function (data) {
        location.href = href;
    });
}

function get_request() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
        }
    }
    return theRequest;
}