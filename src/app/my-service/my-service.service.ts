import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class MyServiceService {
  name ;
  constructor(private _http:Http) {}

  retrieveGits(callback,username){
      this._http.get('https://api.github.com/users/'+username).subscribe(
      (response) => {
      console.log('inside response in service.ts');
        this.name = response.json();
        callback(this.name);
      },
      (err) => {

      console.log("error");
      // err='does not exit';
      // return err;
      }
      );
    }
   }
