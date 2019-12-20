// var apiKey = 'GID2j6rLsppstHJDHpq4cG6z4RN7CWMC';
// var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=' + apiKey;

function updatepage(data) {
    var numArticals = $('#article-count').val();
    for (var i = 0; i < numArticals.length; i++) {
        var artical = data.response.docs[i];
        var articalCount = i + 1;
        var $articalList = $('<ul>');
        $articalList.addClass('list-group');

        $('#articale-section').append($articalList);

    }
}
function buildQueryUrl() {
    var myKey = 'GID2j6rLsppstHJDHpq4cG6z4RN7CWMC';
    var userSearch = $('#search-term').val().trim();
    var searchStartYear = $('#start-year').val().trim();
    var searchEndYear = $('#end-year').val().trim();
    if (parseInt(searchEndYear)) {
        // adding 0101 because the format for the sear is a full date yyyy/mm/dd
        searchEndYear = searchEndYear + '0101'
    }
    if (parseInt(searchStartYear)) {
        // adding 0101 because the format for the sear is a full date yyyy/mm/dd
        searchStartYear = searchStartYear + '0101'
    }
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
    // console.log(url);
    $.ajax({
        url: url,
        method: "GET"
    }).then(updatepage);


})




