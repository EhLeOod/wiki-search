$(document).ready(function(){
  var entry;
  var search;
  
  $('#random').on('click', function() {
   var random = 'https://en.wikipedia.org/wiki/Special:Random';

   window.open(random);
  });
 
  $('#input').keypress(function (e) {
    search = $('#input').val();
    console.log(search);
    if(e.which == 13) {
      $.ajax({
        url: 'https://en.wikipedia.org/w/api.php',
        type: 'GET',
        data: {
          //https://en.wikipedia.org/w/api.php?action=opensearch&search=api&limit=10&namespace=0&format=jsonfm
          action: 'opensearch',
          search: search , //this will actually be user entry
          limit: 10,
          origin: '*',
          prop: 'revisions',
          rvprop: 'content',
          format: 'json',
          formatversion: 2,
          continue: ''
        },
        success: function(response) {
          $('#zero').text(response[1][0]);
          $('#one').text(response[1][1]);
          //if you want to test success of response do below;
          // alert('hello');        
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