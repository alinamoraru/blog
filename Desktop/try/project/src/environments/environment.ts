// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
      apiKey: "AIzaSyA5Cd6wWhGyS0vztwbNJleYtdaeRyDrc8Q",
      authDomain: "ngoblog-ro.firebaseapp.com",
      databaseURL: "https://ngoblog-ro.firebaseio.com",
      projectId: "ngoblog-ro",
      storageBucket: "ngoblog-ro.appspot.com",
      messagingSenderId: "800042857882"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
