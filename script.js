$(document).ready(function(){
  var search;
  
  $('#random').on('click', function() {
   var random = 'https://en.wikipedia.org/wiki/Special:Random';

   window.open(random);
  });
 
  $('#input').keypress(function (e) {
    search = $('#input').val();
    if(e.which == 13) {
      $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        type: 'GET',
        data: {
          action: 'query',
          list: 'search',
          srsearch: '"' + search +'"',
          origin: '*',
          prop: 'info',
          inprop: 'url',
          utf8:'',
          format: 'json',
          formatversion: 2,
          continue: ''
// my code below, dude from FCC above
        // url: 'https://en.wikipedia.org/w/api.php',
        // type: 'GET',
        // data: {
        //   action: 'opensearch',
        //   search: search,
        //   limit: 10,
        //   origin: '*',
        //   prop: 'revisions',
        //   rvprop: 'content',
        //   format: 'json',
        //   formatversion: 2,
        //   continue: ''
        },
        success: function(response) {
          $('#zero').text(response[1][0]);
          $('#one').text(response[1][1]);     
              } 
         });
    
      }
    
       
  });

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