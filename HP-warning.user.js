// ==UserScript==
// @name         Isleward - HP Warning
// @namespace    http://tampermonkey.net/
// @version      1.0.3
// @description  Warn you when you HP get low
// @author       Silence.sys
// @match        *.play.isleward.com/*
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @resource     HPwarn https://cdn.rawgit.com/Isleward-Addon-Dev-Group/hp-warning/1.0.3/hp-warn.css
// ==/UserScript==

(function() {
    var css = GM_getResourceText('HPwarn');
    GM_addStyle(css);
    var scriptElement = document.createElement( "script" );
    scriptElement.type = "text/javascript";
    scriptElement.src = "https://cdn.rawgit.com/Isleward-Addon-Dev-Group/hp-warning/1.0.3/hp-warn.js";
    document.body.appendChild( scriptElement );
})();