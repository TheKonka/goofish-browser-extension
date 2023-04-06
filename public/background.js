/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    var _a, _b;
    if (((_a = changeInfo.url) === null || _a === void 0 ? void 0 : _a.startsWith('https://h5.m.goofish.com/')) || ((_b = changeInfo.url) === null || _b === void 0 ? void 0 : _b.startsWith('https://m.zhuanzhuan.com/'))) {
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