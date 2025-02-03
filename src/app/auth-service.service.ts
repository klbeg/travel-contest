import { Injectable } from '@angular/core';

declare var gapi: any;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // ... variables
  constructor() { // ... injected services
    // ... general auth logic
  }
  // ... auth methods

  initGoogleOAuth(): Promise<any> {
    console.log('auth running');
    return new Promise((resolve, reject) => {
      gapi.load(
        'auth2',
        async () => {
          const gAuth = await gapi.auth2.init({
            client_id: environment.GAPI_CLIENT_ID,
            fetch_basic_profile: true,
            scope: 'profile email',
          });
          resolve(gAuth);
        },
        reject
      );
    });
  }
}
