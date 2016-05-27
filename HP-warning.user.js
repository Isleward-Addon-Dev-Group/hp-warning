// ==UserScript==
// @name         [dev] Isleward - HP Warning
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Warn you when you HP get low
// @author       Silence.sys
// @match        ://isleward-test.herokuapp.com/*
// @grant        GM_getResourceText
// @grant        GM_addStyle
// @resource     HPwarn http://dev.silencesys.com/isleward/hp-warn.css?v=1.112
// ==/UserScript==

(function() {
    var css = GM_getResourceText('HPwarn');
    GM_addStyle(css);
    var scriptElement = document.createElement( "script" );
    scriptElement.type = "text/javascript";
    scriptElement.src = "http://dev.silencesys.com/isleward/hp-warn.js?v=1.104";
    document.body.appendChild( scriptElement );
})();