// console log test 


// $(document).ready(function() {
// 	var a = 2;
// 	console.log(a);
// });

let cards = [];
$(document).ready(function(){   


	// console logging the data
	let info;
	$.getJSON("dishes.json")
	  .done(function( data ) {
		console.log(data);
  
		for( let i = 0; i<data.length; i++){
		  let item = data[i];
  // can wrap item.recipe in an a href tag for url
		  let element = `<div class="card" data-artist-filter="${item.artist}" data-vibe-filter="${item.vibe}" data-glam-filter="${item.glam}">

		  <div class="title">${item.title}</div>
		  <div class="videoWrapper ratio-16-9"><iframe width="560" height="315" src="${item.videoWrapper}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
		  <div class="tags">
		  	<div class="artist" id="tag">${item.artist}</div>
		  	<div class="vibe" id="tag">${item.vibe}</div>
			<div class="glam" id="tag">${item.glam}</div>
		  </div>
		  
		  </div>`
  
		  $('#items').append(element);
		//   cards.push(element);
		//   console.log(i, item);
		}

		console.log(cards);

		
  
	  });

	  
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

	// original code -- singular tag


	// $('#ali-andrea').on('click', function(){
	// 	$('.card').each(function(){
	// 		let filter =  $(this).attr('data-artist-filter');
			
	// 		if ( filter == 'Ali Andreea'){

	// 		}else{
	// 			$(this).hide();
	// 		}
	// 	});
	// });

	// updated code that applies to all tags 

	$('select').on('change', function(){
		let filtertype = $(this).attr('id');
		console.log(filtertype);

		let selection = $(this).find(":selected").text();
		console.log(selection);
		
		let attribute = 'data-'+filtertype+'-filter';

		$('.card').each(function(){

			let filter =  $(this).attr(attribute);
			
			if ( filter == selection){
				$(this).show();
			}else{
				$(this).hide();
			}
		});

	});
});

//open popup
function openpopup(id) {
    event.preventDefault();
    	$("#"+id+"").addClass('is-visible');
}




