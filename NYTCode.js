// var apiKey = 'GID2j6rLsppstHJDHpq4cG6z4RN7CWMC';
// var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=' + apiKey;


function buildQueryUrl() {
    var myKey = 'GID2j6rLsppstHJDHpq4cG6z4RN7CWMC';
    var userSearch = $('#search-term').val();
    var searchRecords = $('#article-count').val();
    var searchStartYear = $('#start-year').val();
    var searchEndYear = $('#end-year').val();
    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
    var url = queryURL + 'q=' + userSearch + 'begin_date=' + searchStartYear + '&end_date=' + searchStartYear + '&api-key=' + myKey;
    console.log(url);
    return url;
}


function clear() {
    $('#article-section').clear;

}



$('#run-search').on('click', function () {
    event.preventDefault();
    clear();
    var url = buildQueryUrl();
    console.log(url);
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {

    // })


})




