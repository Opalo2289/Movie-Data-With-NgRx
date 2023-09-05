import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ModulesToolsModule } from './modules/modules-tools/modules-tools.module';


import { AppComponent } from './app.component';
import { HomeMovieComponent } from './components/home-movie/home-movie.component';
import { MessagesComponent } from './messages/messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







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
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule { }
