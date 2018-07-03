// Hold HTTP requests
const database = ['mgid.com','adnetwork.vn','googlesyndication.com','admicro.vn','innity.net', 'steepto.com', 'googleusercontent.com','blueserving.com','anthill.vn','admicro.vn', 'gammaplatform.com', 'n176adserv.com', 'innity.com', 'ants.vn', 'an.facebook.com/', 'serving-sys.com'];
let length = database.length;
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        for (var i = 0; i < length; i++){
            if (details.url.indexOf(database[i]) != -1 ) {
                console.log(details.url)
                chrome.notifications.create({
                    "type": "basic",
                    "title": "Ads Blocked",
                    "iconUrl": "icon/alert.png",
                    "message": "Ads have been blocked"
                });
                return {cancel: true};
            }}  
    }, 
    { urls: ["<all_urls>"]}, 
    ["blocking"]
);
