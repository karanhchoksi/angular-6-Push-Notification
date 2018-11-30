/***
 * Give the service worker access to Firebase Messaging.
 * Note that you can only use Firebase Messaging here, other Firebase libraries
 */


importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');


/***
 * 1. Initialize the Firebase app
 * 2. messagingSenderId is your server Server key --> Project Overview => Press on setting icon => Cloud Messaging  =>you can find your server key
 */

firebase.initializeApp({
  'messagingSenderId': 'Your Server key'
});

/**
 *Retrieve an instance of Firebase Messaging so that it can handle background
 * messages.
 */

const messaging = firebase.messaging();
