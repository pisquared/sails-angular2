/**
 * Created by marc on 17/08/16.
 */

import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'heroes',
                component: HeroesComponent
            },
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'detail/:id',
                component: HeroDetailComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]),
    ],
    exports: [
        RouterModule
    ],
    providers: [
        //AuthGuard
    ],
})

export class AppRoutingModule {}