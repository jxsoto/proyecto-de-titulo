import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserRespone, User } from '@app/shared/interfaces/usuarios';
import { catchError, Observable, map, throwError } from 'rxjs';
import {environment} from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(authData:User):Observable<UserRespone | void>{
    console.log(authData);
    return this.http
    .post<UserRespone>(`${environment.API_URL}/auth/login`,authData)
    .pipe(
      map( (res:UserRespone)=>{
      this.saveToken(res.token);
    }),
    catchError( (err)=>this.handlerError(err))
    );
  }
  logout():void{
    localStorage.removeItem('token');
  }
  private readToken():void{}
  private saveToken(token:string):void{
    localStorage.setItem('token',token);
  }
  private handlerError(err:any): Observable<never>{
    let errorMessage ='error';
    if (err){
      errorMessage=`Error: code ${err.message}`;
    }
    window.alert(errorMessage);
      return throwError(errorMessage);
  }

}
