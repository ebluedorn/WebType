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
        <div class="name">${item.recipe}:</div>
        <div class="test">
        <div class="prep">Prep Time: ${item.prep} minutes</div>
        <div class="cook">Cook Time: ${item.cook} minutes</div>
        </div>
        <div class="photo"><img src="${item.photo}"></div>
        </div>`

        $('#items').append(element);
        console.log(i, item);
      }

    });


  // $.getJSON("dishes_withkeys.json")
  //     .done(function( data ) {
  //        console.log(data);
        
  //       //  .html -- instead of click autopopulates the content. but it doesnt refresh
  //       // need to find a way so that the data refreshes? although maybe not... just find
  //       // a way to list the multiple ingredient lists........ 


  //       $('.item').click(function(){
  //           let key = $(this).attr('id');
  //           console.log(key);
  //           let info = data[key];
  //           console.log(info);
  //           let ingredients = info["ingredients"]; //info.ingredients

  //           $('#ingredients').html(ingredients);
  //       });
  //     });

}); 
  