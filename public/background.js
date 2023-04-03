/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/

chrome.tabs.onCreated.addListener(function (tab) {
    var _a;
    // 在这里处理新标签页的打开事件
    console.log(tab);
    if ((_a = tab.pendingUrl) === null || _a === void 0 ? void 0 : _a.startsWith('https://m.tb.cn/')) {
        chrome.windows.create({
            url: tab.pendingUrl,
            type: 'popup',
            width: 375,
            height: 812,
        });
    }
});

/******/ })()
;