// ==UserScript==
// @name         Get True link
// @namespace    https://greasyfork.org/users/400139
// @version      1.3.2
// @description  Script to baypass most short link!! this script to auto decode short link when you got redirect link. save your time, save your money. any request / error put it in feedback
// @author       MeGaNeKo(めがねこ)
// @match        *://*/*
// @exclude      *//*uploaded.net/*
// @exclude      *//*mail.google.com/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js
// ==/UserScript==

$('a').each(function(){
	var aaa = this.href;
	var aab = aaa.toString();
	var cp1 = aab.includes('aHR0');
	var cp2 = aab.includes('http');
	if (cp1 == true){
		try {
			var bba = aab.split("aHR0")[0];
			var bbb = aab.replace('&type=2','').split(bba)[1];
			var bbc = bbb.includes('=');
			if (bbc == true){
				bbb = bbb.split('=')[0];
			}
			var bbd = atob(bbb);
            var bbe = bbd.replace(/([_=:;&\-\/\.\?\d\w]+(\d|\w))/g,'')
            var bbf = bbd.replace(bbe,'')
			$(this).attr("href", bbf);
		}catch(err) {
			$(this).attr("href", aaa);
		}
	}else if (cp2 == true){
        var cca = aab.split("http")[2]
        if (aaa.includes(cca) == true){
            try {
                var ccb = aab.split("http")[1];
                var ccc = aab.split(ccb)[1];
                $(this).attr("href", ccc);
            }catch(err) {
                $(this).attr("href", aaa);
            }
        }
	}
});
