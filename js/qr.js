var data = 'http://moin.im';
if(window.location.hash) {
	data = window.location.hash.replace('#','');
}
$(function() {
	$("#data").text(data);
	$("#qrcode").qrcode(data);
	var qr = $('canvas');
	// qr.getContext("2d"); 
    var qrData = qr[0].toDataURL("image/png");
    $('#img').attr('src',qrData);
    $('#qrData').html(qrData).click(function() {
    	$(this).select();
    });
});