import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Servicio} from "../../interfaces/servicio.interface";
import {HttpHeaders, HttpClient} from '@angular/common/http';
import 'rxjs/Rx';


@Injectable()
export class ServicioService{

  _url: string = "https://firstdb00.firebaseio.com/0/sesion.json";

  constructor(private http: Http){

  }

  nuevaSesion(servicio: Servicio){
    let body = JSON.stringify(servicio);
    let _headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
    return this.http.post(this._url, body, {headers: _headers})
      .map(res=>{
        console.log(res.json());
        return res.json;
      });
  }

}
