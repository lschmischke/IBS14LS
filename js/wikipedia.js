$(document).ready(function() {
	var max_zeichen=90;
	$("#artikel").click(function() {
		var item =$('#wiki').val();
		if(item==="") {
			$('#wiki').addClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput wrong\">Keine leere Suche erlaubt!</p>");
		}
		else if(item.length>max_zeichen) {
			$('#wiki').addClass('highlighted');
		}
		else{
			function OpenInNewTab(url) {
				  var win = window.open(url, '_blank');
				  win.focus();
				};
			var url ="http://de.wikipedia.org/wiki/Spezial:Suche?search="+item+"&go=Artikel";
			addToList(url,item," (Artikel)");
			OpenInNewTab(url);
		}
	});
	$("#volltext").click(function() {
		var item =$('#wiki').val();
		if(item==="") {
			$('#wiki').addClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput wrong\">Keine leere Suche erlaubt!</p>");
		}
		else if(item.length>max_zeichen) {
			$('#wiki').addClass('highlighted');
		}
		else{
			
			var url = "http://de.wikipedia.org/wiki/Spezial:Suche?search="+item+"&fulltext=Volltext";
			addToList(url,item," (Volltext)");
			OpenInNewTab(url);
		}
	});
	
	$('#wiki').on('input',function() {
		var val = max_zeichen-$('#wiki').val().length;
		if(val<0) {
			$('#wiki').addClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput wrong\">Ihre Sucheingabe überschreitet die erlaubte Länge um: "+(val*-1)+ " Zeichen</p>");
		}
		else if (val === max_zeichen) {
			$('#wiki').addClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput wrong\">Keine leere Suche erlaubt!</p>");		
		}
		else {
			$('#wiki').removeClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput\">Noch erlaubte Zeichen: "+val+"</p>");
		}
	});
	$(document).on('click','.x',function() {
		$(this).parent().remove();
	})
	$(document).on('click','.link',function(event) {
		event.preventDefault();
		var url = $(this).attr('href');
		OpenInNewTab(url);
	})
	
	function addToList(url,item,message) {
		$('.liste').append("<li class=\"listitem\"> <a class=\"link\" href=\""+url+"\">"+item+"</a>"+message+"<span class=\"x\">remove</span> </li>");
	}
	function OpenInNewTab(url) {
		  var win = window.open(url, '_blank');
		  win.focus();
	};
	
})