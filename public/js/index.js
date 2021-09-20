
const signIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    // console.log(provider)
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      var token = credential.accessToken;
  
      // The signed-in user info.
      var user = result.user;
     checkIfRegistered(user.uid);
      //checkTwo(user.uid);

      window.location = 'register.html';
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      const err = {
        errorCode,
        errorMessage,
        email,
        credential
      };
      console.log(err);
    });
  }

  const checkIfRegistered = (userId) => {
    console.log("BEGIN");
    const userRef = firebase.database().ref(`users/${userId}`);
    console.log("UserID: "+userId);
    console.log("UserRef: "+userRef);
    //way 1
    userRef.on('value', (snapshot) => {
        console.log("userRef function Begins");
        const data = snapshot.val();
        for(const noteItem in data) {
          const note = data[noteItem];
          console.log(note);
        };
      })
    console.log("END");
    console.log("aaabaa");
  };