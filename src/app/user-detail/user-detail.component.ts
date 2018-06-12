import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../user';
import { AlbumService } from '../album.service';
import { Album } from '../album';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private id: number;
  public albumsOfSelectedUser: Album[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private _albumService: AlbumService
  ) { }

  filterAlbums(Obj) {
    return Obj.userId === this.id;
  }

  getId(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getId();

    this._albumService.getAlbums()
      .subscribe(data => {
        this.albumsOfSelectedUser = data.filter(this.filterAlbums, this);
      });
  }

}
