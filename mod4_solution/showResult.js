  (function (window){

	//  var x = document.getElementById('...'); 
	// 	var msg = "<ul>";
	//  for (var j=0; j < myResult.length; j++){
	//   	msg += "<li>" + myResult[j] + "</li>";
	// 	}
	// 	x.innerHTML = msg + "</ul>";

	  var ulelm = document.getElementById('myList'); 
	  var lielm;
		for (var j=0; j < myResult.length; j++){
			lielm = document.createElement('li');
			lielm.textContent = myResult[j];
			ulelm.appendChild(lielm);
	 	}

  })(window);
