function qr (data) {
	chrome.tabs.create({url:"qr.html#"+data});
}


function onClickHandler(info, tab) {
	switch(info.menuItemId) {
		case "qrLink":
			qr(info.linkUrl);
			break;
		
		case "qrImg":
			qr(info.srcUrl);
			break;
		
		case "qrPage":
			qr(info.pageUrl);
			break;
		
		case "qrText":
			qr(info.selectionText);
			break;
	}
};


chrome.contextMenus.onClicked.addListener(onClickHandler);


chrome.runtime.onInstalled.addListener(function (){
	chrome.contextMenus.create({"title": "QR this link", "contexts":["link"], "id": "qrLink"});
	chrome.contextMenus.create({"title": "QR this image", "contexts":["image"], "id": "qrImg"});
	chrome.contextMenus.create({"title": "QR this page", "contexts":["page"], "id": "qrPage"});
	chrome.contextMenus.create({"title": "QR '%s'", "contexts":["selection"], "id": "qrText"});
});

