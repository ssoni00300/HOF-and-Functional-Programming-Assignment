function isValidURL(str) {
if(/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(str)) {
		console.log('YES');
	} else {
		console.log('NO');
	}
}

isValidURL("https://shubham");
isValidURL("https://shubham.in");
