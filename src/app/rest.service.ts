import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) {}
   
    
    getUsers(){
    return this.http.get<Users[]>("http://35.154.122.171/Users");
    
   }

   topUsers(){
    return this.http.get<Users[]>("http://35.154.122.171/Users?_limit=20")
   }


   searchProduct(query: string) {
    return this.http.get<Users[]>(
      `http://35.154.122.171/Users?q=${query}`
    );
    }


    getProduct(id:string){
      return this.http.get<Users[]>(`http://35.154.122.171/Users?Key=${id}`)
    }

    getProductDetails(id: string): Observable<Users[]> {
      return this.http.get<Users[]>(`http://35.154.122.171/Users?Key=${id}`);
    }
  
}
