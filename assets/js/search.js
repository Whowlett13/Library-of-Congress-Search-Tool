var resultsContainerEl = document.querySelector('#searchResults');

var getLibraryResults = function(){
    term = localStorage.getItem('termS');
    format = localStorage.getItem('formatS');
    if (format === 'undefined'){
    var apiUrl = 'https://www.loc.gov/search/?q=' + term + '&fo=json'
    } else {
        console.log(format);
        var apiUrl = 'https://www.loc.gov/' + format + '/?q=' + term + '&fo=json'
    }
    fetch(apiUrl)
        .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log(data);
            displayResults(data, term);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
    })
    .catch(function (error){
        alert('Unable to connect to Library of Congress');
    });
}

var displayResults = function (results, searchTerm){
    console.log(results.length);
    if (results.length === 0){
        resultsContainerEl.textContent = 'No results found.';
        return;
    }

    for (var i = 0;i < results.length;i++){
        var resultEl = document.createElement('a');
        resultEl.classList = 'list-item flex-row justify-space-between align-center';
        var titleEl = document.createElement('span');
        titleEl.textContent = response.title;
        resultEl.appendChild(titleEl);
        var dateEl = document.createElement('span');
        dateEl.textContent = response.date;
        resultEl.appendChild(dateEl);
        var subjectEl = document.createElement('span');
        subjectEl.textContent = response.subject;
        resultEl.appendChild(subjectEl);
        var readMoreEl = document.createElement('span');
        readMoreEl.innerHTML = response.url;
        resultEl.appendChild(readMoreEl);
        resultsContainerEl.appendChild(resultEl);
    }
}

getLibraryResults();