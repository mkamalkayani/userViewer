import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
    private _url = 'http://jsonplaceholder.typicode.com/albums';

    constructor(private http: HttpClient) { }

    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>(this._url);
    }
}
