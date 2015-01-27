$(document).ready(function() {
	var max_zeichen=90;
	$("#artikel").click(function() {
		var item =$('#wiki').val();
		if(item==="") {
			$('#wiki').addClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput wrong\">No empty searches allowed!</p>");
		}
		else if(item.length>max_zeichen) {
			$('#wiki').addClass('highlighted');
		}
		else{
			addToList(url,item," (Artikel)");
			function OpenInNewTab(url) {
				  var win = window.open(url, '_blank');
				  win.focus();
				};
			var url ="http://de.wikipedia.org/wiki/Spezial:Suche?search="+item+"&go=Artikel";
			OpenInNewTab(url);
		}
	});
	$("#volltext").click(function() {
		var item =$('#wiki').val();
		if(item==="") {
			$('#wiki').addClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput wrong\">No empty searches allowed!</p>");
			$('#volltext').removeClass('btn-default');
			$('#volltext').addClass('btn-danger');
		}
		else if(item.length>max_zeichen) {
			$('#wiki').addClass('highlighted');
		}
		else{
			addToList(url,item," (Volltext)");
			var url = "http://de.wikipedia.org/wiki/Spezial:Suche?search="+item+"&fulltext=Volltext";
			OpenInNewTab(url);
		}
	});
	
	$('#wiki').on('input',function() {
		var val = max_zeichen-$('#wiki').val().length;
		if(val<0) {
			$('#wiki').addClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput wrong\">Number of signs exceed the limit by "+(val*-1)+ " signs.</p>");
			$('#volltext').removeClass('btn-default');
			$('#volltext').addClass('btn-danger');
			$('#artikel').removeClass('btn-default');
			$('#artikel').addClass('btn-danger');
		}
		else if (val === max_zeichen) {
			$('#wiki').addClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput wrong\">No empty searches allowed.!</p>");	
			$('#volltext').removeClass('btn-default');
			$('#volltext').addClass('btn-danger');
			$('#artikel').removeClass('btn-default');
			$('#artikel').addClass('btn-danger');
		}
		else {
			$('#wiki').removeClass('highlighted');
			$('.checkInput').replaceWith("<p class=\"checkInput\">Signs left: "+val+"</p>");
			$('#volltext').removeClass('btn-danger');
			$('#artikel').removeClass('btn-danger');
			$('#volltext').addClass('btn-default');
			$('#artikel').addClass('btn-default');
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
		$('.liste').append("<li class=\"listitem\"> <a class=\"link\" href=\""+url+"\">"+item+"</a>"+message+"<span class=\"x btn btn-danger\">remove</span> </li>");
	}
	function OpenInNewTab(url) {
		  var win = window.open(url, '_blank');
		  win.focus();
	};
	
})