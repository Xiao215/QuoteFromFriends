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
        const dropdown = document.querySelector('.dropbtn');
        const pfp=document.createElement("img");
        pfp.className="pfp";
        pfp.src=user.photoURL;
        dropdown.appendChild(pfp);
    } else {
      window.location = 'index.html'; // If not logged in, navigate back to login page.
    }
  });
};