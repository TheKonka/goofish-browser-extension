chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status === 'complete') {
		if (tab.url?.startsWith('https://h5.m.goofish.com/') || tab.url?.startsWith('https://m.zhuanzhuan.com/')) {
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
