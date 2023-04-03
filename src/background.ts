chrome.tabs.onCreated.addListener(function (tab) {
	// 在这里处理新标签页的打开事件
	console.log(tab);
	if (tab.pendingUrl?.startsWith('https://m.tb.cn/')) {
		chrome.windows.create({
			url: tab.pendingUrl,
			type: 'popup',
			width: 375,
			height: 812,
		});
	}
});
