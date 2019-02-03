const firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

const config = {
    apiKey: process.env.FB_APIKEY,
    authDomain: process.env.FB_AUTHDOMAIN,
    databaseURL: process.env.FB_DATABASEURL,
    projectId: process.env.FB_PROJECTID,
    storageBucket: process.env.FB_STORAGEBUCKET,
    messagingSenderId: process.env.FB_MESSAGINGSENDERID
};
firebase.initializeApp(config);

const userUid = process.env.USER_UID;
console.log(userUid);


function getStatusLedFirebase(device) {
    return firebase.database().ref('/devices/' + userUid + '/' + device + '/')
        .once('value')
        .then(function (snapshot) {
            if (snapshot && snapshot.val()) return snapshot.val();
            return false;
        })
        .catch(function (error) {
            console.error(error)
        });
}

function login(email, pass) {

    firebase
        .auth()
        .signInWithEmailAndPassword(email, pass)
        .catch(function (error) {
            // Handle Errors here.
           console.error(error)
        });

}


module.exports = {
    getStatusLedFirebase,
    login
};
