import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class GuitarsService {
  constructor(private http:HttpClient) {}
  private listGuitars: any = [];

  private urlApi = "http://localhost:3000";

  getGuitars(){
    return this.http.get(this.urlApi+'/guitars');
  }

  getGuitar(id:any){
    return this.http.get(`${this.urlApi}/guitar/${id}`);
  }

  saveGuitar(guitar:any){
    return this.http.post(`${this.urlApi}/guitar`, guitar);
  }

  updateGuitar(guitar:any){
    return this.http.put(`${this.urlApi}/guitar/${guitar.id}`, guitar);
  }

  get datos (){
    return [...this.listGuitars]
  }
}
