$(document).ready(function(){
  var entry;
  $('#random').on('click', function() {
   var random = 'https://en.wikipedia.org/wiki/Special:Random';

   window.open(random);
  });
  function wikiAPI() {
       //maybe want to access extracts|info|pageprops|revisions in parameters of prop (query sub/module) e.g. prop:info<?>
      $.ajax({
        url: 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm&formatversion=2&continue=',
        type: 'GET',
        data: {
          'origin': '*',
        },
        success: function(response) {
          // alert('hello');
          $('#input').keypress(function (e){
            if(e.which == 13) {
              $('#entry').text('poopoo');
            }
          })
          // $('#results').text('hello world');
              } 
         });
    }

wikiAPI();  

});


















 // processData: true,
        // crossDomain: true,     
        // headers: {
        //   'Access-Control-Allow-Origin' : '*'
        // } ,
        // async: false
        // jsonp: 'jsonp',
        // dataType: 'json',
        // accepts: 'text/html'
        // jsonpCallback:'response'
        // query.pages.title<?>
        // dataType:'json',
        // type:'GET',