function redirect(url) {
	if (!url.startsWith('http://') && !url.startsWith('https://')) {
		url = 'http://' + url; 
	}
	window.location.href = url;
}












