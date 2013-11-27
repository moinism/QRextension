var data = 'http://moin.im';
if(window.location.hash) {
	data = window.location.hash.replace('#','');
}
$(function() {
	$("#data").text(data);
	$("#qrcode").qrcode(data);
});