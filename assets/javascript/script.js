var = document.querySelector('');
var formatButtonsEl = document.querySelector('');
var userFormEl = document.querySelector('');
var searchInputEl = document.querySelector('');
var isFormat = false;
var format;

var formSubmitHandler = function (event){
event.preventDefault();
var searchTerm = searchInputEl.value.trim();
if (searchTerm){
    getLibraryResults(searchTerm);
    searchInputEl.value = '';
} else {
    alert('Please enter a search term');
}
}

var buttonClickHandler = function (event) {
    format = event.target.getAttribute('');
    .textContent = format;
    isFormat = true;
}

var getLibraryResults = function(term){
    if (isFormat === true){
    var apiUrl = 'https://www.loc.gov/search/?q=' + term + '&fo=json'
    } else {
        var apiUrl = 'https://www.loc.gov/' + format + '/?q=' + term + '&fo=json'
    }
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayRepos(data.items, term);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
    });
}

var displayresults = function (results, searchTerm){
    window.location.replace('../../search-results.html')
    
    if (results.length === 0){
        resultsContainerEl.textContent = 'No results found.';
        return;
    }
    resultsContainerEl.textContent = 'Showing results for ' + searchTerm;

    for (var i = 0;i < results.length;i++){
        var resultEl = document.createElement('a');
        resultEl.classList = 'list-item';
        titleEl.textContent = response.title;
        dateEl.textContent = response.date;
        subjectEl.textContent = response.subject;
        var readMore = response.url;
    }
}