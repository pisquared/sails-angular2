"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by marc on 17/08/16.
 */
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const hero_service_1 = require("../../services/hero.service");
let HeroDetailComponent = class HeroDetailComponent {
    constructor(heroService, route) {
        this.heroService = heroService;
        this.route = route;
        this.powers = [
            'Really Smart',
            'Super Flexible',
            'Super Hot',
            'Weather Changer'
        ];
        this.vulnerabilities = [
            'Cryptonite',
            'Bad Weather',
            'Schlager Songs',
            'Ice Cream'
        ];
    }
    ngOnInit() {
        this.route.params.forEach((params) => {
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
};
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-hero-detail',
        templateUrl: 'app/components/hero-detail/hero-detail.component.html',
        styleUrls: ['app/components/hero-detail/hero-detail.component.css']
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService,
        router_1.ActivatedRoute])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */ 
//# sourceMappingURL=hero-detail.component.js.map