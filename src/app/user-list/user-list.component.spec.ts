import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from '../user.service';
import { HttpClientModule } from '@angular/common/http';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let userService: UserService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [ HttpClientModule ],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty array', () => {
    expect(component.users).toEqual([]);
  });
});
