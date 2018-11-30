// -- `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// -- The list of file replacements can be found in `angular.json`.

/*Important Note*/
/***
 * Authentication Menu => Web Setup you => you can find your firebase credential
 */
export const environment = {
  production: false,
  firebase: {
    apiKey: 'Your api key',
    authDomain: 'Your authDomain key',
    databaseURL: 'Your firebase database URLs',
    projectId: 'Your Project-Id',
    storageBucket: 'Your firebase storage bucket',
    messagingSenderId: 'Your Message sender id'
  }
};

