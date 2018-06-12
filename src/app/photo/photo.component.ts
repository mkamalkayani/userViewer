import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Album } from '../album';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit, OnChanges {
  @Input() public selectedAlbum: Album;
  private photos: Photo[];
  public selectedAlbumPhotos: Photo[];

  constructor(private _photoService: PhotoService) { }

  ngOnInit() {
    this._photoService.getPhotos()
      .subscribe(data => this.photos = data);
  }

  filterPhotos(Obj) {
    return Obj.albumId === this.selectedAlbum.id;
  }

  ngOnChanges() {
    if (this.selectedAlbum) {
      this.selectedAlbumPhotos = this.photos.filter(this.filterPhotos, this);
    }
  }

}
