import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ModulesToolsModule } from './modules/modules-tools/modules-tools.module';


import { AppComponent } from './app.component';
import { HomeMovieComponent } from './components/home-movie/home-movie.component';
import { MessagesComponent } from './messages/messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { moviesReducer } from './NgRx-State/movie.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';








@NgModule({
    declarations: [
        AppComponent,
        HomeMovieComponent,
        MessagesComponent,
       
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModulesToolsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({movies: moviesReducer}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule { }
