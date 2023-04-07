/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    var _a, _b;
    if (changeInfo.status === 'complete') {
        if (((_a = tab.url) === null || _a === void 0 ? void 0 : _a.startsWith('https://h5.m.goofish.com/')) || ((_b = tab.url) === null || _b === void 0 ? void 0 : _b.startsWith('https://m.zhuanzhuan.com/'))) {
            if (tab.width && tab.width > 750) {
                chrome.windows.create({
                    url: tab.url,
                    type: 'popup',
                    width: 430,
                    height: 812,
                });
            }
        }
    }
});

/******/ })()
;