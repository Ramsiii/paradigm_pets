/**
 * Paradigm Pet Professionals - Site-wide search for pet care topics.
 * Allows quick navigation to specific pages and sections from any page.
 */
(function () {
  // Topic index: keywords map to a page and optional anchor (section id).
  // First matching entry wins, so order more specific topics first if needed.
  var TOPIC_INDEX = [
    { keywords: ['kitten', 'kittens', '0-4 weeks', '0 4 weeks', 'nursing', 'queen'], page: 'cats.html', anchor: 'weeks-0-4' },
    { keywords: ['kitten food', 'kitten diet', '4 weeks', '1 year cat', 'wet food', 'dry kitten'], page: 'cats.html', anchor: 'weeks-4-1year' },
    { keywords: ['adult cat', 'cat diet', 'cat food', 'obesity', 'meals'], page: 'cats.html', anchor: 'years-1-7' },
    { keywords: ['senior cat', '7 years', 'older cat', 'protein', 'quality protein'], page: 'cats.html', anchor: 'years-7-plus' },
    { keywords: ['cat', 'cats'], page: 'cats.html', anchor: '' },
    { keywords: ['dog diet', 'dog food', 'dog exercise', 'meals per day', 'water'], page: 'dogs.html', anchor: 'diet-exercise' },
    { keywords: ['grooming', 'brushing', 'bath', 'ticks', 'fleas dog', 'handling'], page: 'dogs.html', anchor: 'grooming-handling' },
    { keywords: ['vaccination', 'vaccinations', 'vaccines', 'medications', 'rabies', 'parvovirus', 'vet'], page: 'dogs.html', anchor: 'vaccinations-medications' },
    { keywords: ['dog', 'dogs'], page: 'dogs.html', anchor: '' },
    { keywords: ['fleas', 'flea', 'get rid fleas'], page: 'FAQs.html', anchor: 'faq-fleas' },
    { keywords: ['bird', 'birds', 'cockatiel', 'budgie', 'parrot', 'bird life'], page: 'FAQs.html', anchor: 'faq-bird' },
    { keywords: ['snake', 'snakes', 'feed snake', 'snake feeding'], page: 'FAQs.html', anchor: 'faq-snake' },
    { keywords: ['faq', 'faqs', 'question', 'questions', 'answer'], page: 'FAQs.html', anchor: '' },
    { keywords: ['home', 'main'], page: 'home.html', anchor: '' }
  ];

  function getQuery() {
    var input = document.getElementById('search-query');
    return input ? input.value.trim().toLowerCase() : '';
  }

  function findTarget(query) {
    if (!query) return null;
    for (var i = 0; i < TOPIC_INDEX.length; i++) {
      var entry = TOPIC_INDEX[i];
      for (var j = 0; j < entry.keywords.length; j++) {
        if (query.indexOf(entry.keywords[j]) !== -1) {
          return { page: entry.page, anchor: entry.anchor || '' };
        }
      }
    }
    return null;
  }

  function handleSearch(e) {
    e.preventDefault();
    var query = getQuery();
    var target = findTarget(query);
    if (target) {
      var url = target.page + (target.anchor ? '#' + target.anchor : '');
      window.location.href = url;
    } else {
      // No match: go to FAQs as a general "search results" / help page
      window.location.href = 'FAQs.html';
    }
  }

  function init() {
    var form = document.getElementById('topnav-search');
    if (form) {
      form.addEventListener('submit', handleSearch);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
