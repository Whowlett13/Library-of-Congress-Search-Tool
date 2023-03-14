var userFormEl = document.querySelector('#searchBar');
var formatEl = document.querySelector('#formats');
var searchInputEl = document.querySelector('#search');
var resultsContainerEl = document.querySelector('#searchResults');
var format;

var formSubmitHandler = function (event){
event.preventDefault();
var searchTerm = searchInputEl.value.trim();
if (searchTerm){
    redirect(searchTerm);
    searchInputEl.value = '';
} else {
    alert('Please enter a search term');
}
}

var buttonClickHandler = function (event) {
    format = event.target.value;
}

var redirect = function(term){
    localStorage.setItem('termS', term);
    localStorage.setItem('formatS', format);
    document.location.replace('./Search.html')
}

userFormEl.addEventListener('submit', formSubmitHandler);
formatEl.addEventListener('click', buttonClickHandler);