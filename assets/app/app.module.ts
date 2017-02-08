import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './components/app/app.component';
import {AppRoutingModule} from "./components/app/app.routing";
import {HeroesComponent} from "./components/heroes/heroes.component";
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {FormsModule} from "@angular/forms";
import {HeroService} from "./services/hero.service";
import {MultiSelectComponent} from "./components/hero-detail/multi-select.component";

@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent,
        MultiSelectComponent
    ],
    imports:      [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [
        HeroService
    ],
    bootstrap:    [
        AppComponent
    ],
})

export class AppModule {}
