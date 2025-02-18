import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, ReplaySubject } from 'rxjs';

declare const gapi: any;

@Injectable({
  providedIn: 'root',
})
export class GoogleSigninService {
  private auth2: gapi.auth2.GoogleAuth | null = null;
  private subject = new ReplaySubject<gapi.auth2.GoogleUser | null>(1);

  constructor() {
    console.log('gapi: ', gapi);
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: environment.GAPI_CLIENT_ID,
      });
    });
  }

  public signIn() {
    this.auth2
      ?.signIn({
        scope: 'https://www.googleapis.com/auth/calendar',
      })
      .then((user: gapi.auth2.GoogleUser) => {
        this.subject.next(user);
        console.log('user: ', user);
      })
      .catch((error) => {
        console.log('error - ', error);
        this.subject.next(null);
      });
  }

  public signOut() {
    this.auth2?.signOut().then(() => this.subject.next(null));
  }

  public observable(): Observable<gapi.auth2.GoogleUser | null> {
    return this.subject.asObservable();
  }
}
