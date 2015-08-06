cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.cordova.plugins.sms/www/sms.js",
        "id": "com.cordova.plugins.sms.Sms",
        "clobbers": [
            "window.sms"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.calendar/www/Calendar.js",
        "id": "nl.x-services.plugins.calendar.Calendar",
        "clobbers": [
            "Calendar"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.calendar/test/tests.js",
        "id": "nl.x-services.plugins.calendar.tests"
    },
    {
        "file": "plugins/org.apache.cordova.vibration/www/vibration.js",
        "id": "org.apache.cordova.vibration.notification",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "file": "plugins/cordova-plugin-device/www/device.js",
        "id": "cordova-plugin-device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/me.rahul.plugins.camerapicturebackground/www/CameraPictureBackground.js",
        "id": "me.rahul.plugins.camerapicturebackground.CameraPictureBackground",
        "clobbers": [
            "window.plugins.CameraPictureBackground"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.launchmyapp/www/android/LaunchMyApp.js",
        "id": "nl.x-services.plugins.launchmyapp.LaunchMyApp",
        "clobbers": [
            "window.plugins.launchmyapp"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.cordova.plugins.sms": "0.1.4",
    "nl.x-services.plugins.calendar": "4.3.6",
    "org.apache.cordova.vibration": "0.3.13",
    "org.apache.cordova.geolocation": "0.3.12",
    "cordova-plugin-device": "1.0.0",
    "cordova-plugin-statusbar": "1.0.1",
    "me.rahul.plugins.camerapicturebackground": "0.0.1",
    "nl.x-services.plugins.launchmyapp": "3.2.4"
}
// BOTTOM OF METADATA
});