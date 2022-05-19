$(document).ready(function(){   


  // console logging the data
  let info;
  $.getJSON("apitest.json")
    .done(function( data ) {
      console.log(data);

      for( let i = 0; i<data.length; i++){
        let item = data[i];
// can wrap item.recipe in an a href tag for url
        let element = `<div class="card">
        <div class="test">
        <div class="one">${item.one}</div>
        <div class="two">${item.two}</div>
        </div>`

        $('#items').append(element);
        console.log(i, item);
      }

    });

}); 
  