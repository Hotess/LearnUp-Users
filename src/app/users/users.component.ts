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
    public userCounter: number = 35;
    public currentCount: number = 0;
    private SCROLL_LOADING_GAP: number = 100;

    constructor(private usersService: UsersService) {}

    public getAllUsers() {
        this.usersService.getUsers()
            .subscribe(users => {
                this.users = users.slice(this.currentCount, this.userCounter)

            });
    }

    public deleteUser(user: Users): void {
        this.users = this.users.filter(us => us != user);
        this.usersService.deleteUser(user)
            .subscribe(() => {
                this.SCROLL_LOADING_GAP--;
            });
    }

    ngOnInit(): void {
        this.getAllUsers();
    }

    ngAfterViewInit(): void {
        document.addEventListener("scroll", () => {
            this.onScroll();
        });

        this.loadNewData();
    }

    public onScroll() {
        if (this.isCameraTouchesBottom()) {
            this.loadNewData();
        }
    }

    public loadNewData(): void {
        if (this.userCounter >= this.SCROLL_LOADING_GAP) return;
        this.userCounter++;

        this.getAllUsers();
    }

    private isCameraTouchesBottom(): boolean {
        return (document.body.offsetHeight + document.body.offsetTop <= window.scrollY + window.innerHeight + this.SCROLL_LOADING_GAP);
    }
}
