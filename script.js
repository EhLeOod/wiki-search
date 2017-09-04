$(document).ready(function(){
  var entry;
  $('#random').on('click', function() {
   var random = 'https://en.wikipedia.org/wiki/Special:Random';

   window.open(random);
  });
//FIX THIS.
  function wikiAPI() {
    //WORKS. Means that wikiAPI() IS running. alert('hello world');
    $.ajax({
      url: 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=jsonfm&formatversion=2&continue=',
      // query.pages.title<?>

      //maybe want to access extracts|info|pageprops|revisions in parameters of prop (query sub/module) e.g. prop:info<?>
      // dataType:'json',
      // type:'GET',
      
      success: function(data) {
        entry = data.query.revisions
        ('#entry').text(entry);
            } 
      });
  }

wikiAPI();  

});



// <!-- 

// User Story: I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.

// DONEUser Story: I can click a button to see a random Wikipedia entry.

// Hint #2: Here's an entry on using Wikipedia's API: https://www.mediawiki.org/wiki/API:Main_page.
