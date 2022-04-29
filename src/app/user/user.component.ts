import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {DadataConfig, DadataType} from '@kolkov/ngx-dadata';
import {UsersService} from "../users.service";
import {Users} from "../users";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
    public user: Users | undefined;
    public configAddress: DadataConfig = {
        apiKey: 'e6a24b14999ff5133d06da1e4097677fa55d1f0d',
        type: DadataType.address,
    };
    public configFio: DadataConfig = {
        apiKey: 'e6a24b14999ff5133d06da1e4097677fa55d1f0d',
        type: DadataType.fio,
    };

    constructor(
        private route: ActivatedRoute,
        private usersService: UsersService,
        private location: Location
    ) {}

    public getUser(): void {
        const id: number = Number(this.route.snapshot.paramMap.get('id'));

        this.usersService.getUser(id).subscribe(user => this.user = user);
    }

    public goBack(): void {
        this.location.back();
    }

    public save() {
        this.usersService.updateUser(this.user).subscribe(() => {
            this.goBack();
        });
    }

    ngOnInit(): void {
        this.getUser();
    }
}
