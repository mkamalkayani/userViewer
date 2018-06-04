import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { User } from '../user';
import { AlbumService } from '../album.service';
import { Album } from '../album';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnChanges {
  @Input() public selectedUser: User;
  private albums: Album[];
  public selectedUserAlbums: Album[];

  constructor(private _albumService: AlbumService) { }

  ngOnInit() {
    this._albumService.getAlbums()
      .subscribe(data => this.albums = data);
  }

  filterAlbums(Obj) {
    return Obj.userId === this.selectedUser.id;
  }

  ngOnChanges() {
    if (this.selectedUser) {
      this.selectedUserAlbums = this.albums.filter(this.filterAlbums, this);
      console.log(this.selectedUserAlbums);
    }
  }

}
