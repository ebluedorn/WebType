// console log test 


$(document).ready(function() {
	var a = 2;
	console.log(a);
});

$(document).ready(function(){   


	// console logging the data
	let info;
	$.getJSON("dishes.json")
	  .done(function( data ) {
		console.log(data);
  
		for( let i = 0; i<data.length; i++){
		  let item = data[i];
  // can wrap item.recipe in an a href tag for url
		  let element = `<div class="card">
		  <div class="title">${item.title}:</div>
		  <div class="cook"><iframe width="560" height="315" src="${item.cook}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

		  <div class="artist">${item.artist}</div>

		  </div>`
  
		  $('#items').append(element);
		  console.log(i, item);
		}
  
	  });
  
  }); 
	


jQuery(document).ready(function($){
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
});

//open popup
function openpopup(id) {
    event.preventDefault();
    	$("#"+id+"").addClass('is-visible');
}




