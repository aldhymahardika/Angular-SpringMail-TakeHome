import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UniversitasService {

  private baseUrl='http://localhost:8080/'

  constructor(private http: HttpClient) { }

  public getList():Observable<any>{
    return this.http.get(this.baseUrl + "regis/show/all");
  }

  public getId(idRegis:number): Observable<any>{
    return this.http.get(this.baseUrl + "regis/show/" +idRegis)
  }

  public getListApprove(status:string):Observable<any>{
    return this.http.get(this.baseUrl+ "regis/show/all/" +status)
  }

  public getInsert(Registrasi:Object):Observable<Object>{
    return this.http.post(this.baseUrl+ "regis/insert", Registrasi);
  }

  public getUpdate(idRegis:number, status:string): Observable<Object>{
    return this.http.post(this.baseUrl+ "regis/update/" +idRegis+"/"+status , {responseType: 'text'})
  }

  public getDelete(idRegis:number): Observable<Object>{
    return this.http.post(this.baseUrl+ "regis/delete/" + idRegis, {responseType: 'text'})
  }
}
