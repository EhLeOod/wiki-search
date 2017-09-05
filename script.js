$(document).ready(function(){
  var entry;
  $('#random').on('click', function() {
   var random = 'https://en.wikipedia.org/wiki/Special:Random';

   window.open(random);
  });
  function wikiAPI() {
        //WORKS. Means that wikiAPI() IS running.
    alert('hello world');
      $.ajax({
        url: 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm&formatversion=2&continue=',
        type: 'GET',
        data: {
          'origin': '*',
        },
        processData: true,
        // headers: {
        //   'Access-Control-Allow-Origin' : '*'
        // } ,
        crossDomain: true,
        // async: false
        // jsonp: 'jsonp',
        // dataType: 'jsonp',
        // accepts: 'text/html'
        // jsonpCallback:'response'
        // query.pages.title<?>
  
        //maybe want to access extracts|info|pageprops|revisions in parameters of prop (query sub/module) e.g. prop:info<?>
        // dataType:'json',
        // type:'GET',
        
        success: function(response) {
          alert('fuck you CORS light');
          
              } 
        });
    }
   
  

wikiAPI();  

});