$(document).ready(function() {
	$(".button").click(function() {
		var item =$('#wiki').val();
		if(item==="") {
			$('#wiki').addClass('highlighted');
			alert("no empty search please");
		}
		else{
			$('.liste').append('<li class="item">'+item+'</li>');
			function OpenInNewTab(url) {
				  var win = window.open(url, '_blank');
				  win.focus();
				};
			OpenInNewTab("http://de.wikipedia.org/wiki/Spezial:Suche?search="+item+"&go=Artikel")
			
		}
	});
	$(document).on('click','.item',function() {
		$(this).remove();
	})
	$('#wiki').on('input',function() {
		var input = $('#wiki').val();
		if(! /^[a-zA-Z0-9 ]+$/.test(input)) {
			$('wiki').addClass('highlighted');
		}
		else {
			$('wiki').removeClass('highlighted');
		}
	});
})