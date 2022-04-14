$(document).ready(function(){

	console.log('script loaded');

	const wdthmax = 100;

	//standard sliders
	$('.axis-range').on('input', function(){

		let value = parseInt($(this).val()); 
		
		//get slider input value
		// console.log(value);

		const slidertype = $(this).data('type'); //get slider axis

		// console.log("--"+slidertype, value );

		$('#bigletter').css("--"+slidertype, value);

	});


	
});

