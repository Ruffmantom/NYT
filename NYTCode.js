var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=' + apiKey;
var apiKey = 'GID2j6rLsppstHJDHpq4cG6z4RN7CWMC';
var searchRecords = $('#article-count').val();



$('#run-search').on('click', function () {
    event.preventDefault()
    var userSearch = $('#search-term').val();
    console.log(userSearch)
    console.log(searchRecords)
})



// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {




// })