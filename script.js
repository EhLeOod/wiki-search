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
          var title1 = response.query.search[1].title;
          var title2 = response.query.search[2].title;
          var title3 = response.query.search[3].title;
          var title4 = response.query.search[4].title;
          var title5 = response.query.search[5].title;
          var title6 = response.query.search[6].title;
          var title7 = response.query.search[7].title;
          var title8 = response.query.search[8].title;
          var title9 = response.query.search[9].title;

          var snippet = response.query.search[0].snippet;          
          var snippet1 = response.query.search[1].snippet;
          var snippet2 = response.query.search[2].snippet;
          var snippet3 = response.query.search[3].snippet;
          var snippet4 = response.query.search[4].snippet;
          var snippet5 = response.query.search[5].snippet;
          var snippet6 = response.query.search[6].snippet;
          var snippet7 = response.query.search[7].snippet;
          var snippet8 = response.query.search[8].snippet;
          var snippet9 = response.query.search[9].snippet;
          
          console.log(title);          
          var url = 'https://en.wikipedia.org/wiki/';
          console.log(url);
          //There's some way to use a for loop... Right?
          // var link;
          // for(i = 0; i < 10; i++) {
          // var link = response.query.search[i].title;
          // return 
          $('#zero').html('<a href=\''   + url + title +'\'>' + title + '</a>' + '<br>' + snippet + '...');
          $('#one').html('<a href=\''   + url + title1 +'\'>' + title1 + '</a>' + '<br>' + snippet1 + '...');
          $('#two').html('<a href=\''   + url + title2 +'\'>' + title2 + '</a>' + '<br>' + snippet2 + '...');      
          $('#three').html('<a href=\''   + url + title3 +'\'>' + title3 + '</a>' + '<br>' + snippet3 + '...')  ; 
          $('#four').html('<a href=\''   + url + title4 +'\'>' + title4 + '</a>' + '<br>' + snippet4 + '...')  ; 
          $('#five').html('<a href=\''   + url + title5 +'\'>' + title5 + '</a>' + '<br>' + snippet5 + '...')  ; 
          $('#six').html('<a href=\''   + url + title6 +'\'>' + title6 + '</a>' + '<br>' + snippet6 + '...')  ; 
          $('#seven').html('<a href=\''   + url + title7 +'\'>' + title7 + '</a>' + '<br>' + snippet7 + '...')  ; 
          $('#eight').html('<a href=\''   + url + title8 +'\'>' + title8 + '</a>' + '<br>' + snippet8 + '...')  ; 
          $('#nine').html('<a href=\''   + url + title9 +'\'>' + title9 + '</a>' + '<br>' + snippet9 + '...')  ; 
          
          // $('#zero').html('<a href=\''   + url + link +'\'>' + title + '</a>' + '<br>' + snippet + '...');
          // $('#one').text(response.query.search[1].title);
          // $('#two').text(response.query.search[2].title); 
          // $('#three').text(response.query.search[3].title); 
          // $('#four').text(response.query.search[4].title); 
          // $('#five').text(response.query.search[5].title); 
          // $('#six').text(response.query.search[6].title); 
          // $('#seven').text(response.query.search[7].title); 
          // $('#eight').text(response.query.search[8].title); 
          // $('#nine').text(response.query.search[9].title);      
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