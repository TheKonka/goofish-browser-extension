chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.url?.startsWith('https://h5.m.goofish.com/')) {
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
