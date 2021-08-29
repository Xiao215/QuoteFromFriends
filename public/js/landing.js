let googleUser;

window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUser = user;
      const container = document.querySelector('.container');
      const welcoming=document.createElement("h1");
      welcoming.id="title";
      welcoming.innerText="Welcome, "+user.displayName;
      container.appendChild(welcoming);
    } else {
      window.location = 'index.html'; // If not logged in, navigate back to login page.
    }
  });
};