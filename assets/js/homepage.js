var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make a get request to url
    fetch(apiUrl).then(function(response) {
      console.log(response);
      response.json().then(function(data) {
        displayRepos(data, user);
      });
    });
  };

  var userFormEl = document.querySelector('#user-form');
  var nameInputEl = document.querySelector('#username');

  var formSubmitHandler = function(event) {
      event.preventDefault();
        // get value from input element
        var username = nameInputEl.value.trim();

        if (username) {
        getUserRepos(username);
        nameInputEl.value = "";
        } else {
        alert("Please enter a GitHub username");
        }
  };


var displayRepos = function(repos, searchTerm) {
    console.log(repos);
    console.log(searchTerm);
};


  userFormEl.addEventListener("submit", formSubmitHandler);