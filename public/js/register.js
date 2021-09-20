let googleUser;

window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUser = user;
    } else {
      window.location = 'index.html'; // If not logged in, navigate back to login page.
    }
  });
};



const submitName = () => {
    const nameInput= document.querySelector('#name-input');
    console.log(googleUser.uid);
    console.log(nameInput.value);

    firebase.database().ref(`users/${googleUser.uid}`).push({
        name: nameInput.value
    })
    .then(() => {
        nameInput.value = "";
    });
}