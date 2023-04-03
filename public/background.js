/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    var _a;
    if ((_a = changeInfo.url) === null || _a === void 0 ? void 0 : _a.startsWith('https://h5.m.goofish.com/')) {
        chrome.tabs
            .query({
            currentWindow: true,
        })
            .then((res) => {
            if (res.length !== 1) {
                chrome.windows.create({
                    url: changeInfo.url,
                    type: 'popup',
                    width: 375,
                    height: 812,
                });
            }
        });
    }
});

/******/ })()
;