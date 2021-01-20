var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos").then(function(reponse) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

var response = fetch("https://api.github.com/users/octocat/repos");
console.log(response);