function isValidLinkedinURL(str) {
    if(/^(?:http(?:s)?:\/\/)?(?:www\.|\w\w\.)?linkedin\.com\/((?:in)\/(?:[a-zA-Z0-9-]{5,30}(?:\/)?)|(?:profile\/)(?:view\?id=[0-9]+))?$/gm.test(str)) {
            console.log('YES It is valid Linkedin URL.');
        } else {
            console.log('NO It is not valid URL.');
        }
    }
    
    isValidLinkedinURL("https://www.linkedin.com/fgdgdg");
    isValidLinkedinURL("https://www.linkedin.com/in/abs12asd");

    
    