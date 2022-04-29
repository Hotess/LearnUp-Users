import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UsersComponent} from './users/users.component';
import {InMemoryDataService} from './in-memory-data.service';
import {UserComponent} from './user/user.component';

import {NgxDadataModule} from '@kolkov/ngx-dadata';

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        UserComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxDadataModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false, passThruUnknownUrl: true}
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {}
