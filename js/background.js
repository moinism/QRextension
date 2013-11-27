function qr (data) {
	chrome.tabs.create({url:"qr.html#"+data});
}
function qrLink (info,tab) {
	qr(info.linkUrl);
}
function qrPage (info,tab) {
	qr(info.pageUrl);
}
function qrImg (info,tab) {
	qr(info.srcUrl);
}
function qrText (info,tab) {
	qr(info.selectionText);
}
chrome.contextMenus.create({"title": "QR this link", "contexts":["link"], "onclick": qrLink});
chrome.contextMenus.create({"title": "QR this image", "contexts":["image"], "onclick": qrImg});
chrome.contextMenus.create({"title": "QR this page", "contexts":["page"], "onclick": qrPage});
chrome.contextMenus.create({"title": "QR '%s'", "contexts":["selection"], "onclick": qrText});