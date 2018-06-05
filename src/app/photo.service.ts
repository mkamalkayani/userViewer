import { Injectable } from '@angular/core';
import { Photo } from './photo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
    private _url = 'http://jsonplaceholder.typicode.com/photos';

    constructor(private http: HttpClient) { }

    getPhotos(): Observable<Photo[]> {
        return this.http.get<Photo[]>(this._url);
    }
}
