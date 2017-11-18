fetch("https://api.github.com/users/tracykaur")
  .then(function(r) {
    return r.json();
  })
  .then(function(j) {
    console.log(j);
  })
