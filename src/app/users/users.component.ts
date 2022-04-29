import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {Users} from '../users';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
   public users: Users[] = [];

    constructor(private usersService: UsersService) {}

    public getUsers(): void {
        this.usersService.getUsers()
            .subscribe(users => this.users = users);
    }

    public deleteUser(user: Users): void {
        this.users = this.users.filter(us => us != user);
        this.usersService.deleteUser(user)
            .subscribe();
    }

    ngOnInit(): void {
        this.getUsers();
    }
}
