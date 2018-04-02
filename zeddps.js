var js = document.getElementsByClassName('js');
	    var jsUrl = document.getElementsByClassName('js')[0].innerHTML;
	      
		// var script = '\x3Cscript type="text/javascript" src="'+jsUrl+'">\x3C/script>';

		var sc = document.createElement("script"); 
		sc.type = 'text/javascript';
		sc.src = jsUrl;

		for(var i=0; i<js.length; i++){
			js[i].innerHTML = "";
			postscribe(js[i], sc.outerHTML);
			console.log(document.getElementsByClassName('js')[i]);
		}  