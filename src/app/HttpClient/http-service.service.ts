import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http : HttpClient) { }

  getDetails(){
    return this.http.get('http://localhost:3000/empDetails')
  }
  postDetails(body:any){
    return this.http.post('http://localhost:3000/empDetails',body)
  }
  editDetails(id:any,body:any){
    return this.http.put('http://localhost:3000/empDetails/'+id,body)
  }
  deleteDetails(id:any){
    return this.http.delete('http://localhost:3000/empDetails/'+id)
  }
}
