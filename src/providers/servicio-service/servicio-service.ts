import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Servicio} from "../../interfaces/servicio.interface";
import {HttpHeaders, HttpClient} from '@angular/common/http';
import 'rxjs/Rx';


@Injectable()
export class ServicioService{

  _urlSesion: string = "https://firstdb00.firebaseio.com/0/sesion.json";


  constructor(private http: Http, private httpClient: HttpClient){

  }

  nuevaSesion(servicio: Servicio){
    let body = JSON.stringify(servicio);
    let _headers = new Headers({'Accept': 'application/json','Content-Type': 'application/json'});
    return this.http.post(this._urlSesion, body, {headers: _headers})
      .map(res=>{
        console.log(res.json());
        return res.json;
      });
  }

  newSession(_servicio: Servicio){
    let _body = JSON.stringify(_servicio);
    let _headers = new HttpHeaders({'Accept': 'application/json','Content-Type': 'application/json'});
    return this.httpClient.post<Servicio>(this._urlSesion, _body, {headers:_headers})
      .map(res => {

          return res;
      });
  }

}
