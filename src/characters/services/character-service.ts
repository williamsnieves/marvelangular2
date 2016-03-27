import {Injectable} from 'angular2/core';

import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CharacterService{
  private http:Http;
  private characters: any;
  constructor(http: Http){
    this.http = http;
  }

  getCharacters(){
    return this.http.get("http://gateway.marvel.com:80/v1/public/characters?apikey=c66e87a5eacddc7a75dea2e9a1bd657b&hash=82bc3760c427bb75f32fec7440bb8afe&ts=1")
      .map(res => res.json())
  }
  getComics(id:number){
    return this.http.get("http://gateway.marvel.com:80/v1/public/characters/"+id+"/comics?apikey=c66e87a5eacddc7a75dea2e9a1bd657b&hash=82bc3760c427bb75f32fec7440bb8afe&ts=1")
      .map(res => res.json())
  }
}
