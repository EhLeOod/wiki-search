window.onload = function () {
  document.getElementById('input').focus();
};

$(document).ready(function(){
  // var search;
  
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
          var title = response.query.search[0].title;
          console.log(title);          
          var url = 'https://en.wikipedia.org/wiki/'
          console.log(url);
          $('#zero').html('<a href=\''   + url + title +'\'>' + title + '</a>' );
          // console.log(document.getElementById('zero'));
          $('#one').text(response.query.search[1].title);
          $('#two').text(response.query.search[2].title); 
          $('#three').text(response.query.search[3].title); 
          $('#four').text(response.query.search[4].title); 
          $('#five').text(response.query.search[5].title); 
          $('#six').text(response.query.search[6].title); 
          $('#seven').text(response.query.search[7].title); 
          $('#eight').text(response.query.search[8].title); 
          $('#nine').text(response.query.search[9].title);      
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