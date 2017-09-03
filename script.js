$(document).ready(function(){
  $('#random').on('click', function() {
   var random = 'https://en.wikipedia.org/wiki/Special:Random';

   window.open(random);
  });

});    

// <!-- 

// User Story: I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.

// DONEUser Story: I can click a button to see a random Wikipedia entry.

// Hint #2: Here's an entry on using Wikipedia's API: https://www.mediawiki.org/wiki/API:Main_page.
