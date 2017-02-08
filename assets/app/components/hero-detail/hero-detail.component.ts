/**
 * Created by marc on 17/08/16.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';


@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/components/hero-detail/hero-detail.component.html',
    styleUrls: ['app/components/hero-detail/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {


    hero: Hero;

    powers = [
        'Really Smart',
        'Super Flexible',
        'Super Hot',
        'Weather Changer'
    ];

    vulnerabilities = [
        'Cryptonite',
        'Bad Weather',
        'Schlager Songs',
        'Ice Cream'
    ];

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => {
                    this.hero = hero;
                    this.hero.powers = this.hero.powers || [];
                    this.hero.vulnerabilities = this.hero.vulnerabilities || [];
                });
        });
    }

    goBack() {
        window.history.back();
    }
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */