import { Injectable } from '@angular/core';
import { User } from './user';
import { users } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    getUsers() {
        return users;
    }
    constructor() { }
}
