$(document).ready(function() {
	var max_zeichen=90;
	$("#artikel").click(function() {
		var item =$('#wiki').val();
		if(item==="") {
			$('#wiki').addClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput wrong\">Keine leere Suche erlaubt!");
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
			OpenInNewTab(url);
			addToList(url,item);
		}
	});
	$("#volltext").click(function() {
		var item =$('#wiki').val();
		if(item==="") {
			$('#wiki').addClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput wrong\">Keine leere Suche erlaubt!");
		}
		else if(item.length>max_zeichen) {
			$('#wiki').addClass('highlighted');
		}
		else{
			function OpenInNewTab(url) {
				  var win = window.open(url, '_blank');
				  win.focus();
				};
			var url = "http://de.wikipedia.org/wiki/Spezial:Suche?search="+item+"&fulltext=Volltext";
			OpenInNewTab(url);
			addToList(url,item);
		}
	});
	
	$('#wiki').on('input',function() {
		var val = max_zeichen-$('#wiki').val().length;
		if(val<0) {
			$('#wiki').addClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput wrong\">Ihre Sucheingabe überschreitet die erlaubte Länge um: "+(val*-1)+ " Zeichen");
		}
		else if (val === max_zeichen) {
			$('#wiki').addClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput wrong\">Keine leere Suche erlaubt!");		
		}
		else {
			$('#wiki').removeClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput\">Noch erlaubte Zeichen: "+val);
		}
	});
	$(document).on('click','.item',function() {
		$(this).remove();
	})
	
	function addToList(url,item) {
		$('.liste').append("<li class=\"item\">	<a href=\""+url+"\">"+item+"</a>	</li>");
	}
})