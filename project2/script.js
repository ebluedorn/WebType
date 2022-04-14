$(document).ready(function() {


  // Your JavaScript goes here.
  console.log('hello world');
 
  $('#darkmode').click(function(){
    console.log('button clicked');

    $('body').toggleClass('darkmode');


  });

});

$(document).ready(function() {

  

	//standard sliders
	$('.axis-range').on('input', function(){

		let value = parseInt($(this).val()); //get slider input value
		// console.log(value);

		const slidertype = $(this).data('type'); //get slider axis

		// console.log("--"+slidertype, value );

		$('#bigletter').css("--"+slidertype, value);

	});

});